// Fails if any internal link, slug reference or image points to something that does not exist.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

const SRC = "src";
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const files = walk(SRC).filter((f) => /\.(tsx?)$/.test(f));
const read = (f) => readFileSync(join(SRC, "lib/data", f), "utf8");
const slugs = (f) => [...read(f).matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);

const routes = new Set(["/", "/styles", "/layouts", "/materials", "/projects", "/showroom", "/consultation"]);
slugs("styles.ts").forEach((s) => routes.add(`/styles/${s}`));
slugs("projects.ts").forEach((s) => routes.add(`/projects/${s}`));
const layoutIds = new Set(slugs("layouts.ts"));

const bad = [];
for (const r of routes) {
  const seg = r.split("/").filter(Boolean);
  const direct = join(SRC, "app", ...seg, "page.tsx");
  const dyn = seg.length === 2 ? join(SRC, "app", seg[0], "[slug]", "page.tsx") : null;
  if (!existsSync(direct) && !(dyn && existsSync(dyn))) bad.push(`route without page: ${r}`);
}

let count = 0;
for (const f of files) {
  const src = readFileSync(f, "utf8");
  for (const m of src.matchAll(/href[=:]\s*["'](\/[^"'?]*)["']/g)) {
    count++;
    const [path, hash] = m[1].split("#");
    if (!routes.has(path || "/")) bad.push(`${f}: ${m[1]}`);
    if (hash && path === "/layouts" && !layoutIds.has(hash)) bad.push(`${f}: missing anchor ${m[1]}`);
  }
  for (const m of src.matchAll(/href=\{`(\/[a-z]+)[/#]\$\{/g)) {
    count++;
    if (!["/styles", "/projects", "/layouts"].includes(m[1])) bad.push(`${f}: ${m[1]}/…`);
  }
  for (const m of src.matchAll(/img\("([^"]+)"/g)) if (!existsSync(join("public/images", `${m[1]}.webp`))) bad.push(`${f}: missing image ${m[1]}`);
}

const styleSlugs = new Set(slugs("styles.ts"));
for (const m of read("projects.ts").matchAll(/style:\s*"([^"]+)"/g)) if (!styleSlugs.has(m[1])) bad.push(`projects.ts style: ${m[1]}`);
for (const m of read("projects.ts").matchAll(/getProject\("([^"]+)"\)/g)) if (!slugs("projects.ts").includes(m[1])) bad.push(m[0]);
for (const f of files) for (const m of readFileSync(f, "utf8").matchAll(/get(Project|Style)\("([^"]+)"\)/g)) {
  const list = m[1] === "Project" ? slugs("projects.ts") : slugs("styles.ts");
  if (!list.includes(m[2])) bad.push(`${f}: ${m[0]}`);
}

if (bad.length) {
  console.error("Problems found:\n" + bad.join("\n"));
  process.exit(1);
}
console.log(`${routes.size} routes, ${count} internal links checked, 0 dead. All images present.`);
