import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  base:
    process.env.NODE_ENV === 'production' ? '/template-frontend/' : '/',
  plugins: [
    eslintPlugin({
      cache: false,
      failOnError: false
    }),
  ],
});
