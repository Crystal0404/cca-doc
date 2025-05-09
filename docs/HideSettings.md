---
sidebar_position: 3
---
# 隐藏设置

---
CCA于1.6.0中引入这一功能, 目标是隐藏一些不希望暴露给用户的功能.

它们是一些Java系统属性

---
## 参数列表

| 系统属性                              | 描述         |
|-----------------------------------|------------|
| `-Dcca.disable.EasterEggs=true`   | 禁用彩蛋       |
| `-Dcca.enable.debug=true`         | 打印调试日志     |
| `-Dcca.enable.network.debug=true` | 打印网络通信调试日志 |
| `-Dcca.enable.MagicSettings=true` | 启用隐藏规则     |

---
## 如何使用

### 服务器
你需要把它们放在你的启动命令中

**例 (在Windows中)**
```cmd
java -Xmx2G -Dcca.enable.MagicSettings=true -jar server.jar nogui
```

### 客户端
请参照你的启动器相关文档

例如: HMCL在修改高级设置中的Java虚拟机参数一栏
