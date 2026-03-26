// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://mcu-datasheet-docs.vercel.app',
	integrations: [
		starlight({
			title: 'MCU Datasheet Docs',
			description: 'MCU Datasheet Documentation Center for Embedded Engineers',
			social: [
				{ 
					icon: 'github', 
					label: 'GitHub', 
					href: 'https://github.com/lanwailan/mcu-datasheet-docs' 
				},
			],
			sidebar: [
				{
					label: '开始',
					items: [
						{ label: '简介', slug: 'intro' },
						{ label: '快速开始', slug: 'getting-started' },
					],
				},
				{
					label: 'MCU 厂商',
					autogenerate: { directory: 'vendors' },
				},
				{
					label: '文档规范',
					autogenerate: { directory: 'specs' },
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
		}),
	],
});
