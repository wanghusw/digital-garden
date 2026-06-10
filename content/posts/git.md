---
title: git
draft: false
tags:
  - git
  - coding
created: 2025-12-18 09:04
date: 2026-01-02
lastmod: 2026-01-02 11:45
---

## 常用 git 命令

### `git mv`

使用该命令时要使用完整路径，要注意不要少了扩展名，如果路径和文件名中有特殊符号，要用 `’‘` 将其括起来。

对文件夹重命名时，如果仅仅是大小写变化，用两步法：
```bash
git mv Posts temp_dir
git mv temp-dir posts
```

### `git rm`

在 Obsidian 中删除文件的推荐流程是先删除文件，然后再在 git 里面 `git rm`。

```text
git rm --cached <文件>    # 用于在 git add 后取消暂存
git commit                # 后面不加 -m "message"，vim 编辑器会弹出，可以记录更加详细的 message。
git reset --hard <commit> # 回溯到指定状态
git reset --hard HEAD     # 彻底放弃所有未提交的更改
git log # 只能查看以当前状态为终点的历史日志
git reflog
```

## 学习资料

- [Git 详细安装教程（详解 Git 安装过程的每一个步骤）](https://blog.csdn.net/mukes/article/details/115693833)
- [[《GitHub入门与实践》读书笔记]]
- [Pro Git](https://git-scm.com/book/zh/v2)
- [Learn Git Branching](https://learngitbranching.js.org/?locale=zh_CN)
- [Git教程 - 廖雪峰的官方网站](https://liaoxuefeng.com/books/git/introduction/index.html)

## 问题解决

### 测试 SSH 连接

`ssh -T git@github.com` 如果出现以下错误信息：
```
ssh: connect to host github.com port 22: Connection refused fatal: Could not read from remote repository. 
Please make sure you have the correct access rights and the repository exists.
```

使用以下方法解决：  
创建或编辑 `~/.ssh/config` 文件：
```
Host github.com 
    Hostname ssh.github.com
    Port 443 
    User git
```
然后用 `ssh -T git@ssh.github.com -p 443` 命令进行测试。

### 设置全局默认分支名为 `main`

执行 `git config --global init.defaultBranch main`

在刚执行 `git init` 后如果要重命名当前仓库的分支，可以立即执行 `git branch -m master main`。

### 关于 `CRLF` 和 `LF`

在 Windows 系统中设置运行 `git config --global core.autocrlf true`（检出时转为 CRLF，提交时转为 LF） 命令，以解决 `warning: in the working copy of 'README.md', LF will be replaced by CRLF the next time Git touches it`。

在 macOS 系统中对 git 进行如下设置：
```text
git config --global core.autocrlf input # 提交时转为 LF，检出时不转换
```

➡具体去看一下 `CRLF` 和 `LF` 的知识。

### 关于命令行提示信息中英文

临时方法：在输入命令前面加上 `LANG=C`，比如 `LANG=C git status`。

永久设置方法：将以下内容添加到 shell 配置文件中（如 `~/.bashrc`、`~/.zshrc` 等）：
```bash
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8

# 如果只针对 Git 设置，则是：
alias git=‘LANG=C git’
```
bash

编辑

```

```

## 相关内容

- 为 [[GitHub]] 加速：[上万良心软件都在GitHub，你却还卡在无法访问？](https://mp.weixin.qq.com/s/WNW-geAbB2ApsdBHE0WqEg) 🔎 🖨
	- 使用 [Steamcommunity 302](https://www.dogfight360.com/blog/18682/) 进行加速。

## git gui

- UGit
- Gitkraken


## 常用工作流

### 新建分支进行测试

1. 确保当前分支干净，拉取最新主分支
  ```text
  git status       # 确保当前分支干净
  git fetch origin # 拉取最新主分支
  ```

2. 建立分支 `git checkout - b test`
  ```text
  git branch -av   # 查看所有分支
  ```

3. 在新分支做测试
4. 如果新分支落后于主分支，则：
```bash
git checkout test
git merge main
```

### 如果产生了大小写不同的两个文件夹

比如远程仓库在 `content` 文件夹下面产生了 `journals` 和 `Journals` 两个文件夹，并且文件被推送到了 `Journals` 文件夹，而本地仓库只有一个 `journals` 文件夹，可以尝试执行以下 git 命令：
```bash
# 在 content/ 目录下执行
git add -A
git rm -r --cached .        # 清除 Git 缓存
git add .
```

这时 `git status` 会看到文件夹进行了重命名，重新推送即可。2026-01-01 23:12:40
