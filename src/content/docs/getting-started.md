---
title: 快速开始
description: 快速上手 MCU Datasheet 文档中心
---

# 快速开始

本指南将帮助您快速了解如何使用 MCU Datasheet 文档中心。

## 🚀 环境准备

### 1. 安装 Node.js
确保您的系统已安装 Node.js 16+ 版本：

```bash
node --version
# 应该显示 v16.x.x 或更高版本
```

### 2. 克隆项目
```bash
git clone https://github.com/lanwailan/mcu-datasheet-docs.git
cd mcu-datasheet-docs
```

### 3. 安装依赖
```bash
npm install
```

## 📖 添加新文档

### 1. 了解目录结构
```
src/content/docs/
├── intro/              # 介绍文档
├── getting-started/    # 快速开始指南
├── vendors/           # MCU 厂商
│   ├── st/           # STMicroelectronics
│   ├── nxp/          # NXP
│   └── ...
└── specs/            # 文档规范
```

### 2. 创建文档模板
每个文档应包含以下 frontmatter：

```yaml
---
title: "STM32F103C8T6 Datasheet"
description: "STM32F103C8T6 微控制器技术规格书"
mcu_vendor: "STMicroelectronics"
mcu_family: "STM32"
mcu_series: "STM32F1"
mcu_model: "STM32F103C8T6"
core: "ARM Cortex-M3"
flash_size: "64 KB"
ram_size: "20 KB"
clock_speed: "72 MHz"
package: "LQFP48"
operating_voltage: "2.0V - 3.6V"
temperature_range: "-40°C to +85°C"
---
```

### 3. 文档内容结构
```markdown
# 概述

## 产品特性
- ARM Cortex-M3 内核，72 MHz
- 64 KB Flash，20 KB SRAM
- 丰富的外设接口

## 引脚定义

| 引脚 | 名称 | 功能 | 备注 |
|------|------|------|------|
| 1    | VDD  | 电源 | 3.3V |
| 2    | VSS  | 地   | GND  |

## 电气特性

### 工作电压
- 范围：2.0V - 3.6V
- 典型值：3.3V
```

## 🛠️ 构建和部署

### 1. 本地开发
```bash
npm run dev
```
访问 http://localhost:4321

### 2. 构建生产版本
```bash
npm run build
```
构建结果在 `dist/` 目录

### 3. 预览构建结果
```bash
npm run preview
```

## 🔍 搜索功能

文档中心内置了全文搜索功能：
1. 点击右上角的搜索图标
2. 输入关键词（型号、特性、参数等）
3. 查看搜索结果

## 📱 响应式设计

- 支持桌面、平板、手机等多种设备
- 自动适配屏幕尺寸
- 优化阅读体验

---

**下一步**: 查看 [文档规范](/specs/) 了解详细的文档格式要求。