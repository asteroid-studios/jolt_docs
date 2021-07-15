---
sidebar_position: 1
---

# Getting Started

## Jolt CLI

The easiest way to get started using Jolt is to install and activate the **Jolt CLI**.

```bash
flutter pub global activate jolt_cli
```

## Creating a new project

To create a flutter project in the current directory:

```bash
jolt create project
```

Note: By default it will take the folder's name as project name

You can name the project with `jolt create project:my_project`

If the name has spaces use `jolt create project:"my cool project"`

## Project structure

Heres a quick rundown of your created project structure:

```
project
│   README.md
│   file001.txt
│
└───folder1
│   │   file011.txt
│   │   file012.txt
│   │
│   └───subfolder1
│       │   file111.txt
│       │   file112.txt
│       │   ...
│
└───folder2
    │   file021.txt
    │   file022.txt
```
