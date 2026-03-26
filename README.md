# MCU Datasheet Docs

基于 Astro + Starlight 构建的 MCU Datasheet 文档中心，专为嵌入式研发工程师设计。

## 🎯 项目目标

- **统一文档格式**: 将 PDF Datasheet 转换为标准化的 Markdown 格式
- **便捷检索**: 提供全文搜索和技术参数过滤
- **结构化组织**: 按厂商/系列/型号层次化分类
- **多语言支持**: 中英文文档支持
- **响应式设计**: 适配桌面、平板、手机等多种设备

## 🚀 快速开始

### 1. 环境准备
```bash
# 安装 Node.js 16+
node --version

# 克隆项目
git clone https://github.com/lanwailan/mcu-datasheet-docs.git
cd mcu-datasheet-docs

# 安装依赖
npm install
```

### 2. 开发模式
```bash
npm run dev
# 访问 http://localhost:4321
```

### 3. 构建部署
```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 📁 项目结构

```
mcu-datasheet-docs/
├── astro.config.mjs          # Astro 配置
├── package.json             # 项目依赖
├── src/
│   ├── content/
│   │   └── docs/           # 文档内容
│   │       ├── intro.md    # 介绍
│   │       ├── getting-started.md  # 快速开始
│   │       ├── vendors/    # MCU 厂商
│   │       │   ├── st.md   # STMicroelectronics
│   │       │   └── st/     # ST 系列文档
│   │       └── specs.md    # 文档规范
│   ├── styles/
│   │   └── custom.css      # 自定义样式
│   └── env.d.ts
└── public/                  # 静态资源
```

## 📝 文档规范

### 1. Frontmatter 格式
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
---
```

### 2. 文档结构
1. **概述** - 产品简介和特性
2. **引脚定义** - 引脚功能和分配
3. **电气特性** - 电气参数
4. **外设资源** - 外设接口和功能
5. **封装信息** - 物理封装规格
6. **参考设计** - 应用电路示例
7. **开发工具** - 开发环境和工具
8. **相关文档** - 参考文档链接

## 🔧 技术栈

- **框架**: Astro 6.0 + Starlight 0.38
- **构建工具**: Vite
- **搜索**: Pagefind 全文搜索
- **部署**: 支持 Vercel、Netlify、GitHub Pages
- **样式**: 自定义 CSS + Starlight 主题

## 🌐 部署方式

### Vercel (推荐)
```bash
# 自动部署
vercel --prod
```

### GitHub Pages
1. Settings → Pages → Build and deployment
2. Source: GitHub Actions
3. 使用 `.github/workflows/deploy.yml`

### Netlify
```bash
# 一键部署
netlify deploy --prod
```

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 📞 联系方式

- **GitHub**: [lanwailan](https://github.com/lanwailan)
- **项目地址**: https://github.com/lanwailan/mcu-datasheet-docs
- **在线演示**: https://mcu-datasheet-docs.vercel.app

---

**开始使用**: [查看文档](https://mcu-datasheet-docs.vercel.app)