import { defineConfig } from "astro/config";

// 静的サイトとして dist/ に書き出す。Cloudflare Workers は dist/ をそのまま配信する。
export default defineConfig({
  output: "static",
});
