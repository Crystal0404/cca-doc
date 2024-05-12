---
sidebar_position: 1
---
# 规则列表

---

## MC调整

### C珍珠加载(CEnderPearlChunkLoading)
移植并修复自[Carpet-Extra](https://github.com/gnembon/carpet-extra)的enderPearlChunkLoading

C没有特殊含义, 只为和Carpet-Extra的功能作区分

**1.20.4的[Carpet-Extra](https://github.com/gnembon/carpet-extra)应用了我的修复, 为了防止冲突, 我在1.20.4及以后的版本中移除了它**

- 分类: ```MC修改```
- 类型: ```布尔值```
- 默认值: ```false```
- 参考值: ```flase``` ```true```
- 验证器: 严格(不区分大小写)

### 比较器忽略来自下方的状态更新(ComparatorIgnoresStateUpdatesFromBelow)

*注: 只有Minecraft1.20.4以上有这个功能*

开启此选项后, 比较器会忽略来自下方的状态更新(意味着开启活板门不会破坏比较器)

- 分类: ```MC修改```
- 类型: ```布尔值```
- 默认值: ```false```
- 参考值: ```flase``` ```true```
- 验证器: 严格(不区分大小写)

### 末影人不能在下界拾取方块(EndermanCannotPickUpBlocksInNether)

保护你的下界地形不被末影人破坏, 并且防止大量末影人因拾取方块不消失从而造成卡顿.

- 分类: ```MC修改```
- 类型: ```布尔值```
- 默认值: ```false```
- 参考值: ```flase``` ```true```
- 验证器: 严格(不区分大小写)

### 物品分身(ItemShadowing)

重新引入1.16.5物品栏之间交换的逻辑, 使得[物品分身](https://www.bilibili.com/video/BV1cL4y1B75R)这项技术可以使用

注: 由于Minecraft项目结构的改变, 视频中代码演示仅作参考, CCA实际实现可能略有不同

- 分类: ```MC修改```
- 类型: ```布尔值```
- 默认值: ```false```
- 参考值: ```flase``` ```true```
- 验证器: 严格(不区分大小写)

### 魔法盒子(MagicBox)
控制是否可以使用[强转抑制器](https://www.bilibili.com/read/cv24323749)

是的, 它是CCA的第一个功能!

- 分类: ```MC修改```
- 类型: ```布尔值```
- 默认值: Minecraft >= 1.20.2 ```false```  Minecraft < 1.20.2 ```true```
- 参考值: ```false``` ```true```
- 验证器: 严格(不区分大小写)

### 禁用蝙蝠生成(NoBatSpawn)

让你的世界不再生成烦人的蝙蝠.

- 分类: ```MC修改```
- 类型: ```布尔值```
- 默认值: ```false```
- 参考值: ```flase``` ```true```
- 验证器: 严格(不区分大小写)

### 恢复旧版袭击(RevertOldVersionRaid)

我不能失去我的印钞机

- 分类: ```MC修改```
- 类型: ```布尔值```
- 默认值: ```false```
- 参考值: ```flase``` ```true```
- 验证器: 严格(不区分大小写)

---

## 创造工具

### 潜影盒红石信号输出拓展(ShulkerBoxPowerOutputExpansion)

修改比较器检测潜影盒输出信号强度的逻辑

占用物品栏的数量就是输出信号的强度

- 分类: ```创造工具```
- 类型: ```布尔值```
- 默认值: ```false```
- 参考值: ```flase``` ```true```
- 验证器: 严格(不区分大小写)

### 潜影盒红石信号输出拓展颜色设置(ShulkerBoxPowerOutputExpansionColour)

设置潜影盒红石信号输出拓展生效的潜影盒颜色(默认粉色).

- 分类: ```创造工具```
- 类型: ```枚举```
- 默认值: ```pink```
- 参考值: 略
- 验证器: 严格(不区分大小写)

---

## 网络

### CCA网络协议(CCANetworkProtocol)

> [!Caution]
> CrystalCarpetAddition1.1.x生成的配置json与1.0.x的不兼容, 请删除后重新配置!

用于实现获取客户端模组信息和一些其他功能(例如mod黑名单), 它有一个接口给其他模组使用. [使用文档](https://crystal0404.github.io/cca-doc/en/docs/CCANetworkProtocol)

- 分类: ```网络```
- 类型: ```布尔值```
- 默认值: ```false```
- 参考值: ```flase``` ```true```
- 验证器: 严格(不区分大小写)

---
