## 安装

一定可以成功的安装和卸载脚本：
```
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)" # 安装脚本
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh)" # 卸载脚本
```

## 常用命令

```
brew update # 更新 Homebrew
brew upgrade # 更新所有安装过的软件
```

## 笔记

- `brew prefix` 可以查看 `homebrew` 安装路径
- 路径 `/opt/homebrew` 在 Mac 根目录，按 `⌘ + ⇧ + .` 显示隐藏文件后可以看见

### 将 macOS 的自带 Git 换到 homebrew 安装的 Git

- 用 `which git` 查看 git 安装路径
- 用 `git --version` 查看 git 版本
- 输入以下命令修改 git 默认路径
  ```
  echo export PATH='/opt/homebrew/Cellar/git/2.48.1/bin:$PATH' >> ~/.bash_profile
  ```
- 输入 `source .bash_profile` 刷新坏境变量，用最开始提到的命令查看是否成功
- 用 `vim ./.bash_profile` 打开 `bash_profile` 文件，输入 `i` 进入编辑模式，这时可以编辑内容，编辑好后按 `esc` 退出编辑状态，再按 `:wq` 退出。
- 我目前的坏境变量如下所示：
  ```
  export PATH=/usr/local/bin:$PATH
  export PATH=/opt/homebrew/bin:$PATH
  export PATH=/opt/homebrew/Cellar/git/2.48.1/bin:$PATH
  ```
- 参考资料：
  - [MacOS下升级Git版本-CSDN博客](https://blog.csdn.net/DavidHuang2017/article/details/105537479/)
  - [M1/M2芯片Macbook Git安装和使用 - 掘金](https://juejin.cn/post/7126366777277169678)

## 源
- [HomebrewCN: Homebrew 国内安装脚本，快速部署 brew ，国内镜像](https://gitee.com/cunkai/HomebrewCN)

## 参考资料
- [Homebrew国内如何自动安装（国内地址）（Mac OS） - 知乎](https://zhuanlan.zhihu.com/p/111014448)
- [macOS 常见错误说明](https://gitee.com/cunkai/HomebrewCN/blob/master/error.md)
- [HomebrewCN: Homebrew 国内安装脚本，快速部署 brew ，国内镜像](https://gitee.com/cunkai/HomebrewCN)
- [Homebrew 主页 — The Missing Package Manager for macOS (or Linux)](https://brew.sh/)
- [Homebrew Documentation](https://docs.brew.sh/) Homebrew 官方文档，很多内容可以从这里找到，以下摘出来的几个链接也是从这里获得。2024-10-05 21:03:19
- [Homebrew Formulae](https://formulae.brew.sh/)
- [Homebrew Blog](https://brew.sh/blog/)
- [Installation — Homebrew Documentation](https://docs.brew.sh/Installation)
- [How do I update my local packages?](https://docs.brew.sh/FAQ#how-do-i-update-my-local-packages)
- [Homebrew terminology](https://docs.brew.sh/Formula-Cookbook#homebrew-terminology)
- [Homebrew 中文网](https://brew.idayer.com/)
- [Mac下的包管理神器，Homebrew最全入门指南_homebrew core-CSDN博客](https://blog.csdn.net/weixin_41192342/article/details/127917569)