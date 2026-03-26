---
title: 快速开始
description: 快速上手 MCU Datasheet 文档中心的使用
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
src/content/docs/zh/
├── vendors/           # MCU 厂商
│   ├── st/           # STMicroelectronics
│   ├── nxp/          # NXP
│   └── ...
├── families/          # MCU 系列
└── models/           # 具体型号
```

### 2. 创建文档模板
每个文档应包含以下 frontmatter：

```yaml
---
title: "STM32F103C8T6 Datasheet"
description: "STM32F103C8T6 微控制器技术规格书"
mcu_vendor: "STMicroelectronics"
mcu_family: "STM32F1"
mcu_series: "STM32F103"
mcu_model: "STM32F103C8T6"
core: "ARM Cortex-M3"
flash_size: "64 KB"
ram_size: "20 KB"
clock_speed: "72 MHz"
package: "LQFP48"
operating_voltage: "2.0V - 3.6V"
temperature_range: "-40°C to +85°C"
datasheet_version: "Rev 18"
release_date: "2023-10"
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
| ...  | ...  | ...  | ...  |

## 电气特性

### 工作电压
- 范围：2.0V - 3.6V
- 典型值：3.3V

### 电流消耗
- 运行模式：XX mA @ 72 MHz
- 睡眠模式：XX μA

## 外设资源

### 通信接口
- 2x SPI
- 2x I2C
- 3x USART
- 1x USB 2.0

### 定时器
- 3x 16位定时器
- 1x 高级控制定时器

## 封装信息

### LQFP48 封装尺寸
![封装尺寸图](./images/package-lqfp48.png)

## 参考设计

### 最小系统电路
![最小系统电路](./images/minimal-circuit.png)

## 开发工具

### 推荐 IDE
- STM32CubeIDE
- Keil MDK
- IAR Embedded Workbench

### 调试工具
- ST-LINK/V2
- J-Link

## 相关文档
- [参考手册](链接)
- [应用笔记](链接)
- [勘误表](链接)
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

## 🔄 自动构建

### GitHub Actions 配置
项目已配置自动构建工作流：
- 推送代码到 main 分支时自动构建
- 部署到 GitHub Pages
- 自动生成搜索索引

## 🐛 常见问题

### Q: 文档图片不显示？
A: 确保图片路径正确，图片文件放在文档同目录的 `images/` 文件夹中。

### Q: 搜索功能不工作？
A: 需要先运行 `npm run build` 生成搜索索引。

### Q: 如何添加新厂商？
A: 在 `src/content/docs/zh/vendors/` 下创建新目录，并添加 `index.md` 文件。

## 📚 下一步

- 查看 [MD 文件格式规范](/zh/specs/md-format/)
- 了解 [目录结构规范](/zh/specs/directory-structure/)
- 浏览现有 [MCU 厂商文档](/zh/vendors/)