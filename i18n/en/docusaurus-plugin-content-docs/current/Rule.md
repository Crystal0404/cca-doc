---
sidebar_position: 1
---
# Rule list

---

## MC Tweaks

### CEnderPearlChunkLoading
The enderPearlChunkLoading function of [Carpet-Extra](https://github.com/gnembon/carpet-extra) is not working, it is an alternative

C has no special meaning, only for differentiation

**Carpet-Extra used my fix, so I removed it in 1.20.4 and above**

- Categories: ```MC Tweaks```
- Type: ```Boolean```
- Default value: ```false```
- Options: ```flase``` ```true```
- Validators: Strict(Case-insensitive)

### ComparatorIgnoresStateUpdatesFromBelow

When this option is turned on, the comparator ignores state updates from below
(Means that opening the trap gate will not destroy the comparator)

- Categories: ```MC Tweaks```
- Type: ```Boolean```
- Default value: ```false```
- Options: ```flase``` ```true```
- Validators: Strict(Case-insensitive)

### EndermanCannotPickUpBlocksInNether

Protect your nether terrain from being destroyed by Enderman and prevent a large number of Endermen from not despawning after picking up blocks.

- Categories: ```MC Tweaks```
- Type: ```Boolean```
- Default value: ```false```
- Options: ```flase``` ```true```
- Validators: Strict(Case-insensitive)

### ItemShadowing
Use the ItemStack code in section 1.16.5, You can watch this video for its purpose.

[Click on me to jump to the video](https://youtu.be/mTeYwq7HaEA)

Note: I don't know how to translate this sentence. If you have any questions, please refer to the [Chinese README](https://github.com/Crystal0404/CrystalCarpetAddition) :(

- Categories: ```MC Tweaks```
- Type: ```Boolean```
- Default value: ```false```
- Options: ```flase``` ```true```
- Validators: Strict(Case-insensitive)

### MagicBox
Control whether [CastSuppressor(CCESuppressor)](https://www.bilibili.com/read/cv24323749) is available

- Categories: ```MC Tweaks```
- Type: ```Boolean```
- Default value: Minecraft >= 1.20.2 ```false```  Minecraft < 1.20.2 ```true```
- Options: ```false``` ```true```
- Validators: Strict(Case-insensitive)

### NoBatSpawn

Makes bats no longer spawn.

- Categories: ```MC Tweaks```
- Type: ```Boolean```
- Default value: ```false```
- Options: ```flase``` ```true```
- Validators: Strict(Case-insensitive)


### RevertOldVersionRaid

I can't afford to lose my money printing machine

- Categories: ```MC Tweaks```
- Type: ```Boolean```
- Default value: ```false```
- Options: ```flase``` ```true```
- Validators: Strict(Case-insensitive)

---

## Creative Tools

### ShulkerBoxPowerOutputExpansion

Modify the output logic of the comparator detection ShulkerBox

The number of inventory occupied is the number output!

- Categories: ```CreativeTools```
- Type: ```Boolean```
- Default value: ```false```
- Options: ```flase``` ```true```
- Validators: Strict(Case-insensitive)

### ShulkerBoxPowerOutputExpansionColour

Specifies the color of the ShulkerBox in effect for the Shulker Box Power Output Expansion(Pink by default).

- Categories: ```CreativeTools```
- Type: ```enum```
- Default value: ```pink```
- Options: It's too much, I'm too lazy to write XD
- Validators: Strict(Case-insensitive)

---

## Network

### CCANetworkProtocol

Used to get client mod information and some other features (Mod blacklist), it has an interface for other mods to use. [Use documentation](https://crystal0404.github.io/cca-doc/en/docs/CCANetworkProtocol)

**If something goes wrong, try deleting the profile and restarting**

- Categories: ```Network```
- Type: ```Boolean```
- Default value: ```false```
- Options: ```flase``` ```true```
- Validators: Strict(Case-insensitive)

---