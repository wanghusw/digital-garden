---
title: Quartz
draft: false
tags:
  - quartz
created: 2025-12-08 21:39
date: 2026-01-02
lastmod: 2026-01-02 19:36
---


主要参考资料：
- [How to publish Obsidian notes with Quartz on GitHub Pages - Fork My Brain](https://notes.nicolevanderhoeven.com/How+to+publish+Obsidian+notes+with+Quartz+on+GitHub+Pages)

## 安装流程：

### 克隆 Quartz 仓库

打开终端运行一下命令：

```bash
git clone https://github.com/jackyzha0/quartz.git digitalgarden # digitalgarden 是我的本地文件夹，这里文件夹名称可以按自己要求来
```

### 安装 Quartz 依赖项

用 `cd` 命令切换到 `digitalgarden`，运行：

```bash
npm i
```

### 初始化 Quartz

运行：

```bash
npx quartz create
```

依次选择 `Empty Quartz`、`Treat links as shortest path`。

### 设置 GitHub 仓库

根据 Quartz 的官方文档创建即可，这里我创建名为 `digital-garden` 的仓库。然后在快速设置复制远程仓库的 HTTPS URL。

来到 https://github.com/settings/tokens 为其创建 token，为其设置 `repo`、`workflow` 权限，生成 token 并记下它。

然后在终端运行：

```bash
git remote -v # 查看远程仓库
git remote rm origin # 删除远程仓库
git remote add origin https://github.com/wanghusw/digital-garden.git # 添加我自己的远程仓库
```

### 将本地文件初次同步到 GitHub

运行：

```bash
npx quartz sync --no-pull # 将内容首次推送到远程仓库
```

### 在本地构建网站

运行，以在本地预览网站：

```bash
npx quartz build --serve
```

### 同步文件到 GitHub

运行：

```bash
npx quartz sync
```

### 创建一个 `deploy.yml` 文件

不管用什么系统，确保隐藏文件可见。在本地 Quartz 文件夹（我的是 `digitalgarden`）路径下创建 `.github/workflows/deploy.yml` 文件。然后将以下内容（不论何时，请到 Quartz 官方文档去寻找最新的内容）复制到该文件：

```bash
name: Deploy Quartz site to GitHub Pages
 
on:
  push:
    branches:
      - v4
 
permissions:
  contents: read
  pages: write
  id-token: write
 
concurrency:
  group: "pages"
  cancel-in-progress: false
 
jobs:
  build:
    runs-on: ubuntu-22.04
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0 # Fetch all history for git info
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - name: Install Dependencies
        run: npm ci
      - name: Build Quartz
        run: npx quartz build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: public
 
  deploy:
    needs: build
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 创建 GitHub Action

来到仓库，进入设置页面，选择 `Pages`，在 `Source` 中选择 `GitHub Actions`。

然后用 `npx quartz sync` 同步一次。

### 看看新网站吧！

访问： https://wanghusw.github.io/digital-garden/

## 相关设置记录

- 发布的静态页面的文件名使用「小写 + 连字符」格式（`hello-world`）

### 重要设置文件

- `~/digitalgarden/.github/workflows/deploy.yml` 
- `~/digitalgarden/quartz.layout.ts` 我在这个文件中添加了 `Recent Note` 组件，修改了 footer
- `~/digitalgarden/quartz/components/Footer.tsx` 这里自定义 footer
- `~/digitalgarden/quartz.config.ts` 这里进行网站设置
- `/Users/wanghu/digitalgarden/quartz/styles/custom.scss` 这里自定义 css

### 给代码块加上语言标识

代码块加上语言标识后，quartz 就可以正常显示代码块行号，不用额外进行设置。

### 使用 GitHub Desktop 进行更新

### 多设备管理

在其他设备克隆仓库，运行 `npx quartz build --serve` 进行测试，如果报错，就运行 `npm install`，然后再运行 `npx quartz build --serve` 测试。2025-12-31 14:29:14