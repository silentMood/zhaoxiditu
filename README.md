# 朝夕地图代码仓库
## 前端
### 框架类库选择 (根据大家熟悉程度可变更)
* 技术栈: react+mobx
* UI: ant-design-mobile
* 地图: 高德

### 开发准备
```
npm install
```

### 运行
```
npm start
```

### 打包
```
npm run build
```
---
## 后端
### 框架类库选择
技术栈: eggjs + mysql

### 开发准备
1. 安装mysql-server-community
2. 创建本地开发数据库
```
mysql -u root -e 'CREATE DATABASE IF NOT EXISTS `test-zhaoxiditu`;'
```
3. 安装依赖库
```
npm install
```
4. 同步数据库结构
```
npx sequelize db:migrate
```

### 运行
```
npm run dev
```