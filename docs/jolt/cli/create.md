---
sidebar_position: 2
sidebar_label: "Create"
---

# Create Commands

### Create project

By default it will take the folder's name as project name, unless specified

```bash
    jolt create project

    or

    jolt create project:project_name

    or

    jolt create project:"Project Name"
```

### Create Feature

Creates an app feature, consisting of a model and provider, each with its own parent feature folder.

```bash
    jolt create feature:feature_name
```

<details>
    <summary>Click to see example structure</summary>

    models
    |
    └─── my_feature
         └─── my_feature_model.dart

    providers
    |
    └─── my_feature
         └─── my_feature_provider.dart

</details>

### Create View

Creates a new view in the views folder.

Includes a view and a controller.

```bash
    jolt create view:view_name
```

### Create Shared

Creates a new widget in the shared folder, for example something like a styled card.

```bash
    jolt create shared:widget_name
```
