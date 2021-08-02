---
sidebar_position: 4
sidebar_label: "Design"
---

# Design

> ### When developing apps using Jolt, try to stick to the available predefined standards for color and typeface.

## Typography

Jolt prepares the following fonts, which are all available via the context.

```dart
    // Heading One
    context.h1()

    // Heading Two
    context.h2()

    // Heading Three
    context.h3()

    // Heading Four
    context.h4()

    // Heading Five
    context.h5()

    // Heading Six
    context.h6()

    // Body Font
    context.body()
```

## Color

Jolt prepares the following colors, which are all available via the context.

### Accent Colors

The accent colors should be the main identifying colors of the apps branding.

They should be used to add decoration or signify important actions.

Light and dark variations of each are also available, generated from the base color.

```dart
    // Primary Brand Color
    context.colorPrimary
    context.colorPrimaryLight // Light Variation
    context.colorPrimaryDark // Dark Variation

    // Secondary Brand Color
    context.colorSecondary
    context.colorSecondaryLight // Light Variation
    context.colorSecondaryDark // Dark Variation

    // Tertiary Brand Color
    context.colorTertiary
    context.colorTertiaryLight // Light Variation
    context.colorTertiaryDark // Dark Variation
```

### Neutral Colors

Neutral colors should make up the bulk of your app.

```dart
    // Background Color
    // The base color of the app, underneath all other colors
    context.colorBackground

    // Surface Color
    // Used for cards, dialogs, or any other main app surface
    context.colorSurface

    // Shadow Color
    // The color used for shadows
    context.colorShadow
```

### 'On' Colors

Colors to be used on top of other colors.

Used for elements such as text and icons

```dart
    // Surface Highlight Color
    // Used for text and icons
    context.colorOnSurface

    // Light Surface Highlight Color
    // Used for softer headings and icons
    context.colorOnSurfaceLight

    // Inverse Surface Highlight Color
    // Will generally be the complete inverse of colorOnSurface
    context.colorOnInverse

    // Light Surface Highlight Color
    // Used for softer headings and icons
    context.colorOnInverseLight

    // Primary Highlight Color
    // A varient of primary color that stands out on primary
    context.colorOnPrimary

    // Secondary Highlight Color
    // A varient of secondary color that stands out on secondary
    context.colorOnSecondary

    // Tertiary Highlight Color
    // A varient of tertiary color that stands out on tertiary
    context.colorOnTertiary
```

### Semantic Colors

Semantic colors are used to

```dart
    // Info Color
    // Usually a shade of blue
    context.colorInfo

    // Success Color
    // Usually a shade of green
    context.colorSuccess

    // Warning Color
    // Usually a shade of orange
    context.colorWarning

    // Error Color
    // Usually a shade of red
    context.colorError
```

### Example

![Example Themes](/img/docs/workflow/ExampleThemes.png)

## Icon Size

Jolt prepares the following icon sizes, which are all available via the context.

```dart
    // Extra Large
    context.iconXl

    // Large
    context.iconXl

    // Medium
    context.iconMd

    // Small
    context.iconSm

    // Extra Small
    context.iconXs
```

## Spacing

Jolt prepares the following spacers, which are all available via the context.

```dart
    // Extra Large
    context.spaceXl

    // Large
    context.spaceXl

    // Medium
    context.spaceMd

    // Small
    context.spaceSm

    // Extra Small
    context.spaceXs
```

## Responsiveness

Jolt prepares the following breakpoints, which are all available via the context.

```dart
    // Device width is mobile size or less
    context.breakpointMobile

    // Device width is tablet size or less
    context.breakpointTablet

    // Device width is landscape tablet size or less
    context.breakpointTabletLandscape

    // Device width is desktop size or less
    context.breakpointDesktop

    // Device width is larger than desktop
    context.breakpointUltraWide
```
