import * as path from 'path';
import { defineConfig } from 'rspress/config';
import { pluginPlayground } from '@rspress/plugin-playground';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  globalStyles:path.join(__dirname, 'global.css'),
  root: path.join(__dirname, 'docs'),
  title: 'Rspress',
  description: 'Rspack-based Static Site Generator',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },
    ],
  },
  plugins: [pluginPlayground()],
  markdown: {
    mdxRs: false
  },
  builderConfig:{
    tools: {
      postcss(config) {
        config.postcssOptions?.plugins?.push(tailwindcss);
      },
    },
  }
});
