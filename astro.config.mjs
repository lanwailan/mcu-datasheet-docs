import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'MCU Datasheet Docs',
      description: 'MCU 嵌入式领域 Datasheet 文档中心',
      defaultLocale: 'root',
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh',
        },
        en: {
          label: 'English',
          lang: 'en',
        },
      },
      sidebar: [
        {
          label: '开始',
          items: [
            { label: '简介', link: '/intro/' },
            { label: '快速开始', link: '/getting-started/' },
          ],
        },
        {
          label: 'MCU 厂商',
          items: [
            { label: 'STMicroelectronics', link: '/vendors/st/' },
            { label: 'NXP', link: '/vendors/nxp/' },
            { label: 'Microchip', link: '/vendors/microchip/' },
            { label: 'Texas Instruments', link: '/vendors/ti/' },
            { label: 'Infineon', link: '/vendors/infineon/' },
            { label: 'Renesas', link: '/vendors/renesas/' },
          ],
        },
        {
          label: '文档规范',
          items: [
            { label: 'MD 文件格式', link: '/specs/md-format/' },
            { label: '目录结构', link: '/specs/directory-structure/' },
            { label: '图片处理', link: '/specs/image-handling/' },
          ],
        },
      ],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/lanwailan/mcu-datasheet-docs',
        },
      ],
      customCss: [
        // 可以添加自定义 CSS 文件
        './src/styles/custom.css',
      ],
    }),
  ],
});