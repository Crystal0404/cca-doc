---
sidebar_position: 3
---
# Hide Settings

---
CCA introduced this feature in 1.6.0, with the goal of hiding some features that are not intended to be exposed to users.

They are some Java system properties

---
## List Of Parameters

| System properties                  | describe                  |
|------------------------------------|---------------------------|
| `-Dcca.disable.EasterEggs=true`    | Disable Easter eggs       |
| `-Dcca.enable.debug=true`          | Print debug logs          |
| `-Dcca.enable.network.debug=true`  | Print network debug logs  |
| `-Dcca.enable.MagicSettings=true"` | Enable the magic settings |

---
## How To Use:

### Server
You need to put them in your startup command

**For example (in Windows)**
```cmd
java -Xmx2G -Dcca.enable.MagicSettings=true -jar server.jar nogui
```

### Client
Please refer to your launcher's documentation

