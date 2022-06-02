---
sidebar_position: 3
---

# Decide on your backend

The Jolt framework currently allow for the following backends:

- Jolt Layout & Routing Only
- Jolt Firebase + Jolt Layout & Routing Only
- Jolt Laravel + Jolt Layout & Routing Only

### Jolt Layout & Routing Only

This is useful if you intend to code your own custom app backend, or don't require any backend functionality.

To start with just the Jolt Layout tools, include the following dependency in your project

```
jolt_layout:
  hosted: https://enee.jfrog.io/artifactory/api/pub/jolt
  # version: ^1.0.2 # uncomment to lock versions
```

This will provide access to jolt layout framework functionality and also pull in the following chained jolt dependencies

- jolt_ui
- jolt

Initialise Jolt in your app by replacing your lib/main.dart file contents with the following:

```
import 'package:universal_platform/universal_platform.dart';
import 'package:beamer/beamer.dart';
import 'app/app.dart';
import 'app/jolt/env.dart';

Future<void> main() async {
  // ---------------------------------
  // Remove the # in the url on web that normally comes with Flutter
  // ---------------------------------
  if (UniversalPlatform.isWeb) {
    Beamer.setPathUrlStrategy();
  }
  // ---------------------------------
  // Initialise your app
  // ---------------------------------
  await initialiseJolt(
    app: app,
    env: env,
  );
}
```

### Jolt Firebase Backend + Jolt Layout & Routing

This is useful if you intend to set up Firebase auth and database for dynamic app content.

This assumes you have already set up a firebase backend. To see instructions on how to do this, go to [Backend/Firebase](/backend/firebase/)

To use a firebase backend, include the following dependency in your project

```
jolt_firebase_storage:
  hosted: https://enee.jfrog.io/artifactory/api/pub/jolt
  # version: ^1.0.2 # uncomment to lock versions
```

This will provide access to firebase storage functionality and also pull in the following chained jolt dependencies

- jolt_firebase
- jolt_social_auth
- jolt_layout
- jolt_ui
- jolt

It will also pull in pub.dev dependencies for the following:

- firebase_auth (for integration with Firebase user auth functionality)
- firebase_core (for connection to Firebase backend)
- firebase_storage (for Firebase cloud storage api access)
- firebase_messaging (for Firebase Cloud Messaging, a cross-platform push messaging solution that lets you reliably deliver messages)
- google_sign_in (for Google sign in)


Initialise Jolt in your app by replacing your lib/main.dart file contents with the following:

```
import 'package:jolt_firebase/jolt_firebase.dart';
import 'package:universal_platform/universal_platform.dart';
import 'package:beamer/beamer.dart';
import 'app/app.dart';
import 'app/jolt/env.dart';

Future<void> main() async {
  // ---------------------------------
  // Remove the # in the url on web that normally comes with Flutter
  // ---------------------------------
  if (UniversalPlatform.isWeb) {
    Beamer.setPathUrlStrategy();
  }
  // ---------------------------------
  // Initialise your app
  // ---------------------------------
  await initialiseJoltWithFirebase(
    app: app,
    env: firebaseEnv,
  );
}
```

### Jolt Laravel Backend + Jolt Layout & Routing

This is useful if you already have a Laravel app with Laravel Passport (or similar) for user authentication and other REST API integration.

To use a laravel backend, include the following dependency in your project

```
jolt_laravel:
  hosted: https://enee.jfrog.io/artifactory/api/pub/jolt
  # version: ^1.0.2 # uncomment to lock versions
```

This will provide access to firebase storage functionality and also pull in the following chained jolt dependencies

- jolt_layout
- jolt_ui
- jolt

It will also pull in pub.dev dependencies for the following:

- hive (for local device storage)
- rest_client (for rest api calls)

Initialise Jolt in your app by replacing your lib/main.dart file contents with the following:

```
import 'package:bitsdojo_window/bitsdojo_window.dart';
import 'package:jolt_laravel/jolt_laravel.dart';
import 'package:jolt_layout/flutter_jolt_layout.dart';
import 'package:jolt_layout/barrels/beamer.dart';
import 'package:universal_platform/universal_platform.dart';
import 'app/app.dart';
import 'app/jolt/env.dart';

Future<void> main() async {
  // ---------------------------------
  // Remove the # in the url on web that normally comes with Flutter
  // ---------------------------------
  if (UniversalPlatform.isWeb) {
    Beamer.setPathUrlStrategy();
  }
  // ---------------------------------
  // Initialise your app
  // ---------------------------------
  await initialiseJoltWithLaravel(
    env: laravelEnv,
    // debug: true,
    app: app,
  );

  // ---------------------------------
  // Set any window parameters for desktop here.
  // ---------------------------------
  if (UniversalPlatform.isDesktop) {
    doWhenWindowReady(() {
      final win = appWindow;
      // win.minSize = const Size(400, 400);
      // win.size = const Size(1200, 850);
      // win.alignment = Alignment.center;
      win.show();
    });
  }
}

```