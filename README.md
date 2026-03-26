# MCU Datasheet Documentation Center

基于 Astro + Starlight 构建的 MCU Datasheet 文档中心，专门为嵌入式研发工程师提供便捷的 Datasheet 查阅和检索服务。

## 🎯 项目特点

- **统一格式**: 将 PDF Datasheet 转换为标准化的 Markdown 格式
- **强大搜索**: 内置全文搜索，快速定位技术规格
- **结构化组织**: 按厂商、系列、型号层次化组织
- **多语言支持**: 支持中文和英文文档
- **响应式设计**: 适配桌面、平板、手机等多种设备

## 🚀 快速开始

### 环境要求
- Node.js 16+
- npm 或 yarn

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```
访问 http://localhost:4321

### 构建生产版本
```bash
npm run build
```

### 预览构建结果
```bash
npm run preview
```

## 📁 项目结构

```
mcu-datasheet-docs/
├── src/
│   ├── content/
│   │   ├── docs/
│   │   │   ├── zh/          # 中文文档
│   │   │   │   ├── intro/   # 介绍
│   │   │   │   ├── vendors/ # MCU 厂商
│   │   │   │   └── specs/   # 规范文档
│   │   │   └── en/          # 英文文档
│   │   └── config.ts       # 内容配置
│   ├── styles/             # 自定义样式
│   └── layouts/           # 布局组件
├── public/                # 静态资源
├── astro.config.mjs       # Astro 配置
└── package.json
```

## 📝 文档规范

### 1. 文件命名
- 使用小写字母和连字符
- 示例: `stm32f103c8t6.md`

### 2. Frontmatter 格式
```yaml
---
title: "文档标题"
description: "文档描述"
mcu_vendor: "厂商名称"
mcu_family: "产品系列"
mcu_model: "具体型号"
core: "内核类型"
flash_size: "Flash 大小"
ram_size: "RAM 大小"
clock_speed: "主频"
package: "封装类型"
operating_voltage: "工作电压"
temperature_range: "温度范围"
datasheet_version: "文档版本"
release_date: "发布日期"
keywords: ["关键词1", "关键词2"]
---
```

### 3. 内容结构
1. 产品概述
2. 引脚定义
3. 电气特性
4. 外设资源
5. 封装信息
6. 参考设计
7. 开发工具
8. 相关文档

## 🔧 技术栈

- **框架**: [Astro](https://astro.build/) 5.0
- **文档主题**: [Starlight](https://starlight.astro.build/)
- **构建工具**: Vite
- **样式**: CSS 自定义属性
- **部署**: 支持 Vercel、Netlify、GitHub Pages

## 📊 支持的 MCU 厂商

- STMicroelectronics (STM32 系列)
- NXP Semiconductors
- Microchip Technology
- Texas Instruments
- Infineon Technologies
- Renesas Electronics

## 🔍 搜索功能

项目内置了全文搜索功能，支持：
- 型号搜索
- 技术参数搜索
- 关键词搜索
- 多语言搜索

## 📱 响应式特性

- 自适应各种屏幕尺寸
- 移动端优化
- 触摸友好
- 离线支持

## 🤝 贡献指南

### 添加新文档
1. Fork 本仓库
2. 创建新的文档文件
3. 遵循文档规范
4. 提交 Pull Request

### 文档要求
- 技术参数准确
- 格式规范统一
- 图片清晰可读
- 链接有效可用

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系

- GitHub Issues: [问题反馈](https://github.com/lanwailan/mcu-datasheet-docs/issues)
- 文档改进: 提交 Pull Request

## 🙏 致谢

- [Astro](https://astro.build/) - 现代静态站点生成器
- [Starlight](https://starlight.astro.build/) - 优秀的文档主题
- 所有贡献者和用户

---

**开始使用**: 查看 [快速开始指南](/zh/getting-started/)