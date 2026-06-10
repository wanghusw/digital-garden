---
title: WSL
draft: false
tags:
  - wsl
created: 2025-12-15 17:13
date: 2026-01-02
lastmod: 2026-01-02 19:40
---

检查系统中是否安装了 WSL，在 PowerShell 或者 CMD 中运营：

```shell
wsl --list --verbose # 或者简写：wsl -l -v
```

安装 WSL，在 PowerShell 中运行：
```shell
wsl --install
```

进入 WSL：`bash` 或者 `wsl`

退出 WSL 当前会话：`exit` 或者 `Ctrl + D`

完全停止 WSL 后台：`wsl --shutdown`

在 WSL 中更新软件包：`sudo apt update && sudo apt upgrade`

如果有需要我可以去问 AI 如何把 WSL 迁移到其他硬盘分区。