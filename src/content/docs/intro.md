---
title: 简介
description: MCU Datasheet 文档中心介绍
---

# MCU Datasheet 文档中心

欢迎来到 MCU Datasheet 文档中心！这是一个专门为嵌入式研发工程师设计的文档平台。

## 🎯 项目目标

1. **统一文档格式**: 将不同厂商、不同型号的 MCU Datasheet 转换为统一的 Markdown 格式
2. **便捷检索**: 提供强大的搜索功能，快速定位所需的技术规格
3. **结构化展示**: 按照厂商、系列、型号进行层次化组织
4. **技术对比**: 支持不同 MCU 型号的技术参数对比

## 📁 文档结构

文档按照以下层次结构组织：

```
docs/
├── intro/              # 介绍文档
├── getting-started/    # 快速开始指南
├── vendors/           # MCU 厂商目录
│   ├── st/           # STMicroelectronics
│   ├── nxp/          # NXP Semiconductors
│   ├── microchip/    # Microchip Technology
│   ├── ti/           # Texas Instruments
│   ├── infineon/     # Infineon Technologies
│   └── renesas/      # Renesas Electronics
└── specs/            # 文档规范
```

## 📝 使用方式

### 1. 添加新文档
1. 按照规定的 Markdown 格式编写文档
2. 将文档放置在正确的目录结构中
3. 运行 `npm run build` 生成静态网站

### 2. 文档格式要求
- 使用标准的 Markdown 语法
- 包含必要的元数据（frontmatter）
- 图片使用相对路径
- 表格使用 Markdown 表格语法
- 代码块使用适当的语言标识

### 3. 构建和部署
```bash
# 开发模式
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 🔧 技术栈

- **框架**: Astro + Starlight
- **构建工具**: Vite
- **部署**: 支持 Vercel、Netlify、GitHub Pages 等

## 🤝 贡献指南

欢迎提交 Pull Request 来完善文档内容。请确保：
1. 文档格式符合规范
2. 技术参数准确无误
3. 图片清晰可读
4. 遵循目录结构

---

**开始使用**: [快速开始](/getting-started/)