---
sidebar_position: 1
sidebar_label: "New Project"
---

# Your New Project

## Environments

Your project has a local, staging and live environment set up by default. You can modify the configuration for each file in the `env.dart` for each environment.

```dart title="env/ _ chosen environment _ /env.dart"

```

> **TO-DOC** Switching Icons

:::tip Switching Environments

You can switch between different environments by running:

```bash
jolt switch env
```

Where **env** is the name of your environment (local,staging,live).

:::

## Packages

```yaml title="pubspec.yaml"

```

## Linting

Your project comes with [**lint**](https://pub.dev/packages/lint) setup by default. You can customise your linting rules in the `analysis-options.yaml`

```yaml title="analysis-options.yaml"
include: package:lint/analysis_options_package.yaml
```
