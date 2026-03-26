import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'MCU Datasheet Docs',
      description: 'MCU Datasheet Documentation Center',
    }),
  ],
});