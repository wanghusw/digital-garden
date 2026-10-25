---
title: 绕过 Windows 11 升级助手/设置硬件检查（TPM、CPU、RAM）
draft: false
tags:
  - windows-11
created: 2026-08-21 16:19
date: 2026-08-21
lastmod: 2026-08-21 16:28
---

ℹ️ https://gist.github.com/asheroto/5087d2a38b311b0c92be2a4f23f92d3e

将 `Windows11-Enable-Upgrade.ps1` 下载保存到本地用户文件夹，然后用 **PowerShell as Administrator** 执行：

```bash
.\Windows11-Enable-Upgrade.ps1
```

如果碰到权限问题，先执行以下代码：

```bash
Unblock-File -Path C:\Users\RockSalt\Windows11-Enable-Upgrade.ps1 # 或者
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```