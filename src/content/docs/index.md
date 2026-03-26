---
title: MCU Datasheet Docs
description: MCU Datasheet Documentation Center for Embedded Engineers
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

## 🚀 快速导航

### 开始使用
- [简介](/intro/) - 项目概述和目标
- [快速开始](/getting-started/) - 上手指南

### MCU 厂商
- [STMicroelectronics](/vendors/st/) - STM32 系列文档
- [NXP Semiconductors](/vendors/nxp/) - Kinetis、LPC 系列
- [Microchip Technology](/vendors/microchip/) - PIC、AVR、SAM 系列

### 文档规范
- [文档规范](/specs/) - Markdown 文件格式规范

## 📊 技术栈

- **框架**: Astro 6.0 + Starlight 0.38
- **构建工具**: Vite
- **搜索**: Pagefind 全文搜索
- **部署**: 支持 Vercel、Netlify、GitHub Pages
- **样式**: 自定义 CSS + Starlight 主题

## 📝 使用方式

### 1. 添加新文档
1. 按照规定的 Markdown 格式编写文档
2. 将文档放置在正确的目录结构中
3. 运行 `npm run build` 生成静态网站

### 2. 构建和部署
```bash
# 开发模式
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 🔧 项目状态

✅ **已完成**:
- 基础架构搭建
- 核心文档创建
- 搜索功能集成
- GitHub 仓库配置

🔄 **进行中**:
- 添加更多 MCU 文档
- 优化搜索体验
- 配置自动化部署

---

**开始探索**: [查看简介](/intro/) | [快速开始](/getting-started/)