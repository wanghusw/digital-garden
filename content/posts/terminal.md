---
title: 关于终端（Terminal）
draft: false
tags:
  - 
created: 2025-12-19 16:44
date: 2025-12-29
lastmod: 2026-01-02 02:15
---

ter
## macOS 终端

- macOS 下更改默认 Shell 为 zsh，执行以下命令：
  ```bash
  cash -s /bin/zsh
  ```

- 使用以下命令可以查看 mac 使用的 shell 类型：
  ```bash
  echo $0
  
  # 或者
  echo $SHELL
  ```
  ℹ️ [mac如何查看shell是 zsh还是bash-CSDN博客](https://blog.csdn.net/qq_41904572/article/details/141126435)

## Windows 终端

查看 PowerShell 当前版本，在 PowerShell 中运行以下任一命令：
```shell
$PSVersionTable             # 显示包含版本、编辑模式等详细列表
$PSVersionTable.PSVersion	# 直接返回主版本号，例如 Major、Minor、Build 号
```

安装 PowerShell 7，推荐使用 Winget，在现有的 PowerShell 运营以下命令：
```shell
winget install --id Microsoft.PowerShell --source winget
winget install --id Microsoft.PowerShell.Preview --source winget # 安装预览版
```

ℹ️[Install PowerShell on Windows - PowerShell | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/scripting/install/install-powershell-on-windows?view=powershell-7.5)

PowerShell 7 的可执行文件名为 `pwsh.exe`，而 Windows PowerShell 5 是 `powerselle.exe`。

PowerShell 7 默认安装在 `C:\Program Files\PowerShell\7\` 目录下。

## Oh My Zsh

### 参考资料

- [zsh 安装与配置，使用 oh-my-zsh 美化终端 | Leehow的小站](https://www.haoyep.com/posts/zsh-config-oh-my-zsh/)
- [Oh My Zsh, 『 安装 & 配置 』 - 知乎](https://zhuanlan.zhihu.com/p/35283688)

下载的第三方主题可以放在 `~/.oh-my-zsh/custom/themes`，我安装了 [powerlevel10k](https://github.com/romkatv/powerlevel10k) 主题，可以用 `p10k configure` 来引导设置。


## Oh My Posh

[Home | Oh My Posh](https://ohmyposh.dev/)

### 安装（Windows）

1. 运行 `winget install JanDeDobbeleer.OhMyPosh --source winget` 进行安装。
2. 运行 `oh-my-posh font install` 安装字体，推荐 `Meslo`，如果不能正常安装，就手动下载字体：
	- [Nerd Fonts](https://www.nerdfonts.com/font-downloads)，选择 `MesloLG Nerd Font` 下载。
	- 下载之后解压，安装所有 `.ttf` 文件。
3. 设置主题，在 `Microsoft.PowerShell_profile.ps1` 文件 输入 `oh-my-posh init pwsh --config "F:\Documents\MyPoshThemes\M365Princess.omp.json" | Invoke-Expression`，运行 `.$PROFILE`，主题就设置好了。
	- 当前用户的 Profile 的路径在 `$HOME\Documents\PowerShell\Microsoft.PowerShell_profile.ps1`。
	- 不能用官方提供的设置方法来设置主题，我需要把主题从安装路径手动复制到我想存放的地方，比如 `F:\Documents\MyPoshThemes`。

## 终端列表

- [WezTerm - Wez's Terminal Emulator](https://wezterm.org/)
- [Termius - Modern SSH Client](https://termius.com/)

以下为旧内容：
-----------
- 我的 PowerShell 的配置文件位置为：`E:\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1`
  可以用 `$PROFILE` 命令查看配置文件位置
- 为 Windows 终端安装使用 oh-my-posh
  1. 打开 PowerShell 运行以下命令安装（也可以在微软商店安装）：
      ```shell
      winget install JanDeDobbeleer.OhMyPosh -s winget
      ```
  2. 如果重启终端 oh-my-posh 不被识别为命令，此时可以再次运行安装程序，或将它手动添加到 `PATH` 中：
      ```
      $env:Path += ";C:\Users\user\AppData\Local\Programs\oh-my-posh\bin" # 注意将user修改为自己的
      # 我目前的oh-my-posh路径为：C:\Users\wangh\AppData\Local\Programs\oh-my-posh
      ```
  3. 可以用以下命令进行更新：
      ```
      winget upgrade JanDeDobbeleer.OhMyPosh -s winget
      ```
  4. 将 PowerShell 的 profile 增加一行，设置主题：
      ```
      C:\\Users\\wangh\\AppData\\Local\\Programs\\oh-my-posh\\bin\\oh-my-posh.exe init pwsh --config $env:POSH_THEMES_PATH\sorin.omp.json | Invoke-Expression # 可以通过修改POSH_THEMES_PATH后面的json来修改主题
      ```
  - 参考资料：
    - [Home | Oh My Posh](https://ohmyposh.dev/)
    - [Introduction | Oh My Posh](https://ohmyposh.dev/docs)
    - [【保姆级教程】使用oh-my-posh美化Windows终端-CSDN博客](https://blog.csdn.net/qq_62888264/article/details/132551059)
    - [Windows下CMD、Powershell、pwsh与Terminal小记 — 1+1=10](https://blog.debao.me/2025/01/notes-on-cmd-powershell-pwsh-and-terminal-in-windows/)

## 一些常用命令
- `pwd` 查看当前路径
- `ls` 查看当前路径下有什么文件
- `ls -R` 查看当前路径下的全部文件并展开子文件夹
- `clear` 清屏
- `sudo` 超级管理员指令
- `man` 查看某个指令怎么用，退出页面按 `Q`
- `killall` 强退应用
- 显示隐藏文件夹
  ```
  defaults write com.apple.finder AppleShowAllFiles -bool true; killall Finder
  ```
  不需要继续显示隐藏文件夹：
  ```
  defaults write com.apple.finder AppleShowAllFiles -bool false; killall Finder
  ```
- Oh My Zsh 切换主题：
  在终端输入 `open ~/.zshrc`，然后更改 `ZSH_THEME` 参数即可
  ℹ️ [zsh切换主题_zsh themes-CSDN博客](https://blog.csdn.net/qq_20924307/article/details/99873554)
- ℹ️ [玩转 Terminal 终端：入门指南及进阶技巧 - 少数派](https://sspai.com/post/45534)
- 参考资料
	- [iTerm2 - macOS Terminal Replacement](https://iterm2.com/)
	- [Oh My Zsh - a delightful & open source framework for Zsh](https://ohmyz.sh/#install)
	- [工具 - 打造 Mac “完美”终端（Terminal），一篇就够了 | MakeOptim](https://makeoptim.com/tool/terminal/)
	- [终端环境：zsh 、oh-my-zsh、提示主题与 7 效率插件 - POLOXUE's BLOG](https://www.poloxue.com/posts/2023-10-16-zsh-themes-and-plugins/)
	- [让你的终端酷炫好用到爆--"Oh My Zsh "学习指南简介 使用终端在开始时可能有点令人生畏--但在你习惯之后，它能 - 掘金](https://juejin.cn/post/7088571975546699789)
	-
	- [新生代 Windows 终端：Windows Terminal 的全面自定义 - 少数派](https://sspai.com/post/59380)
	- [告别 Windows 终端的难看难用，从改造 PowerShell 的外观开始 - 少数派](https://sspai.com/post/52868)
	- [5 个 PowerShell 主题，让你的 Windows 终端更好看 - 少数派](https://sspai.com/post/52907)
	- [MAC下有什么好用的终端工具 – PingCode](https://docs.pingcode.com/ask/63030.html)
	-