Obsidian 的 git 插件的 `.gitignore` 文件如下：
```text
# Obsidian 相关
# .obsidian/plugins/             # 忽略所有已安装的第三方插件（可选：如果你不想同步插件）
.obsidian/workspace.json         # 忽略工作区布局（窗口位置、打开的面板等）
.obsidian/workspace-mobile.json
.obsidian/graph.json             # 忽略图谱视图的布局信息
.trash/                          # 回收站
# .obsidian/app.json             # 应用配置
# .obsidian/hotkeys.json         # 忽略自定义快捷键（可选）
# .obsidian/snippets/*.css       # 忽略自定义 CSS 片段（可选，若想同步则不要忽略）
# .obsidian/appearance.json      # 外观主题等设置
# .obsidian/themes/              # 忽略主题（可选）

# 缓存和临时文件
.obsidian/cache/
.obsidian/backups/
.obsidian/logs/
.obsidian/trash/

# 操作系统相关
# macOS
.DS_Store                        # macOS 文件元数据
.Spotlight-V100/
.Trashes

# Windows
Thumbs.db                        # Windows 缩略图缓存
desktop.ini
$RECYCLE.BIN/
NTUSER.DAT*

# Linux
.directory
.Trash-*
```

当发现已提交文件需要忽略时，需执行「取消跟踪 + 提交删除」两步操作：
```bash
git rm --cached .obsidian/workspace.json
git commit -m "Remove tracked workspace config"
```

ℹ️[obsidian-git忽略文件配置：.gitignore使用指南-CSDN博客](https://blog.csdn.net/gitblog_01022/article/details/151732100)