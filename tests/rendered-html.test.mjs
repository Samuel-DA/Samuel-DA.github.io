import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL(`../dist/server/index.js?test=${Date.now()}`, import.meta.url);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("https://samuel-da.github.io/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the completed portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Samuel Dolapo Adebiyi/);
  assert.match(html, /CentiHR/);
  assert.match(html, /Real-Time Payments Ledger/);
  assert.match(html, /Open Banking Financial Insights/);
  assert.match(html, /FMDQ Ltd/);
  assert.match(html, /profile-cover\.png/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview/);
});

test("produces a GitHub Pages artifact", async () => {
  await access(new URL("../docs/.nojekyll", import.meta.url));
  await access(new URL("../docs/profile-cover.png", import.meta.url));
  const html = await readFile(new URL("../docs/index.html", import.meta.url), "utf8");
  assert.match(html, /href="\.\/assets\//);
  assert.match(html, /src="\.\/profile-cover\.png"/);
});
