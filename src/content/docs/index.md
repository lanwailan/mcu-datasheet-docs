---
title: MCU Datasheet 文档中心
description: 为嵌入式研发工程师提供便捷的 MCU Datasheet 查阅和检索服务
template: splash
---

# MCU Datasheet 文档中心

欢迎来到 MCU Datasheet 文档中心！这是一个专门为嵌入式研发工程师设计的文档平台。

## 🎯 核心功能

- **📄 标准化文档**: 将 PDF Datasheet 转换为统一的 Markdown 格式
- **🔍 智能检索**: 全文搜索 + 技术参数过滤
- **🏢 结构化组织**: 按厂商/系列/型号层次化分类
- **🌐 多语言支持**: 中文和英文文档
- **📱 响应式设计**: 完美适配各种设备

## 🚀 快速开始

1. **浏览文档**: 查看左侧导航栏中的文档分类
2. **搜索功能**: 使用右上角的搜索框快速查找
3. **添加文档**: 按照规范创建新的 Markdown 文件
4. **构建部署**: 运行 `npm run build` 生成静态网站

## 📁 文档结构

```
docs/
├── intro/              # 介绍文档
├── getting-started/    # 快速开始指南
├── vendors/           # MCU 厂商文档
│   ├── st/           # STMicroelectronics
│   ├── nxp/          # NXP Semiconductors
│   └── ...
└── specs/             # 文档规范
```

## 🔧 技术栈

- **框架**: Astro 5.0 + Starlight
- **构建**: Vite
- **搜索**: Pagefind
- **部署**: 支持 Vercel、Netlify、GitHub Pages

---

**开始探索**: [查看简介](/intro/) | [快速开始](/getting-started/)