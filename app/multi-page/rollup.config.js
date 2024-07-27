import {quiltApp} from '@quilted/rollup/app';

export default quiltApp({
  browser: {entry: './browser.tsx', assets: {minify: false}},
  server: {entry: './server.tsx'},
});
