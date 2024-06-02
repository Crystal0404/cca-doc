---
title: 重新引入旧版袭击规则开发细节
authors:
  - name: Crystal0404
    url: https://github.com/Crystal0404
    image_url: https://github.com/Crystal0404.png
date: 2024/06/01/20:00
---
1.21新的袭击机制Mojang设计的非常糟糕...所幸我们可以通过制作Mod来恢复曾经的袭击XD
<!-- truncate -->

**特别注意, 本文中出现的MC源码是基于Yarn的映射, 开源协议是CC-1.0**

## 变化

***在开始之前, 我们需要先搞清楚1.21的袭击发生了什么变化***

---
1. 不详之兆获取方式的变化: 

    击杀掠夺者队长的时候, 我们不能获取不详之兆. 但是会掉落一个喝下后会获得不详之兆效果的药水

2. 袭击触发流程的变化: 

    以前当带有不详之兆的玩家靠近村庄时, 就会直接触发袭击. 现在改成了靠近村庄后, 不详之兆会变成30s的袭击之兆, 时间结束后触发袭击
---
村民: ***

## 动手

然后需要通过一些技巧来进行对Minecraft搜索(例如搜索对不详之兆相关方法的调用)来看看具体实现

这是与袭击有关的怪物死亡后调用的方法, 我们需要在这里重新引入上述第一点

```java
@Override
public void onDeath(DamageSource damageSource) {
    // 只能在服务端调用, 在客户端调用会boom
    if (this.getWorld() instanceof ServerWorld) { 
        // 获取是谁击杀的, 如果没有击杀者(例如是摔死的)返回null
        Entity entity = damageSource.getAttacker();
        // 获取当前所在raid对象
        Raid raid = this.getRaid();
        // 判断是否在袭击中
        if (raid != null) {
            // 判断这个怪物是不是队长
            if (this.isPatrolLeader()) {
                // 不知道是干什么的, 不过不影响
                raid.removeLeader(this.getWave());
            }
            // 判断是不是玩家击杀的
            if (entity != null && entity.getType() == EntityType.PLAYER) {
                // 村庄英雄Buff结算相关
                raid.addHero(entity);
            }
            // 从当前袭击中移除
            raid.removeFromWave(this, false);
        }
        // 在1.20.6中, 这里是执行是否应该给玩家不详之兆buff的地方
        // 不过Mixin无法瞄准这里, 所以我们不在这里修改
    }
    
   /*
     (这是1.20.6的Minecraft逻辑, 实际操作我是直接把代码复制过来了XD, 如果你要看代码, 可以去看我的mixin, 是直接复制1.20.6的代码)
     这里就是我们实际要注入的地方了, 这里不展示代码, 但是会总结一些要点
     1. 因为Mixin无法瞄准上面那个地方, 所以在这里使用变通方法时, 我们需要再次判断当前是不是服务端
     不满足1, 直接结束
     2. 判断当前死亡的怪物是不是袭击队长
     3. 判断是否有袭击
     4. 判断96格内是否有袭击
     不满足2、3、4直接结束
     
     现在可以开始获取buff的逻辑了
     首先需要获取玩家对象
     
     1. 判断攻击的是不是玩家, 如果是, 玩家对象就拿到了
     2. 如果不是玩家, 就会判断是不是狗攻击的, 如果是, 玩家对象就是狗主人
     
     这里的判断比较奇葩, 我不太能理解
     需要判断怪物头那个装备槽装备的是不是灾厄旗帜, 如果不是, 直接结束
     
     然后是计算应该给玩家多少等级的buff, 之前的玩家对象就是用来在这里赋予buff的
     如果玩家没有不详征兆的buff, 就给1级不详征兆
     如果有buff了, 就会把当前buff等级+1, 如果大于5, 就把等级设置为5
     记得给buff前清除玩家身上原有buff, 不然会出现两个不详征兆
     
     最后由于是Carpet, 记得装上开关
    */

   // 父类中的逻辑
    super.onDeath(damageSource);
}
```

接下来我们需要恢复由不详征兆直接触发袭击的逻辑, 这是每gt都会执行一次的代码,

返回值决定的是是否应该移除当前不详之兆buff

```java
@Override
    public boolean applyUpdateEffect(LivingEntity entity, int amplifier) {
    /*
      我们需要在这里注入代码
      首先需要判断传入的LivingEntity是不是ServerPlayerEntity实例, 如果不是就返回true, 也就意味着不要删掉不详之兆buff
      然后是判断是不是游戏模式是不是旁观, 旁观是不能触发袭击的, 所以也是返回true
      接下来需要判断是不是和平, 以及玩家是不是靠近村庄, 如果不满足其中一个, 也是返回true
      
      如果都满足了, 就会尝试开启袭击(这是另一个方法, 尝试成功返回袭击对象, 失败返回null)
      所以判断返回值是不是null, 如果是就继续执行下面的代码, 不是就返回false清除buff
     */
        Raid raid;
        ServerWorld serverWorld;
        ServerPlayerEntity serverPlayerEntity;
        // 开启袭击的条件, 第一个instanceof是判断是不是ServerPlayerEntity, 然后是判断是不是旁观者, 是不是和平, 是不是靠近村庄, 有没有袭击(如果有就是判断不详之兆等级是不是大于5, 大于5就不会继续开启袭击)
        // 我们需要修改这个判断, 因为我们不希望开启规则后把不详征兆转化为袭击之兆, 通过mixin, 让这个检测始终无法通过
        // 也就意味着依赖这些逻辑的mod, 可能会无法正常工作, 这是不可避免的(不会引起崩溃)
        if (entity instanceof ServerPlayerEntity && !(serverPlayerEntity = (ServerPlayerEntity)entity).isSpectator() && (serverWorld = serverPlayerEntity.getServerWorld()).getDifficulty() != Difficulty.PEACEFUL && serverWorld.isNearOccupiedPointOfInterest(serverPlayerEntity.getBlockPos()) && ((raid = serverWorld.getRaidAt(serverPlayerEntity.getBlockPos())) == null || raid.getBadOmenLevel() < raid.getMaxAcceptableBadOmenLevel())) {
            // 给玩家一个30s的袭击之兆buff
            serverPlayerEntity.addStatusEffect(new StatusEffectInstance(StatusEffects.RAID_OMEN, 600, amplifier));
            // 设置袭击中心点
            serverPlayerEntity.setStartRaidPos(serverPlayerEntity.getBlockPos());
            // 返回false清除buff
            return false;
        }
        
        // 最后, 上面检测都没过, 返回true, 也就是说保持原样(修改第二个判断的原因就是其它mod可能注入到这里, 如果全部在第一个注入的地方返回, 可能会引发兼容问题)
        return true;
    }
```

其实到了这里... 当然还没完XD, 修改完这些代码你会发现袭击塔还是跑不起来, 因为还有一段代码.....

这里就是真正开启袭击的地方了, true就是开启袭击, false就是关闭袭击

```java
public boolean start(ServerPlayerEntity serverPlayerEntity) {
        // 获取玩家身上袭击之兆的buff, 没有这个buff就返回null
        // 我们需要把这个袭击之兆改成不详之兆
        StatusEffectInstance statusEffectInstance = serverPlayerEntity.getStatusEffect(StatusEffects.RAID_OMEN);
        // 检查是不是袭击之兆, 不是就返回false不启动袭击
        if (statusEffectInstance == null) {
            return false;
        }
        // 袭击等级是当前袭击之兆等级+1
        this.badOmenLevel += statusEffectInstance.getAmplifier() + 1;
        // 重新赋值袭击等级, 简而言之就是最大等级是5
        this.badOmenLevel = MathHelper.clamp(this.badOmenLevel, 0, this.getMaxAcceptableBadOmenLevel());
        // 判断袭击是否生成
        if (!this.hasSpawned()) {
            // 相关计分板
            serverPlayerEntity.incrementStat(Stats.RAID_TRIGGER);
            Criteria.VOLUNTARY_EXILE.trigger(serverPlayerEntity);
        }
        // 袭击, 启动!
        return true;
    }
```

写了一大堆, 发现好像有点偏题了, 不过这个功能的思路应该都在这了. 希望这一大堆分析可以给大家带来一点收获XD
