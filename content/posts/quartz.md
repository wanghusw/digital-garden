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

### 关于 Excalidraw

为了在 v5 中正常显示 Excalidraw 文件，在 **Obsidian** 中对插件进行设置：

1. **保存** > **压缩 Excalidraw JOSN** 处于 **关闭** 状态。
2. **保存** > **文件名** > **文件扩展名** 处于 **打开** 状态，即使用 `.excalidraw.md` 作为扩展名。



## 从 v4 升级到 v5

参考资料：[Migrating to Quartz 5](https://quartz.jzhao.xyz/getting-started/migrating)

### 在第一台电脑上安装

#### 备份 `content` 文件夹

方法一：通过 `cd` 命令进入到 quartz 库根目录，通过以下命令备份 `content` 文件夹：

```bash
# macOS / Linux
cp -r content /tmp/quartz-content
 
# Windows (PowerShell)
Copy-Item -Recurse content $env:TEMP\quartz-content
```

方法二：直接复制备份。

#### 获取 v5 分支

按照文档依次执行以下命令：

```bash
# Add the official Quartz repository as a remote called "upstream" (skip if already set)
git remote add upstream https://github.com/jackyzha0/quartz.git
 
# Fetch the v5 branch from the official repository
git fetch upstream v5
 
# Create a local v5 branch from the official one
git checkout -b v5 upstream/v5
 
# Install dependencies
npm i
 
# Push v5 to your GitHub repository
git push -u origin v5
```

在执行过程中，如果发生网络错误，则为 Git 和 npm 设置代理。

**设置 Git 代理**：

```bash
git config --global http.proxy http://127.0.0.1:3067
git config --global https.proxy http://127.0.0.1:3067
```

测试是否成功，执行 `git config --global -l`。

如果要取消代理，则用：

```bash
git config --global --unset http.proxy
git config --global --unset https.proxy
```

**设置 npm 代理**： ^ec93c3

```bash
npm config set proxy http://127.0.0.1:3067
npm config set https-proxy http://127.0.0.1:3067
```

#### 设置网站

```bash
npx quartz create
```

根据提示进行设置。

安装插件：

```bash
npx quartz plugin install --from-config
```

如果有安装失败的，可以重复执行 `npx quartz plugin install`，另外，`npx quartz plugin install --latest` 可以强制重新安装所有插件。

#### 本地预览

```bash
npx quartz build --serve
```

#### 为设置 GitHub Pages 托管

在本地 Quartz 中，创建一个新文件 `quartz/.github/workflows/deploy.yml`。

然后直接复制 [官方文档](https://quartz.jzhao.xyz/hosting#github-pages) 提供的内容。

在 GitHub 仓库的设置也依照 [官方文档](https://quartz.jzhao.xyz/hosting#github-pages) 进行设置。

#### 在 GitHub 仓库将默认分支设置为 v5

#### 设置环境保护规则（Environment Protection Rules）

在仓库中依次点击：**Settings** > **Environments** > **GitHub Pages**，在 **Deployment branches**（部署分支）部分，点击 **Add deployment branch rule**，在输入框填入 **​`v5`​** 并添加。

#### 推送

可以使用 `npx quartz sync`，也可以用 **GitHub Desktop**。

注：`npx quartz sync` 在拉取的时候并不会更新作者的分支的最新文件，所以我可以安心用 **GitHub Desktop**。

补充：如果在 **Quartz** 的使用过程中发现作者修复了某个 Bug 或增加了新功能，需要手动进行「上游同步」：

```bash
# 1. 获取作者仓库的最新变动
git fetch upstream

# 2. 将作者的改动合并到你当前的分支
git merge upstream/v5

# 3. 处理可能出现的冲突（如果有的话）

# 4. 最后再运行 sync 同步到你自己的 GitHub
npx quartz sync
```

### 在另一台电脑上同步

#### 拉取最新代码

打开 **GitHub Desktop** > **Fetch origin** > **切换分支**（确保当前的分支切换到了 **​`v5`​**），检查一下文件是否顺利拉取。

#### 检查 **Node.js** 版本

```bash
node -v
```

#### 安装 nvm

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

重启终端，输入 `nvm -v`，如果显示版本号，说明安装成功。

然后依次执行以下命令：

```bash
# 安装最新的 Node 24 LTS
nvm install 24

# 切换到该版本
nvm use 24

# 设为默认版本（关键，避免每次开终端都要重新切换）
nvm alias default 24
```

用以下命令进行验证：

```bash
node -v   # 应显示 v24.x.x
npm -v    # 应显示 11.x 左右
```

#### 进入仓库文件安装依赖

```bash
npm install
```

#### 安装插件

```bash
npx quartz plugin install
```

以上两步，如果出现网络问题，按照 [[#^ec93c3|设置 npm 代理]] 处理。

#### 本地预览

运行 `npx quartz build --serve`，访问 `localhost:8080` 检验是否正常。


