const fs = require('fs');
const path = require('path');

// 创建HTML文件来展示项目结构
const htmlContent = `
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MCU Datasheet Docs - 项目截图</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            color: #e2e8f0;
            min-height: 100vh;
            padding: 30px;
        }
        
        .container {
            max-width: 1400px;
            margin: 0 auto;
            background: rgba(30, 41, 59, 0.9);
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            border: 1px solid #334155;
        }
        
        .header {
            text-align: center;
            margin-bottom: 50px;
            padding-bottom: 30px;
            border-bottom: 2px solid #2d6efd;
        }
        
        .title {
            color: #2d6efd;
            font-size: 3.5rem;
            margin-bottom: 15px;
            background: linear-gradient(90deg, #2d6efd, #a3c4ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 2px 10px rgba(45, 110, 253, 0.3);
        }
        
        .subtitle {
            color: #94a3b8;
            font-size: 1.4rem;
            max-width: 800px;
            margin: 0 auto;
            line-height: 1.8;
        }
        
        .status-badges {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 30px;
            flex-wrap: wrap;
        }
        
        .badge {
            padding: 10px 20px;
            border-radius: 25px;
            font-weight: bold;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .badge-success {
            background: linear-gradient(135deg, #10b981, #34d399);
            color: white;
        }
        
        .badge-info {
            background: linear-gradient(135deg, #3b82f6, #60a5fa);
            color: white;
        }
        
        .badge-warning {
            background: linear-gradient(135deg, #f59e0b, #fbbf24);
            color: white;
        }
        
        .dashboard {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 30px;
            margin-bottom: 50px;
        }
        
        .card {
            background: rgba(15, 23, 42, 0.7);
            border-radius: 15px;
            padding: 30px;
            border: 1px solid #334155;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #2d6efd, #a3c4ff);
        }
        
        .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(45, 110, 253, 0.2);
            border-color: #2d6efd;
        }
        
        .card-title {
            color: #2d6efd;
            font-size: 1.8rem;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
        .card-icon {
            font-size: 2rem;
        }
        
        .feature-list {
            list-style: none;
        }
        
        .feature-list li {
            padding: 12px 0;
            border-bottom: 1px solid #334155;
            display: flex;
            align-items: center;
            gap: 12px;
            color: #cbd5e1;
        }
        
        .feature-list li:last-child {
            border-bottom: none;
        }
        
        .feature-icon {
            color: #2d6efd;
            font-size: 1.2rem;
            min-width: 24px;
        }
        
        .mockup-section {
            background: rgba(15, 23, 42, 0.7);
            border-radius: 15px;
            padding: 40px;
            margin: 40px 0;
            border: 1px solid #334155;
        }
        
        .mockup-title {
            color: #2d6efd;
            font-size: 2.2rem;
            margin-bottom: 30px;
            text-align: center;
        }
        
        .browser-mockup {
            background: #1e293b;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }
        
        .browser-header {
            background: #0f172a;
            padding: 15px 20px;
            display: flex;
            align-items: center;
            gap: 15px;
            border-bottom: 1px solid #334155;
        }
        
        .browser-dots {
            display: flex;
            gap: 8px;
        }
        
        .browser-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
        }
        
        .dot-red { background: #ff5f56; }
        .dot-yellow { background: #ffbd2e; }
        .dot-green { background: #27ca3f; }
        
        .browser-url {
            flex: 1;
            background: #1e293b;
            padding: 8px 15px;
            border-radius: 20px;
            color: #94a3b8;
            font-size: 0.9rem;
            border: 1px solid #334155;
        }
        
        .browser-content {
            padding: 40px;
            min-height: 500px;
        }
        
        .content-grid {
            display: grid;
            grid-template-columns: 300px 1fr;
            gap: 30px;
            height: 100%;
        }
        
        .sidebar {
            background: rgba(15, 23, 42, 0.7);
            border-radius: 10px;
            padding: 25px;
            border: 1px solid #334155;
        }
        
        .sidebar-title {
            color: #2d6efd;
            font-size: 1.2rem;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #2d6efd;
        }
        
        .nav-item {
            padding: 12px 15px;
            margin: 8px 0;
            border-radius: 8px;
            color: #cbd5e1;
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .nav-item:hover, .nav-item.active {
            background: rgba(45, 110, 253, 0.1);
            color: #2d6efd;
            border-left: 4px solid #2d6efd;
        }
        
        .main-content {
            background: rgba(15, 23, 42, 0.7);
            border-radius: 10px;
            padding: 30px;
            border: 1px solid #334155;
        }
        
        .doc-title {
            color: #2d6efd;
            font-size: 2rem;
            margin-bottom: 20px;
        }
        
        .doc-subtitle {
            color: #94a3b8;
            font-size: 1.1rem;
            margin-bottom: 30px;
            line-height: 1.6;
        }
        
        .spec-table {
            width: 100%;
            border-collapse: collapse;
            margin: 25px 0;
        }
        
        .spec-table th {
            background: rgba(45, 110, 253, 0.1);
            color: #2d6efd;
            padding: 15px;
            text-align: left;
            border: 1px solid #334155;
        }
        
        .spec-table td {
            padding: 15px;
            border: 1px solid #334155;
            color: #cbd5e1;
        }
        
        .spec-table tr:nth-child(even) {
            background: rgba(30, 41, 59, 0.5);
        }
        
        .code-snippet {
            background: #0f172a;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            border: 1px solid #334155;
            font-family: 'Courier New', monospace;
            color: #a3c4ff;
            line-height: 1.5;
        }
        
        .command-line {
            background: #0f172a;
            border-left: 4px solid #2d6efd;
            padding: 15px 20px;
            margin: 15px 0;
            font-family: 'Courier New', monospace;
            color: #a3c4ff;
            border-radius: 0 8px 8px 0;
        }
        
        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin: 30px 0;
        }
        
        .tech-item {
            background: rgba(45, 110, 253, 0.1);
            padding: 12px 20px;
            border-radius: 25px;
            color: #2d6efd;
            border: 1px solid rgba(45, 110, 253, 0.3);
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .footer {
            text-align: center;
            margin-top: 60px;
            padding-top: 30px;
            border-top: 1px solid #334155;
            color: #94a3b8;
        }
        
        .footer-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            margin-top: 40px;
        }
        
        .footer-card {
            background: rgba(15, 23, 42, 0.7);
            padding: 25px;
            border-radius: 12px;
            border: 1px solid #334155;
        }
        
        .footer-title {
            color: #2d6efd;
            font-size: 1.3rem;
            margin-bottom: 15px;
        }
        
        @media (max-width: 768px) {
            .container {
                padding: 20px;
            }
            
            .title {
                font-size: 2.5rem;
            }
            
            .dashboard {
                grid-template-columns: 1fr;
            }
            
            .content-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 class="title">MCU Datasheet 文档中心</h1>
            <p class="subtitle">基于 Astro + Starlight 构建的专业技术文档平台，为嵌入式研发工程师提供便捷的 Datasheet 查阅和检索服务</p>
            
            <div class="status-badges">
                <div class="badge badge-success">
                    <span>✅</span> 项目已创建
                </div>
                <div class="badge badge-info">
                    <span>⚡</span> Astro 5.0 + Starlight
                </div>
                <div class="badge badge-warning">
                    <span>🔍</span> 全文搜索集成
                </div>
                <div class="badge badge-success">
                    <span>📚</span> 示例文档就绪
                </div>
                <div class="badge badge-info">
                    <span>🌐</span> 多语言支持
                </div>
            </div>
        </div>
        
        <div class="dashboard">
            <div class="card">
                <h2 class="card-title">
                    <span class="card-icon">🎯</span> 核心目标
                </h2>
                <ul class="feature-list">
                    <li>
                        <span class="feature-icon">📄</span>
                        <span><strong>PDF → Markdown</strong>: 标准化转换流程</span>
                    </li>
                    <li>
                        <span class="feature-icon">🔍</span>
                        <span><strong>智能检索</strong>: 全文搜索 + 技术参数过滤</span>
                    </li>
                    <li>
                        <span class="feature-icon">🏢</span>
                        <span><strong>结构化组织</strong>: 厂商/系列/型号层次化</span>
                    </li>
                    <li>
                        <span class="feature-icon">📱</span>
                        <span><strong>移动优先</strong>: 响应式设计，触摸优化</span>
                    </li>
                    <li>
                        <span class="feature-icon">⚡</span>
                        <span><strong>快速构建</strong>: npm run build 一键生成</span>
                    </li>
                </ul>
            </div>
            
            <div class="card">
                <h2 class="card-title">
                    <span class="card-icon">🛠️</span> 技术栈
                </h2>
                <div class="tech-stack">
                    <div class="tech-item">⚡ Astro 5.0</div>
                    <div class="tech-item">✨ Starlight</div>
                    <div class="tech-item">🔎 Pagefind</div>
                    <div class="tech-item">🚀 Vite</div>
                    <div class="tech-item">🎨 Tailwind</div>
                    <div class="tech-item">📱 PWA</div>
                </div>
                <ul class="feature-list">
                    <li>
                        <span class="feature-icon">⚡</span>
                        <span><strong>静态生成</strong>: 零运行时开销，极致性能</span>
                    </li>
                    <li>
                        <span class="feature-icon">🔍</span>
                        <span><strong>搜索优化</strong>: 预构建索引，毫秒级响应</span>
                    </li>
                    <li>
                        <span class="feature-icon">🎨</span>
                        <span><strong>主题定制</strong>: 科技蓝专业配色方案</span>
                    </li>
                    <li>
                        <span class="feature-icon">🌐</span>
                        <span><strong>多语言</strong>: 中英文无缝切换</span>
                    </li>
                </ul>
            </div>
            
            <div class="card">
                <h2 class="card-title">
                    <span class="card-icon">📁</span> 项目结构
                </h2>
                <div class="code-snippet">
mcu-datasheet-docs/
├── 📂 src/content/docs/
│   ├── 📁 intro/              # 介绍文档
│   ├── 📁 getting-started/    # 快速开始指南
│   ├── 📁 vendors/            # MCU 厂商
│   │   ├── 📁 st/             # STMicroelectronics
│   │   │   ├── 📄 index.md    # 厂商概述
│   │   │   ├── 📁 stm32f1/    # STM32F1系列
│   │   │   └── 📄 stm32f103c8t6.md
│   │   └── 📁 nxp/            # NXP Semiconductors
│   └── 📁 specs/              # 文档规范
├── 🎨 src/styles/             # 自定义样式
├── ⚙️ astro.config.mjs        # 主配置
└── 📦 package.json           # 依赖管理
                </div>
            </div>
        </div>
        
        <div class="mockup-section">
            <h2 class="mockup-title">🖥️ 网站界面预览</h2>
            
            <div class="browser-mockup">
                <div class="browser-header">
                    <div class="browser-dots">
                        <div class="browser-dot dot-red"></div>
                        <div class="browser-dot dot-yellow"></div>
                        <div class="browser-dot dot-green"></div>
                    </div>
                    <div class="browser-url">http://localhost:4321/mcu-datasheet-docs</div>
                    <div style="color: #94a3b8; font-size: 0.9rem;">🌙 🔍 🌐</div>
                </