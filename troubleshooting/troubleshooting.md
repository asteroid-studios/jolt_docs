---
sidebar_position: 1
slug: /
---

# Troubleshooting

For debugging all app issues, it's best to ensure that your app debug settings is set to break on uncaught errors at a minimum, as this allows VS Code to provide some meaninful guidance and advice in the event it catches an exception.

## White Screen of Death

### Possible Causes

- firebase could not be initialised
    - Make sure you have completed the <a href="/backend/firebase">firebase setup steps</a> correctly
- app is hanging
    - Check your simulator's cpu for a locked process, and test hot-reloading the app. If the hot reload appears to be hanging too, this is likely your issue. Try replacing full chunks of code with simpler code (i.e. return a simple text container instead of a more complex widget) to check if the app will run with this. This will allow you to determine if there is a specific widget that is causing the issue, and allow you to focus your effort on debugging this problematic widget

