import site from "../config/site.json";

export function GET() {
  const lines = ["User-agent: *", "Allow: /"];
  if (!site.noindex) lines.push("", `Sitemap: ${site.domain}/sitemap-index.xml`);
  return new Response(lines.join("\n") + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
