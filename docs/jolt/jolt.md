---
sidebar_position: 1
---

# Jolt

## Setting up the JoltApp widget

The `JoltApp` widget wraps your entire app, just like Flutter's `MaterialApp` would.

`initialiseJolt` is also required to be called at the top of the `main.dart`, just above JoltApp.

Here is an example:

```dart title="main.dart"
Future<void> main() async {
    await initialiseJolt();
    runApp(
        JoltApp(
            appName: 'Example',
            pages: pages,
            joltUI: JoltUI(),
        ),
    );
}
```

## Available parameters

### `appName` _required_

Specify the name of your app.

---

### `pages` _required_

Requires a `List<GetPage<dynamic>>`. Jolt uses [Get](https://pub.dev/packages/get) for its navigation.

---

### `ui` _required_

This is where you insert your JoltUI widget. To see all the available parameters for Jolt UI click [here](/ui/ui).

---

### `auth`

Takes an optional `JoltAuth` class. For example: `SupabaseAuth` or `Firebase Auth`.

If no auth is provided, defaults to `JoltAuthless`

---

### `env`

Takes an optional `JoltEnv` class. This will be required when using Jolt Environment Switching.

---

### `themes`

Takes an optional `List<JoltTheme>`.

---

### `textScale`

Takes an optional `TextScale` value. Used for changing the default Text Scale of the app.

---

### `typography`

Takes an optional `JoltTypography` class.

---
