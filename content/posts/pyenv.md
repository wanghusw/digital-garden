---
title: pyenv
draft: false
tags:
  - python
created: 2026-01-26 22:18
date: 2026-01-26
lastmod: 2026-01-26 23:16
---

因为 VSCode 的 Beancount 插件不能正常使用，凌晨折腾了很久，早上起床后，睡前我怀疑是 Mac 上的 Python 版本太新，所以就想着重新安装一个低版本的，后来又想到我用 Homebrew 安装 Python，不是说可以多版本安装嘛，于是我就想着怎么来多版本安装一下，用 [[AI]] 搜索时发现了 pyenv，用于管理多版本 Python。

## 安装及配置

❗以下内容还要和 `豆包` 的聊天记录做交叉比对。2026-01-26 23:14:49

```bash
# 安装
brew install pyenv

# 配置，将以下内容复制到 `.zshrc` 的末位
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/shims:$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init --path)"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"

# 或者用以下代码
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo 'export PATH="$PYENV_ROOT/shims:$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(pyenv init --path)"' >> ~/.zshrc
echo 'eval "$(pyenv init -)"' >> ~/.zshrc
echo 'eval "$(pyenv virtualenv-init -)"'  >> ~/.zshrc

```

## pyenv-virtualenv

用于管理虚拟环境的插件

```bash
# 基于 3.11.9 创建虚拟环境
pyenv virtualenv 3.11.9 myproject_env

# 激活
pyenv activate beancount-v2-env # beancount-v2-env 是虚拟环境的名称，可以自定义

# 停用
pyenv deactivate
```