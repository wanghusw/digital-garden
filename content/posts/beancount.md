---
title: Beancount 相关学习内容
draft: false
tags:
  - beancount
created: 2022-12-03 11:36
date: 2026-01-25
lastmod: 2026-01-25 15:11
---

## 参考资料

### 已读

- [Beancount —— 命令行复式簿记 | wzyboy’s blog](https://wzyboy.im/post/1063.html)
- [上古神器 Beancount：Crypto 与 AI 时代的复式记账终极方案](https://diygod.cc/beancount/)

### 未读

- [使用 Beancount 记录证券投资 | wzyboy’s blog](https://wzyboy.im/post/1317.html)
- [使用 Beancount 管理家庭财务 · BMPI](https://www.bmpi.dev/self/beancount-my-accounting-tool-v2/)
- [记账神器beancount - 拾月](https://www.skyue.com/19101819.html)
- [Beancount复式记账（一）：为什么](https://byvoid.com/zhs/blog/beancount-bookkeeping-1/)


- [GnuCash教程与概念指南](https://gnucash.org/docs/v5/zh/gnucash-guide/index.html)
- 托管平台：[BeanHub - Your smart accounting book](https://beanhub.io/)

#### 官方资料

- 作者网站：[beancount: Double-Entry Accounting from Text Files](https://furius.ca/beancount/)
- [beancount: Double-Entry Accounting from Text Files (Organization) | beancount](https://beancount.github.io/)
- 项目仓库：[beancount/beancount: Beancount: Double-Entry Accounting from Text Files.](https://github.com/beancount/beancount)
- 文档：
  - [Beancount - Index](https://docs.google.com/document/u/0/d/1RaondTJCS_IUPBHFNdT8oqFKJjVJDsfsn6JEjBG04eA/mobilebasic?tab=t.0&_immersive_translate_auto_translate=1#heading=h.hzs9xa5699ul)
  - [Beancount - Getting Started - Google 文档](https://docs.google.com/document/d/1P5At-z1sP8rgwYLHso5sEy3u4rMnIUDDgob9Y_BYuWE/edit?tab=t.0#heading=h.5o43cxhng7b7)
  - [Beancount Documentation](https://beancount.github.io/docs/)
  - [Beancount - Language Syntax - Google 文档](https://docs.google.com/document/d/1wAMVrKIA2qtRGmoVDSUBJGmYZSygUaR0uOMW1GV3YE0/edit?tab=t.0)
  - [Beancount - Syntax Cheat Sheet - Google 文档](https://docs.google.com/document/d/1M4GwF6BkcXyVVvj4yXBJMX7YFXpxlxo95W6CpU3uWVc/edit?tab=t.0#heading=h.d8nkmgbp8cjb)
  - [Beancount - Query Language - Google 文档](https://docs.google.com/document/d/1s0GOZMcrKKCLlP29MD7kHO4L88evrwWdIO0p4EwRBE0/edit?tab=t.0#heading=h.7aru55j2c7dz)

## 学习所得

收入和负债通常为负数，资产和费用通常为正数。

在 `Beancount` 中可以用 `@@` 连接两种互相转换的币种（commodity）。如：
```text
Liabilities:CMB:CreditCards     -650.00 CNY @@ 100.00 USD
```

### 如何关闭账户？

