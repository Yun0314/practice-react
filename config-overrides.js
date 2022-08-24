// 覆蓋 webpack 設定 (不用 eject)
// (1) npm install react-app-rewired -D
// (1.5) 有需要可以再 npm install customize-cra -D (自訂義 react-app-rewired 核心功能的套件)
// (2) 調整 package.json ➜ scripts ➜ start、build、test 的 react-scripts 都改成 react-app-rewired
// (3) 新增 config-overrides.js + 寫覆蓋設定

// 單一文件設定: 使用 require 時不跳出 eslint 的相關警告
/* eslint @typescript-eslint/no-var-requires: "off" */

const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '.', dir);
}

module.exports = function override(config) {
  // 設定絕對路徑
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': resolve('src'),
    '@todoList': resolve('src/components/todoList'),
  };
  return config;
};
