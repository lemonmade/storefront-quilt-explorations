import {quiltApp} from '@quilted/rollup/app';
import {cloudflarePages} from '@quilted/cloudflare/craft';

const config = await quiltApp({
  browser: {entry: './browser.tsx'},
  server: {entry: './server.tsx'},
  runtime: cloudflarePages(),
});

export default config;
