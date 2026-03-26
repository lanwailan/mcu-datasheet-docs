---
title: Introduction
description: MCU Datasheet Documentation Center - Providing convenient Datasheet lookup and retrieval services for embedded R&D engineers
---

# MCU Datasheet Documentation Center

Welcome to the MCU Datasheet Documentation Center! This is a documentation platform specifically designed for embedded R&D engineers, aiming to provide convenient MCU Datasheet lookup and retrieval services.

## 🎯 Project Goals

1. **Unified Document Format**: Convert MCU Datasheets from different manufacturers and models into a unified Markdown format
2. **Convenient Retrieval**: Provide powerful search functionality for quick location of required technical specifications
3. **Structured Presentation**: Organize documents hierarchically by manufacturer, series, and model
4. **Technical Comparison**: Support technical parameter comparison between different MCU models

## 📁 Document Structure

Documents are organized in the following hierarchical structure:

```
docs/
├── vendors/           # MCU Manufacturer Directory
│   ├── st/           # STMicroelectronics
│   ├── nxp/          # NXP Semiconductors
│   ├── microchip/    # Microchip Technology
│   ├── ti/           # Texas Instruments
│   ├── infineon/     # Infineon Technologies
│   └── renesas/      # Renesas Electronics
├── families/          # MCU Series Classification
└── models/           # Specific Model Documentation
```

## 📝 Usage Instructions

### 1. Adding New Documents
1. Write documents according to the specified Markdown format
2. Place documents in the correct directory structure
3. Run `npm run build` to generate the static website

### 2. Document Format Requirements
- Use standard Markdown syntax
- Include necessary metadata (frontmatter)
- Use relative paths for images
- Use Markdown table syntax for tables
- Use appropriate language identifiers for code blocks

### 3. Building and Deployment
```bash
# Development mode
npm run dev

# Build production version
npm run build

# Preview build results
npm run preview
```

## 🔧 Technology Stack

- **Framework**: Astro 5.0
- **Documentation Theme**: Starlight
- **Build Tool**: Vite
- **Deployment**: Supports Vercel, Netlify, GitHub Pages, etc.

## 🤝 Contribution Guidelines

Welcome to submit Pull Requests to improve document content. Please ensure:
1. Document format complies with specifications
2. Technical parameters are accurate
3. Images are clear and readable
4. Follow directory structure

## 📞 Support and Feedback

If you encounter issues during use or have improvement suggestions, please contact us through:
- Submit GitHub Issue
- Participate in document improvement

---

**Get Started**: [Quick Start](/en/getting-started/)