---
title: 《玩转 Git 三剑客》学习笔记
draft: false
tags:
  - git
created: 2025-12-16 18:02
updated: 2025-12-29 11:48
date: 2025-02-02
lastmod: 2026-06-15 15:27
---

## 一、Git 基础

### 01 课程综述

### 02 安装 Git

- https://git-scm.com/book/zh/v2/起步-安装-Git
- ```text
  git --version # 返回 git 版本  
  ```
- [[homebrew#将 macOS 的自带 Git 换到 homebrew 安装的 Git|将 macOS 的自带 Git 换到 homebrew 安装的 Git]]

### 03 使用 Git 之前需要做的最小配置
- 配置 user.name 和 user.email
  ```text
  git config --global user.name 'your_name'
  git config --global user.email 'your_email@domain.com'
  # 还可以设置 local（只对某个仓库有效）、system（对系统所有登录的用户有效，基本不用）域下的名称和邮箱
  git config --list # 查看设置
  ```

### 04 创建第一个仓库并配置 local 用户信息

- 本节提及的 git 命令
  ```text
  git init your_prohect # 创建项目文件夹
  git add               # 增加文件
  git commit            # 建立一次提交
  git status            # 查看状态
  git log               # 查看日志
  ```
- 进一步学习 `cd` 命令
  - `..` 可以返回上一级目录
  - `pwd` 显示当前工作路径
  - `ls -al` 显示当前路径下的所有文件
  - `clear` 清理屏幕
- 进一步学习 `cp` 拷贝命令
  - `cp -r` 复制目录及其内部所有内容，可以理解为复制文件夹
- 当在某个仓库配置了 local 用户信息，那么 local 优先于 global 起作用。

### 05 通过几次 commit 来认识工作区和暂存区

- 本节提及的 git 命令
  ```text
  git add -u # 将已被 git 管理的文件一起提交到暂存区，u 代表 update
  ```

- `mkdir` 创建目录（创建文件夹）
- 如何使用 Vim 编辑器
  - `vi` 打开文件
  - `:q` 退出当前窗口
  - `:qa` 退出所有打开的文件和窗口
  - `:q!` 强制退出当前窗口
  - `:qa!` 强制退出所有窗口
  - `:wqa` 保存所有并退出
  - `:wq!` 强制保存并退出

### 06 给文件重命名的简便方法

- 本节提及的 git 命令
  ```text
  git rm           #移除文件
  git mv           #重命名文件
  git reset --hard #用的时候需要注意，暂存区工作路径上所有的变更都会被清理掉
  📝我在创建分支的时候因为分知名错误，误使用了这个命令，造成创建分支后的commit信息都被清空了，于是我开始重新打造仓库。2025-02-17 17:41:34
  ```
- `mv` 移动或重命名文件

### 07 通过 git log 查看版本演变历史

- 本节提到的 git 命令
  ```text
  git log               # 什么参数都不加的话，指向的是当前分支，查看当前分支的历史信息
  git log --all         # 显示所有分支
  git log --all --graph # 图形化显示所有分支
  git log 分支名        # 显示指定分支
  
  git log --oneline     # 简洁显示
  git log -n4           # 显示最近的 4 条，想显示最近的几条，就把数字改成几
  # 以上两个命令也可以组合，如`git log -n4 --oneline`
  
  git branch -v         # 查看本地有多少分支
  git branch -av        # 查看有多少分支
  git checkout -b <分支名> <某个分支/某个 commit> # 从某个分支或者 commit 创建新分支并切换到这个分支
  git commit -am        # 把工作区的内容直接创建到版本库
  ```

### 08 gitk：通过图形界面工具来查看版本历史

- `zsh: command not found: gitk`，为 macOS 安装 gitk：
  ```text
  brew install git      # 更新 git
  brew install git-gui  # 安装 gitk
  ```
  ℹ️ [zsh: command not found: gitk-CSDN博客](https://blog.csdn.net/hanxiaoyang6/article/details/129960534)
- `gitk &` 让 gitk 在后台启动，这样就不会占用终端；如果 gitk 占用终端，不要用 `control + c` 退出，而要用 `control + z`，这会将 gitk 进程挂起。

### 09 探秘 .git 目录（裸仓库）

- 本节提到的 git 命令
  ```text
  git branch -av      # 查看有多少分支
  git checkout 分支名 # 切换分支命令
  git cat-file -t     # 查看对象类型（tree、blob、commit）
  git cat-file -p     # 查看对象内容
  git cat-file -s     # 看对象大小
  ```
- `.git` 文件夹下的内容
	- `HEAD` 文件表示整个仓库正在工作在哪个分支上，所以里面是一个引用
	- `config` 文件存放配置信息
	- `refs` 文件夹存放分支和 tag 的信息，`heads` 文件夹下存放分支，并表明该分支指向哪个 commit，`tags` 文件夹存放 tag 信息。
	- `objects` git 的对象存储目录，其中存放 blob（文件对象）
- `cat` 命令，用于查看、创建、合并文件。

### 10 commit、tree 和 blob 三个对象之间的关系

- 一个 commit 对应一个 tree（commit 是对这棵树的文件夹快照），tree 其实是文件夹树（目录结构）。
- blob 指文件内容，在 git 中，只要文件内容相同，它就是一个 blob。


### 11 小练习：数一数 tree 的个数

```text
echo "hello, world" > readme  # 在当前目录创建一个名为 readme 的文件，文件内容是：hello world，这里需要注意的是如果 readme 文件已存在，会被完全覆盖，所以更好的替代方案是使用以下代码：
echo "hello, world" >> readme # hello, world 会被追加在文件末尾
find .git/objects -type f     # 查找 objects 目录下所有普通文件
```

### 12 分离头指针情况下的注意事项

- 本节提到的 git 命令  
  ```text
  git branch -av                 # 查看有多少分支
  git checkout 分支名            # 切换分支命令
  git checkout 某个commit        # 切换到分离头指针状态
  git branch <分支名> <commit值> # 为处于分离头指针状态的 commit 绑定分支
  gitk --all 
  ```
- HEAD 没有指向任何分支，这种情况叫做「分离头指针（detached HEAD）」状态，在做一些尝试性的变更的时候可以使用，如果效果不好可以不再理会它；如果想要保留，就要为它创建一个分支。
- 在 git 的眼里，如果一个 commit 没有和一个 branch 或 tag 绑定，那这个 commit 就是不重要的，日后都是要被清除的。

### 13 进一步理解 HEAD 和 branch

- 本节提到的 git 命令
  ```text
  git branch -av # 查看目前有多少分支，分支前面的 * 指示当前处于的分支
  git checkout -b <新分支名> <某个分支/某个commit> #从某个分支或 commit 创建新分支并切换到这个分支
  git log -n4 # 显示最近的 4 条，想显示最近的几条，就把数字改成几
  git diff <commit> <commit> # 比较两个 commit
  git diff HEAD HEAD^1 # 比较前面两个 HEAD 的不同
  git diff HEAD HEAD^ = git diff HEAD HEAD^1 = git diff HEAD HEAD~1
  git diff HEAD HEAD^^ = git diff HEAD HEAD~2
  ```
- HEAD 最终落脚于一个 commit

## 二、独自使用 Git 时的常见场景

### 14 怎么删除不需要的分支？

- 本节提到的 git 命令
  ```text
  git branch -d <分支名> #删除分支
  git branch -D <分支名> #删除分支，如果以上的命令告警说分支没有被合并，并且确认风险，那可以使用这个命令将分支删除
  ```

### 15 怎么修改最新 commit 的 message？

- 本节提到的 git 命令
  ```text
  git commit --amend # 对最近提交的 commit 的 message 进行修改
  git log -1 # 最近一次提交
  ```

### 16 怎么修改老旧 commit 的 message？
- 本节提到的 git 命令
  ```text
  git rebase -i <commit> # 变基，commit 要选择想要进行操作的对象的父亲，独自操作时可以这样进行变基，但是对于已提交到团队的分支上，就不能这样轻易的变基了。
  ```

### 17 怎样把连续的多个 commit 整理成 1 个？

- 本节提到的 git 命令
  ```text
  git rebase -i <commit> # 变基
  ```

### 18 怎样把间隔的多个 commit 整理成 1 个？

- 本节提到的 git  命令
  ```text
  git rebase -i <commit> # 变基
  ```
- 在把间隔的多个 commit 整理成 1 个的时候，要把他们放在一起。

### 19 怎么比较暂存区和 HEAD 所含文件的差异？

`git diff --cached` 比较暂存区和 HEAD 的差别，如果返回是空值，说明暂存区和 HEAD 一致

### 20 怎么比较工作区和暂存区所含文件的差异？

```text
git diff            # 比较工作区和暂存区的所有文件差异
git diff --<文件名> # 比较工作区和暂存区的某个文件差异（也可以比较多个文件的差异）
```

### 21 如何让暂存区恢复为和 HEAD 一样（取消某个文件的暂存状态，保留工作区的修改）

```text
git restore --staged <file> # 将某个文件从暂存区移除，但保留工作目录中的修改，如果不加 <file> 参数，会对当前目录下所有文件取消暂存；这是一个新版本 git 推荐的命令，专门用于「恢复」工作区和暂存区的状态，相比旧命令更直观安全。    
git reset HEAD <file>       # 等价于以上命令，但这个命令功能更复杂（还可以用于移动 HEAD、回退提交等）。
```

### 22 如何让工作区的文件恢复为和暂存区一样？（从暂存区恢复到工作区，保留暂存区）

```text
git restore <file>     # 将某个文件从暂存区恢复到工作区，工作区之前的修改将被丢弃， 在新版本的 git 中更推荐。
git checkout -- <file> # 等价于以上命令，逐渐被以上命令替代。
```

### 23 怎样取消暂存区部分文件的更改？

```text
git restore --staged <file> # 可以同时多个文件，文件名之间加空格
```

### 24 消除最近的几次提交

```text
git reset --hard <commit> # HEAD 改变，暂存区重置，工作区也重置，都恢复到重置的那个 commit 的情况，谨慎使用‼
```

### 25 看看不同提交的指定文件的差异

```text
git diff <branch|commit> <branch|commit> --<file>
```

### 26 正确删除文件的方法

```text
git rm <file> # 既“取消跟踪”又“物理删除”文件
git rm --cached <file> # 仅停止跟踪，但保留本地文件
```

### 27 开发中临时加塞了紧急任务怎么处理？

- `git stash` 用于临时保存工作目录的修改
- ```text
  git stash save "描述你保存的内容" # 保存并添加描述信息
  git stash --staged                # 仅保存暂存区的修改
  git stash list                    # 查看保存的列表
  git stash apply                   # 恢复但不删除
  git stash pop                     # 恢复并删除
  git stash show                    # 在恢复前确认内容
  ```
- 不要积攒太多的 stash，要及时清理

### 28 如何指定不需要 git 管理的文件？

使用 `.gitignore` 文件

### 29 如何将 Git 仓库备份到本地

在本地建立一个备份文件夹，在备份文件夹目录下执行 `git clone --bare <要备份的仓库文件夹协议地址> <备份文件夹名称>` 将其备份到备份文件夹，协议有哑协议和智能协议：
- /path/to/repo.git 哑协议
- file:///path/to/repo.git 智能协议

## 三、Git 与 GitHub 的简单同步

### 30 注册一个 GitHub 账号

### 31 配置公私钥

### 32 在 GitHub 上创建个人仓库

### 33 把本地仓库同步到 GitHub

## 四、Git 多人单分支集成协作时 的常见场景

### 

## 五、Git 集成使用禁忌

## 六、初识 GitHub

### 41 GitHub 为什么会火？

### 42 GitHub 都有哪些核心功能？

### 43 怎么快速淘到感兴趣的开源项目？

搜索 `关键词 in:readme stars:>1000`

### 44 怎样在 GitHub 上搭建个人博客

### 45 开源项目怎么保证代码质量？

### 46 为何需要组织类型的仓库？