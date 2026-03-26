---
title: 文档规范
description: MCU Datasheet Markdown 文件格式规范
---

# 文档规范

本文档定义了 MCU Datasheet Markdown 文件的格式规范，确保所有文档保持一致的风格和结构。

## 📋 Frontmatter 规范

每个文档必须包含以下 frontmatter 字段：

### 必需字段
```yaml
---
title: "文档标题"
description: "文档简要描述"
---
```

### MCU 专用字段
```yaml
mcu_vendor: "MCU 厂商"
mcu_family: "MCU 系列"
mcu_model: "MCU 型号"
core: "内核类型"
flash_size: "Flash 大小"
ram_size: "RAM 大小"
clock_speed: "主频"
package: "封装类型"
operating_voltage: "工作电压"
temperature_range: "温度范围"
```

## 📝 文档结构规范

### 1. 标题层级
```markdown
# 一级标题（文档标题）

## 二级标题（主要章节）

### 三级标题（子章节）

#### 四级标题（小节）
```

### 2. 章节顺序
建议按以下顺序组织内容：
1. **概述** - 产品简介和特性
2. **引脚定义** - 引脚功能和分配
3. **电气特性** - 电气参数
4. **外设资源** - 外设接口和功能
5. **封装信息** - 物理封装规格
6. **参考设计** - 应用电路示例
7. **开发工具** - 开发环境和工具
8. **相关文档** - 参考文档链接

## 🎨 内容格式规范

### 1. 表格规范
```markdown
| 参数 | 最小值 | 典型值 | 最大值 | 单位 | 条件 |
|------|--------|--------|--------|------|------|
| 工作电压 | 2.0 | 3.3 | 3.6 | V | 全温度范围 |
| 工作电流 | 10 | 15 | 20 | mA | 72MHz 运行 |
```

### 2. 代码块规范
```markdown
```c
// C 代码示例
void SystemInit(void) {
    // 系统初始化代码
}
```

```bash
# Shell 命令示例
make clean
make all
```
```

### 3. 图片规范
```markdown
![图片描述](./images/filename.png)
```
- 图片放在文档同目录的 `images/` 文件夹中
- 使用 PNG 或 SVG 格式
- 确保图片清晰可读

## 🔤 文本格式规范

###