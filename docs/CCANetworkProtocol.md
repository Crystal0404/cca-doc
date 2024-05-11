---
sidebar_position: 2
---

# CCA网络协议

---

## 它有什么用?

开启本功能后, CCA会拿到加入服务器玩家客户端的mod信息.并加以利用实现了一个mod黑名单

它有一个给其他mod的接口(Mcdreforged也可以通过一些方法拿到这个接口提供的一些信息) 这会在后面说明

## 它如何使用

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

## 其它问题
在1.20.2以下的群组服环境中, 代理会丢弃登录阶段的玩家信息, 这会导致CCA的数据包无法发送, 模组黑名单功能从而无法正常工作. 但是回调接口和打印客户端mod列表的功能(应该)是正常的.

如果黑名单无法正常工作, 很可能会出现所有人都无法进入服务器, 请在`CrystalCarpetAddition.json`中把`Kick`设置为`false`, 玩家即可正常进入服务器(黑名单不会工作)

## 回调接口
(如果你不是开发者, 快跑, 这里有龙)

如果你坚持留了下来, 那我们继续

`CCANetworkProtocol`提供了一个回调接口`GetClientModMap`可供其它mod来获取玩家加入游戏时的客户端mod列表

要想使用它, 你需要先实现CCA的接口并重写其中的方法

*示例:*
```java
...
import crystal0404.crystalcarpetaddition.api.CCANetorkProtocol.GetClientModMap;
import net.minecraft.server.MinecraftServer;
import net.minecraft.server.network.ServerPlayNetworkHandler;
import net.minecraft.server.network.ServerPlayerEntity;

import java.util.HashMap;

public class getClientMod implements GetClientModMap {
    @Override
    public void getMod(MinecraftServer server, ServerPlayerEntity player, ServerPlayNetworkHandler handler, HashMap<String, String> modMap) {
        // Do sth
    }
}
```
然后你需要注册它, 让CCA知道这个接口的存在

你需要服务端入口点(即实现了`DedicatedServerModInitializer`接口重写的方法)调用`CCANetworkProtocolAPI.register()`来注册你的接口

*示例:*
```java
...
import crystal0404.crystalcarpetaddition.api.CCANetorkProtocol.CCANetworkProtocolAPI;
import net.fabricmc.api.DedicatedServerModInitializer;

public class server implements DedicatedServerModInitializer {
    @Override
    public void onInitializeServer() {
        CCANetworkProtocolAPI.register(new getClientMod());
    }
}
```
(记得在`fabric.mod.json`里注册你的服务端入口点)

**一个mod只需注册1次, 不要重复注册, 否则可能会导致OOM**

现在只要开启了`CCANetworkProtocol`并且客户端也安装了CCA和fabric-api, 玩家加入游戏时这个接口就会被调用, `modMap`是一些键值对, 键是`modId`, 值是mod的版本.

除此之外, CCA其它的方法和接口均不是对外公开的, 不要去调用它们.