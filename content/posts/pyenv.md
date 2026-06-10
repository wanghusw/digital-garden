---
title: pyenv
draft: false
tags:
  - python
created: 2026-01-26 22:18
date: 2026-01-26
lastmod: 2026-02-02 22:11
---

因为 VSCode 的 Beancount 插件不能正常使用，凌晨折腾了很久，早上起床后，睡前我怀疑是 Mac 上的 Python 版本太新，所以就想着重新安装一个低版本的，后来又想到我用 Homebrew 安装 Python，不是说可以多版本安装嘛，于是我就想着怎么来多版本安装一下，用 [[AI]] 搜索时发现了 pyenv，用于管理多版本 Python。

## 安装及配置

```bash
# 安装
brew install pyenv

# 配置，将以下内容复制到 `.zshrc` 的末位
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/shims:$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init --path)"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"

# 或者执行以下代码为 `.zshrc` 追加内容
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo 'export PATH="$PYENV_ROOT/shims:$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(pyenv init --path)"' >> ~/.zshrc
echo 'eval "$(pyenv init -)"' >> ~/.zshrc
echo 'eval "$(pyenv virtualenv-init -)"'  >> ~/.zshrc # virtualenv 初始化

# 使配置立即生效（无需重启终端） 
source ~/.zshrc

# 执行以下代码，如果能输出 pyenv 的版本号，说明配置成功
pyenv --version

# 待验证：将健壮的 pyenv 配置写入 ~/.zshrc
cat << EOF >> ~/.zshrc 

# Pyenv 配置（仅在 pyenv 安装目录存在时生效）
if [[ -d "\$HOME/.pyenv" ]]; then
  export PYENV_ROOT="\$HOME/.pyenv"
  export PATH="\$PYENV_ROOT/shims:\$PYENV_ROOT/bin:\$PATH"
  eval "\$(pyenv init --path)"
  eval "\$(pyenv init -)"
  eval "\$(pyenv virtualenv-init -)"
fi
EOF
```

##  用 pyenv 安装 Python

```bash
# 查看可安装的 Python 版本 
pyenv install --list | grep "3.11" # 筛选 3.11 系列 

# 安装一个 Python 版本（示例：3.11.9） 
pyenv install 3.11.9 

# 设置全局默认 Python 版本 
pyenv global 3.11.9 

# 验证版本 
python --version # 应输出 Python 3.11.9
pyenv version    # 应输出 3.11.9 (set by /Users/你的用户名/.pyenv/version)
pyenv versions   # pyenv 安装的所有 Python 版本
```


## pyenv-virtualenv

用于管理虚拟环境的插件

```bash
# 安装 pyenv-virtualenv
brew install pyenv-virtualenv

# 基于 3.11.9 创建虚拟环境
pyenv virtualenv 3.11.9 myproject-env # myproject-env 为虚拟环境名称

# 查看所有虚拟环境（验证创建成功）
pyenv virtualenvs

# 激活环境
pyenv activate beancount-v2-env # beancount-v2-env 是虚拟环境的名称，可以自定义

# 退出
pyenv deactivate

# 查看所有虚拟环境
pyenv virtualenvs

# 删除无用虚拟环境
pyenv uninstall <虚拟环境名称>

# 查看当前激活的环境
pyenv version # 会显示当前的 Python 环境

# 进入指定目录时自动激活该环境
cd ~/Documents/beancount # 替换为实际目录

# 设置该目录默认激活 beancount-v2-env
pyenv local beancount-v2-env

# 可以退出该目录再重新进入，会自动激活环境（命令行开头会显示：beancount-v2-env）
```