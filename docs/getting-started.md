---
sidebar_position: 1
slug: /
---

# Getting Started

> ### Jolt is a collection of Flutter packages, designed to standardise and supercharge the process of developing cross-platform apps.

## Your environment

Make sure you have already completed your [Flutter](https://flutter.dev/docs/get-started/install) installation, as well as [VS Code](https://code.visualstudio.com/).

Also, install these [VS Code Extensions](./vscode/suggested-extensions) if you haven't already.

## Jolt CLI

The easiest way to get started using Jolt is to pull down and activate the **Jolt CLI** using your terminal.

The first thing you will need to do is clone down the [**jolt_cli**](https://github.com/asteroid-studios/jolt_cli) repo from GitHub.

Once you have it available locally, run the following command, where **<path\>** is the path of the repo you pulled down.

```bash
flutter pub global activate --source path <path>
```

Alternatively you can just use the git url like this:

```bash
flutter pub global activate -sgit https://github.com/asteroid-studios/jolt_cli.git
```

## Creating a new project

To create a flutter project in the current directory:

```bash
jolt create project
```

Note: By default it will take the folder's name as project name

You can name the project with `jolt create project:my_project`

If the name has spaces use `jolt create project:"my cool project"`
