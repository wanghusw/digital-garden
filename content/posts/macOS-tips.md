---
title: macOS Tips
draft: true
tags:
  - 
created: 2025-02-17 09:59
date: 2026-01-02
lastmod: 2026-01-02 17:57
---

## 快捷键

### 应用程序及窗口操作快捷键

- `⌘` + `,` 应用程序偏好设置

#### 关闭功能

- `⌘` + `W` 关闭当前标签页
- `⌘` + `Q` 退出当前程序
- `⌘` + `⌥` + `esc` 强制退出

#### 最小化、最大化

- `⌘` + `M` 最小化窗口
- `⌘` + `H` 隐藏窗口
- `⌘` + `⌥` + `H` 隐藏其他窗口
- `fn` + `F` 全屏当前窗口
			

### 应用程序切换快捷键

- `⌘` + `⇥` 切换程序，在此过程中切换到一个不用的程序时，松开 `⇥`，按下 `Q` 可以关闭这个程序
- `⌘` + `` ` `` 反向切换程序，只有在使用 `⌘` + `⇥` 后才有用。 
- `control` + `↑ ↓ ← → 方向键` 可以模拟触控板四指操作对应的功能

### 截屏、录屏

- `⇧` + `⌘` + `3` 全屏截图
- `⇧` + `⌘` + `4` 区域截图
- `⇧` + `⌘` + `4` + `␣` 窗口截图
- 以上快捷键再加上一个 `control` 可以不生成截图文件，而是截图到剪贴板，可以将其粘贴到需要用的地方
- `⇧` + `⌘` + `5` 调出【截屏】APP

### 访达文件管理快捷键
			- 点选查看
				- `⌘/⇧` + 光标点选 可以多选文件，只有在列表、画廊、分栏时才可以用 `⇧` 的头尾点选
				- `⌘` + `I` 显示简介（也就是 Windows 里的属性）
				- `⌥` + `⌘` + `I` 打开信息检查器，此时简介框固定，点击文件时，会随文件点选显示不同文件的简介
				- `⌘` + `J` 设置显示选项
			- 文件夹操作
				- `⌘` + `⇧` + `N` 新建文件夹
				- `⌘` + `control` + `N` 将选中的文件新建文件夹
				- `⏎` 重命名
			- 窗口标签页
				- `⌘` + `T` 新建标签页
				- `⌘` + `N` 新建访达窗口
				- `⌘` + 双击文件夹 新窗口打开文件夹
				- `⌘` + `↑` 访达「返回上一层」
			- 删除/推出
				- `⌘` + `⌫` 删除至废纸篓
				- `⌘` + `⌥` + `⌫` 不进入废纸篓直接删除
				- `⌘` + `⇧` + `⌫` 清空废纸篓
				- `⌘` + `E` 推出外接磁盘
			- 按住 `⌥`，可在「访达」前往「资源库」
			- `⌘` + `⇧` + `.` 显示隐藏文件，用完之后要记得再按一次把文件隐藏掉
		- 输入法快捷键
			- `⌃` + `⌘` + `␣` 或者按 `fn` 打开字符检视器
			- `control` + `␣` 切换输入法
			- `⇧` + `⌥` + `K` 输入 ``
			- `⌥` + `esc` 朗读所选内容
		- 效率
			- `␣` 预览所有文件
		- 按住 `⌘`，可以拖动状态栏图标位置
		- `⌘` + `⌥` + `V` 剪切粘贴（移动）
		- `⌘` + `⇧` + `S` 另存为
		- `⌘` + `⇧` + `Z` 重做
		- `⌘` + `⌥` + `D` 隐藏/显示程序坞
		- `control` + 光标点击 代替右键
		- `⌥` + 拖动 复制文件
		- `⌥` + 点击 显示隐藏功能菜单
		- `⌥` + 右键点击 设置文件默认打开方式
		- `⌥` + 点击关闭 当打开很多窗口的时候用这个快捷键可以一次性关闭所有窗口

- 学习笔记
	- 一些代码
		- `sudo spctl --master-disable` 解锁安全权限
	- 触控板
		- 四指向上轻扫，打开调度中心
	- 触发角
	- 必装软件
		- MOS 让鼠标适应 Windows 操作习惯
		- 清理软件选哪个呢？
	- 外设
		- 不要用拓展坞的 C 口来充电
		- 贝尔金拓展坞
	- 未来要准备一个可以作为备份的硬盘。2024-09-28 08:53:40
- [[macOS 下常用软件列表]]
- Mac 音乐下载管理全流程
	- 下载
		- 洛雪音乐助手
			- 下载地址：[lx-music-desktop](https://github.com/lyswhut/lx-music-desktop)
			- 安装后如果打不开，在终端输入 `sudo xattr -rd com.apple.quarantine /Applications/lx-music-desktop.app` 执行即可。
			- 音源：[洛雪音乐助手+六音自定义音源 v1.2.1-六音](https://www.sixyin.com/8498.html)
			- 音乐标签：[如何在 Mac 上编辑无损音乐的标签](https://sspai.com/post/40753)
		-
- 学习材料
	- [Mac 使用手册 - 官方 Apple 支持 (中国)](https://support.apple.com/zh-cn/guide/mac-help/welcome/mac)
	- 已学习
		- [【看完秒懂】Mac苹果电脑超详细上手入门指南！_bilibili](https://www.bilibili.com/video/BV1PF411E7LG/)
		- [【看完秒懂】Mac文件管理超详细实操指南！_bilibili](https://www.bilibili.com/video/BV1ii4y1D7Yx/)
		- [【一集完全搞定】Mac桌面程序坞与菜单栏，手把手带你自定义！bilibili](https://www.bilibili.com/video/BV19R4y1A7ak/)
		- [【一集完全搞定】Mac触控板与鼠标，看这一集就够了！！_bilibili](https://www.bilibili.com/video/BV1EY4y1z7X5/)
		- [【一集完全搞定】Mac必会快捷键，全网最详细，只看这集就够了！_bilibili](https://www.bilibili.com/video/BV1yG411P7hS/)
	- [Mac云课堂的个人空间-Mac云课堂个人主页-哔哩哔哩视频](https://space.bilibili.com/41062266?spm_id_from=333.337.0.0)
	- [WillTV - YouTube](https://www.youtube.com/@realwilltv/videos)
- 软件下载
	- 马克喵
	- 未来MAC：https://mac.macxz.com
	- 马克喵：https://www.macat.vip/mac软件
	  未来Mac网：https://mac.orsoon.com
	  ③：https://www.macat.vip/496.html
	  ④：https://www.macat.vip/9032.html
	  ⑤：https://zhuanlan.zhihu.com/p/370629856
	- https://macapp.org.cn/app/
	- [麦氪搜(iMacSO.com)](https://www.imacso.com/)
	- [Digit77.com | 海量精品Mac应用免费分享](https://www.digit77.com/)
	-
- 资料收集
	- [欢迎使用《MacBook Air 概要》 - 官方 Apple 支持 (中国)](https://support.apple.com/zh-cn/guide/macbook-air/welcome/mac)
	- [macOS 使用手册 - 官方 Apple 支持 (中国)](https://support.apple.com/zh-cn/guide/mac-help/welcome/mac)
	- [MacBook 新手入门指南（1）：10分钟，从 Windows 快速入门macOS_软件应用_什么值得买](https://post.smzdm.com/p/a3dm2xp7/)
	- [MacBook 新手入门指南（2）：27个Mac必备快捷键，看你知道几个？（附触控手势使用方法）_笔记本电脑_什么值得买](https://post.smzdm.com/p/a6dzdgxn/)
	- [MacBook 新手入门指南（3）：原来Mac自带了这么多实用的小功能！不用PS也能抠图了！_笔记本电脑_什么值得买](https://post.smzdm.com/p/a9g5v06p/)
	- [新手必看❗️MacBook到手必做的验机流程➕9⃣️个基础设置❗️](https://www.bilibili.com/video/BV1La411g7BZ/?spm_id_from=trigger_reload&vd_source=0451dc4f011ce746152fe4c10915193d)
	- [【新手必看】B站最全 M1 MAX MacBook Pro完全武装指南，购买-验机-装机-推荐软件-原生Adobe系-系统设置-游戏，全流程保姆式分享_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1tF411T7rP/?spm_id_from=333.337.search-card.all.click&vd_source=0451dc4f011ce746152fe4c10915193d)
- 验机
	- 视频参考
		- [MacBook Air开箱 验机翻车？拼多多百亿补贴的4799车_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Zi4y187jp/?vd_source=0451dc4f011ce746152fe4c10915193d)
		- [MacBook百亿补贴安全下车的验机攻略_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV13c411g7PE/?spm_id_from=333.337.search-card.all.click&vd_source=0451dc4f011ce746152fe4c10915193d)
		- [新MacBook超详细验机流程｜新手入坑必看！_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV17B4y1y7Mc/?spm_id_from=333.337.search-card.all.click&vd_source=0451dc4f011ce746152fe4c10915193d)
	- 开箱
		- 收到快递六面展示，单号进行特写，确认完好，录视频不能断。
		- 拆掉快递箱后展示牛皮纸外箱，确认外箱完好；我买的型号应该为 N63，找到外箱上面的序列号，打开苹果官网验证序列号：https://checkcoverage.apple.com/?locale=zh_CN&cid=gn-ols-checkcoverage-lp-get_help，如果显示未激活，则可以打开牛皮纸外箱进行验机
		- 检查塑封膜是否平整、无破损
		- 核对白色包装盒和牛皮纸盒验证码是否一致，一致则可以撕掉塑封膜开箱
		- 拿出机器、查看配件是否齐全
		- 仔细查看封膜是否完好、平整，完好则可以拆掉封膜
		- 核对机器底部、保修卡和上面的序列号是否一致
		- 检查机器外观，是否有划痕、磕碰等毛病
		- 翻开电脑，进入系统后核对系统信息中的序列号，确定五码合一
		- 进行屏幕检测：http://screen.liflag.cn/、https://screen.bmcx.com 查看是否有坏点
		- 进行屏幕亮度检测，屏幕亮度变化应该是平缓舒服的
		- 打开备忘录，检查键盘每个按键是否正常（每个键点三次以上），检查键盘背光是否正常
		- 检查触控板
		- 检查各个接口是否可以正常使用
		- 检查扬声器、话筒、镜头facetime
			- 扬声器检测：声音调到最大
			- 话筒检测：设置 - 键盘 - 听写
		- 下载微信进行一次视频通话
		- 检查电池循环
		-
- 使用
	- **强制退出应用**：如果 App 停止响应，可以按住 Control 键点按该 App 图标，然后选取「强制退出」
	- 接硬盘
		- [NTFS支持小工具演示（macOS）_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1XG4y1f79N/?vd_source=0451dc4f011ce746152fe4c10915193d)
		- [hoochanlon/Free-NTFS-for-Mac: Nigate，一款支持苹果芯片的Free NTFS for Mac小工具软件。NTFS R/W for macOS. Support Intel/Apple Silicon now.](https://github.com/hoochanlon/Free-NTFS-for-Mac?tab=readme-ov-file)
	- homebrew
	- Aria2
		- [macOS上如何配置Aria2多线程下载器？并激活RPC交互模式。 - 知乎](https://zhuanlan.zhihu.com/p/505493664)
		- 在 `终端` 打开时输入：`zsh aria2.sh`
		- [Mac下如何安装使用Aria2（免HomeBrew） - 知乎](https://zhuanlan.zhihu.com/p/561726501)
	- 鼠须管
		- [晴耕雨讀 - 用鼠须管输入日期时间的方法](https://0x3f.org/posts/input-date-and-time-with-rime/)
		- [Rime Squirrel 鼠须管输入法配置详解-CSDN博客](https://blog.csdn.net/qq_36224109/article/details/131935860)
		- [Rime 输入法指北 | Jiz4oh's Life](https://jiz4oh.com/2020/10/how-to-use-rime/)
		- [自由输入法 RIME 简明配置指南 - 少数派](https://sspai.com/post/84373)
		- [CustomizationGuide · rime/home Wiki](https://github.com/rime/home/wiki/CustomizationGuide)
		- [Rime：属于自己的输入法](https://www.luozx.org/rime/)
		- [好用好看好玩的输入法 —— 鼠须管配置使用 | Lufs's Blog](https://blog.isteed.cc/post/squirrel-customization-2022/)
		- [好用好看好玩的输入法 —— 鼠须管配置使用 - 哔哩哔哩](https://www.bilibili.com/read/cv15134880/)
		- [如何在小狼毫下实现调用系统日期或时间？【rime吧】_百度贴吧](https://tieba.baidu.com/p/1923873073)
		- [RIME中州韵输入法lua配置获取当前系统时间（一） - 知乎](https://zhuanlan.zhihu.com/p/471423974)
		- [Rime 输入法，从了解到入门 - Another Dayu](https://anotherdayu.com/2022/3426/)
		- [我的 Rime 配置 2022 —— 鼠须管、小狼毫与小企鹅输入法 | Lufs's Blog](https://blog.isteed.cc/post/rime-2022/)
		- [rime中州韵小狼毫 日期/农历 时间 事件 节气 滤镜-CSDN博客](https://blog.csdn.net/weixin_42148809/article/details/135480661)
		- [鼠须管输入法配置 - 哈呜.王](https://www.hawu.me/others/2666)
		- [强大的开源输入法 Rime 安装记录和配制指南 - 小辛的互联网作坊](https://encorexin.me/linux/rime-installation-guide)
		- [跨平台的开源输入法Rime定制指南，打造强大的个性化输入法 - 雨月空间站](https://www.mintimate.cn/2023/03/18/rimeQuickInit/)
		- [如何让小狼毫/鼠须管输出当前日期/时间 - 头条汇](https://min.news/zh-hans/technique/aa972936492b5bb0da6fa399b620f96c.html)
	- 待测试软件
		- CleanShot X
		- 剪贴板工具
			- [Maccy - macOS clipboard manager](https://maccy.app/)
		- 窗口管理
			- [Rectangle Mac](https://rectangleapp.com/)
			- [HyperDock](https://bahoom.com/hyperdock/)
			- [Magnet](https://apps.apple.com/us/app/magnet/id441258766)
			- [Window Tidy](https://apps.apple.com/us/app/window-tidy/id456609775)
			- [Mosaic](https://lightpillar.com/mosaic.html)
			- Window Tidy
			- [Moom](https://manytricks.com/moom/)
			- [BetterSnapTool](https://apps.apple.com/cn/app/bettersnaptool/id417375580?l=en-GB)
			- [spectacle](https://github.com/eczarny/spectacle)
			-