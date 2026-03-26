// 测试构建的简单脚本
import { execSync } from 'child_process';
import fs from 'fs';

console.log('检查项目结构...');

// 检查必要文件
const requiredFiles = [
  'astro.config.mjs',
  'package.json',
  'src/content/docs/intro.md',
  'src/content/docs/getting-started.md'
];

let allFilesExist = true;
for (const file of requiredFiles) {
  if (!fs.existsSync(file)) {
    console.error(`❌ 缺少文件: ${file}`);
    allFilesExist = false;
  } else {
    console.log(`✅ 文件存在: ${file}`);
  }
}

if (!allFilesExist) {
  console.error('项目结构不完整，请检查文件');
  process.exit(1);
}

console.log('\n检查依赖...');
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  console.log(`项目名称: ${packageJson.name}`);
  console.log(`Astro 版本: ${packageJson.dependencies?.astro || '未指定'}`);
  console.log(`Starlight 版本: ${packageJson.dependencies?.['@astrojs/starlight'] || '未指定'}`);
} catch (error) {
  console.error('❌ 无法读取 package.json:', error.message);
}

console.log('\n项目结构检查完成！');
console.log('\n下一步:');
console.log('1. 确保依赖已安装: npm install');
console.log('2. 运行开发服务器: npm run dev');
console.log('3. 构建生产版本: npm run build');