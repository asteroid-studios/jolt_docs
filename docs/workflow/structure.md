---
sidebar_position: 2
sidebar_label: "Structure"
---

# Project Structure

Heres a quick overview of a Jolt app structure:

```
app
│   pubspec.yaml
|
└─── env
|
└─── assets
│
└─── lib
     │   main.dart
     |
     └─── project
     │
     └─── shared
     │
     └─── models
     │
     └─── services
     │
     └─── views
```

Next we will break down each component.

## pubspec.yaml

Here you will declare:

- Your current app version
- Your installed packages
- Any assets you want to include in your app

## Env Folder

This folder will contain subfolders for each of your different environments. Such as local, dev, staging and live.

## Assets Folder

This folder will contain all of your assets, it's recommended to group your assets by file type

## main.dart

The `main.dart`, located inside the `lib` folder, is the starting point for your app.

This file will contain a `main()` function, which will run your Jolt app.

Any settings for your Jolt app can be found here, though it's recommended to keep your settings organised in a project folder.

## Project Folder

This folder will files that pertain to the settings of your Jolt app. Such as:

- Themes
- Typography
- Navigation
- Widget settings

If you edit the values in the files, then refresh your app, you will see the changes reflected.

## Shared Folder

This folder is a place to store any widgets that might be shared across your app. If a custom shared widget/feature needs multiple files, organise them in a folder, such as `/drawing_box`.

## Models Folder

## Controllers Folder

## Views Folder
