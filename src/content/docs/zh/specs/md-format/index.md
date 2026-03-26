---
title: MD 文件格式规范
description: MCU Datasheet Markdown 文件格式规范
---

# MD 文件格式规范

本文档定义了 MCU Datasheet Markdown 文件的格式规范，确保所有文档保持一致的风格和结构。

## 📋 Frontmatter 规范

每个文档必须包含以下 frontmatter 字段：

### 必需字段
```yaml
---
title: "文档标题"
description: "文档简要描述"
mcu_vendor: "MCU 厂商"
mcu_family: "MCU 系列"
mcu_model: "MCU 型号"
---
```

### 可选字段
```yaml
mcu_series: "子系列"           # 如：STM32F103
core: "内核类型"               # 如：ARM Cortex-M3
flash_size: "Flash 大小"       # 如：64 KB
ram_size: "RAM 大小"          # 如：20 KB
clock_speed: "主频"           # 如：72 MHz
package: "封装类型"           # 如：LQFP48
operating_voltage: "工作电压"  # 如：2.0V - 3.6V
temperature_range: "温度范围"  # 如：-40°C to +85°C
datasheet_version: "文档版本"  # 如：Rev 18
release_date: "发布日期"       # 如：2023-10
keywords: ["关键词1", "关键词2"] # 搜索关键词
---
```

## 📝 文档结构规范

### 1. 标题层级
```markdown
# 一级标题（文档标题，frontmatter 中定义）

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
- 添加适当的 alt 文本

### 4. 链接规范
```markdown
[链接文本](相对路径或绝对URL)
```
- 内部链接使用相对路径
- 外部链接使用完整 URL
- 链接文本应描述链接内容

## 🔤 文本格式规范

### 1. 技术术语
- MCU 型号：`STM32F103C8T6`
- 电压单位：`3.3V`（注意大小写）
- 频率单位：`72 MHz`（数字和单位间有空格）
- 温度范围：`-40°C to +85°C`

### 2. 强调和加粗
```markdown
*斜体* 用于强调
**粗体** 用于重要概念或关键词
```

### 3. 列表格式
```markdown
- 无序列表项
  - 子列表项
  - 子列表项

1. 有序列表项
2. 有序列表项
```

## 📊 数据表示规范

### 1. 数值范围
```markdown
工作电压：2.0V - 3.6V
温度范围：-40°C to +85°C
频率范围：8 MHz - 72 MHz
```

### 2. 单位表示
```markdown
正确：64 KB, 20 KB, 72 MHz, 3.3V
错误：64kb, 20K, 72Mhz, 3.3v
```

### 3. 特殊符号
```markdown
度：°C
微：μ（使用 Unicode 字符）
欧姆：Ω
```

## 🖼️ 图片处理规范

### 1. 图片命名
```
stm32f103-pinout.png      # 引脚图
stm32f103-block-diagram.svg  # 框图
stm32f103-package-lqfp48.png # 封装图
```

### 2. 图片尺寸
- 原理图：宽度不超过 1200px
- 引脚图：宽度不超过 800px
- 封装图：保持原始比例

### 3. 图片优化
- 使用 PNG 格式保存图表
- 使用 SVG 格式保存矢量图
- 压缩图片以减少文件大小

## 🔍 搜索优化

### 1. 关键词优化
在 frontmatter 中添加相关关键词：
```yaml
keywords: ["STM32", "Cortex-M3", "ARM", "微控制器", "嵌入式"]
```

### 2. 内容结构化
- 使用清晰的标题层级
- 表格数据便于搜索
- 重要的技术参数加粗

## 📁 文件命名规范

### 1. 文档文件
```
stm32f103c8t6.md          # 具体型号
stm32f1-series.md         # 系列概述
st-microelectronics.md    # 厂商概述
```

### 2. 目录结构
```
zh/vendors/st/stm32f1/stm32f103c8t6.md
zh/vendors/st/stm32f1/stm32f103rct6.md
zh/vendors/st/stm32f4/stm32f407vet6.md
```

## ✅ 质量检查清单

在提交文档前，请检查：
- [ ] Frontmatter 字段完整
- [ ] 标题层级正确
- [ ] 表格格式规范
- [ ] 图片路径正确
- [ ] 链接有效
- [ ] 技术术语准确
- [ ] 无拼写错误
- [ ] 代码块语法正确

## 📚 示例文档

参考以下示例文档：
- [STM32F103C8T6 示例](/zh/vendors/st/stm32f103c8t6/)
- [NXP LPC1768 示例](/zh/vendors/nxp/lpc1768/)

---

遵循这些规范可以确保文档的一致性和可维护性，方便团队协作和自动化处理。