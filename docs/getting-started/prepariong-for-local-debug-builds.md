---
sidebar_position: 4
---

# Preparing For Local Debug Builds

For iOS builds, you will need to open the macos/Runner.xcworkspace and ios/Runnerxcworkspace:

- Within `General > Devployment Info`, set the target iOS version to 12
- Within `Signing & Capabilities`, enable `Automatically manage signing` along with team selection (this assumes you already have your apple developer account set up with your device being added to the device list for your account) 

For Mac OS X builds, you will need to open the macos/Runner.xcworkspace and ios/Runnerxcworkspace:

- Within `General > Devployment Info`, set the `Deployment Target` to 10.12
- Within `Signing & Capabilities`
  - enable `Automatically manage signing` along with team selection (this assumes you already have your apple developer account set up with your device being added to the device list for your account)
  - Enable `Outgoping Connections (Client)` for both `App Sandbox (Debug and Profile)` and `App Sandbox (Release)`