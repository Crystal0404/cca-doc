---
unlisted: true
---

# 已过时的CCANetworkProtocol文档

## CCANetworkProtocol-V1

在你服务器第一次启动后, 它会生成一个配置文件, 它的路径看起来是这样的`<YourServer>\config\CrystalCarpetAddition\CrystalCarpetAddition.json`

里面的内容是这样的
```
{
  "BlackMap": {},
  "PrintModList": false,
  "Kick": true
}
```

`BlackMap`是用来填写黑名单模组的, 填写方式是一个键值对, 键是mod的id(可以填写正则表达式), 值是版本谓词

例如要禁用id为`abc`的所有大于1.0.0版本可以这么填写 -> `"BlackMap": {"abc": ">1.0.0"}`

也可以填写正则表达式, 例如禁用id含有`abc`三个字母的所有版本可以这么填写 -> `"BlackMap": {".*abc.*": "*"}`(*为通配符, 表示全部版本)

`PrintModList`, 设置为`true`会在控制台和日志中打印玩家的mod信息

`Kick`, 设置为true, 如果客户端无法接收`CCANetworkProtocol`的数据包, 会被踢出服务器

这是一个正确填写的例子
```
{
  "BlackMap": {
    "abc": ">=1.0.0",
    ".*hello.*": "*"
  },
  "PrintModList": false,
  "Kick": true
}
```
**如果填写错误, 可能会造成游戏无法启动**