# Emulating firebase locally

You are able to set up a local firebase emulation suite using the guides and documentation here: https://firebase.google.com/docs/emulator-suite

To set up your Jolt project to connect to your local instance of firebase, add the following code into the events.dart file

```
...

import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:cloud_functions/cloud_functions.dart';
import 'package:firebase_storage/firebase_storage.dart';1

...

JoltEvents(
    beforeRunApp: () async {
        if (kDebugMode) {
        await FirebaseAuth.instance.useAuthEmulator('localhost', 9099);
        await FirebaseStorage.instance.useStorageEmulator('localhost', 9199);
        FirebaseFirestore.instance.useFirestoreEmulator('localhost', 8080);
        FirebaseFunctions.instanceFor(region: 'us-central1')
            .useFunctionsEmulator('localhost', 5001);
        }
    }
    ...
)