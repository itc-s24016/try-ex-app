# try-ex-app
Express を使用したWebアプリケーション作成に挑戦するためのリポジトリです。  
  
## 使用したもの  
 - TypeScript：言語    
 - Express：フレームワーク  
 - pnpm：JSパッケージ管理ツール

## 事前準備
### 1.package.json を作る  
```
pnpm init --init-type module
```  

### 2.Express をプロジェクトにインストールする  
```
pnpm add express
```  

### TypeScript 用のパッケージをインストールする  
```
pnpm add -D typescript @tsconfig/node-lts @types/node@22 @types/express
```  

### TypeScript 用の package.json を作る  
tsconfig.json
```json
{
 "extends": "@tsconfig/node-lts/tsconfig.json",
 "compilerOptions": {
   "target": "ESNext",
   "moduleResolution": "NodeNext",
   "forceConsistentCasingInFileNames": true,
   "strict": true,
   "allowImportingTsExtensions": false,
   "outDir": "dist"
 },
 "include": ["src"]
}
```
  
### .gitignore を作る  
今回は、[.gitignore.io](https://www.toptal.com/developers/gitignore) で作成しました。(Git, Linux)  

### 最小限のアプリケーションを作る  
```
mkdir src && cd $_
```  
  
index.tsx  
```
import express from "express";

const app = express();

app.get("/", async (req, res) => {
 res.send("Welcome to Express");
});


app.listen(3210, () => {
 console.log("Start server port: 3210");
});
```
### 動作確認　　
```
tsx index.tsx
```
