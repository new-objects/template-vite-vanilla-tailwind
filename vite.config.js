import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import { qrcode } from 'vite-plugin-qrcode';

export default defineConfig({
  base: process.env.DEPLOY_ENV === 'gh-pages' ? '/template-frontend/' : '/',
  plugins: [
    qrcode(),
    eslintPlugin({
      cache: false,
      failOnError: false,
    }),
  ],
});
