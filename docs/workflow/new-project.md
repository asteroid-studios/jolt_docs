---
sidebar_position: 1
sidebar_label: "New Project"
---

# Your New Project

## Environments

Your project has a local, staging and live environment set up by default. You can modify the configuration for each file in the `env.dart` for each environment.

```dart title="env/ _ chosen environment _ /env.dart"
final env = JoltEnv(

);
```

:::note

The **bundleId** must be unique for each environment.

:::

:::tip

You can easily switch between different environments by running:

```bash
jolt switch env
```

Where **env** is the name of your environment (local,staging,live).

:::

## Jolt App

Your project comes preconfigured with JoltApp instead of the usual Flutter MaterialApp.

To view all the available configuration options, check out the [**Jolt docs**](../jolt/jolt).

## Backend

If you selected one of the available Jolt backend providers during project creation, your app may need some additional configuration.

Please check the [**setup**](../backend/backend) for your chosen backend if applicable.

## What Next

Once you have your app environment completely set up, have a read through the created project structure on the next page.
