---
sidebar_position: 2
sidebar_label: "macOS"
---

# macOS


## Running MacOS builds on M1 arm processors

Xcode identifies your machine ID differentlty depending on whether you are running Xcode in native or rosetta emulation mode. Flutter runs your apps in rosetta mode by default, so in order to ensure Xcode registers your mac's device ID correctly when doing automatic device signing, you will need to open the apps project workspace by launching Xcode in rosetta mode when setting up the app signing. See documented solution where this information was sourced from below:

- https://github.com/flutter/flutter/issues/99351#issuecomment-1075473464