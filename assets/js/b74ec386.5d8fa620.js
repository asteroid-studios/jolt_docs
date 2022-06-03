"use strict";(self.webpackChunkjolt=self.webpackChunkjolt||[]).push([[397],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||r;return n?a.createElement(m,l(l({ref:t},s),{},{components:n})):a.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9614:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=["components"],i={sidebar_position:3},u="Decide on your backend",p={unversionedId:"getting-started/selecting-your-backend",id:"getting-started/selecting-your-backend",title:"Decide on your backend",description:"The Jolt framework currently allow for the following backends:",source:"@site/docs/getting-started/selecting-your-backend.md",sourceDirName:"getting-started",slug:"/getting-started/selecting-your-backend",permalink:"/jolt_docs/getting-started/selecting-your-backend",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting Started with New Flutter Project",permalink:"/jolt_docs/getting-started/getting-started-with-new-flutter-project"},next:{title:"Debug Builds",permalink:"/jolt_docs/getting-started/debug-builds"}},s={},c=[{value:"Jolt Layout &amp; Routing Only",id:"jolt-layout--routing-only",level:3},{value:"Jolt Firebase Backend + Jolt Layout &amp; Routing",id:"jolt-firebase-backend--jolt-layout--routing",level:3},{value:"Jolt Laravel Backend + Jolt Layout &amp; Routing",id:"jolt-laravel-backend--jolt-layout--routing",level:3}],d={toc:c};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"decide-on-your-backend"},"Decide on your backend"),(0,r.kt)("p",null,"The Jolt framework currently allow for the following backends:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Jolt Layout & Routing Only"),(0,r.kt)("li",{parentName:"ul"},"Jolt Firebase + Jolt Layout & Routing Only"),(0,r.kt)("li",{parentName:"ul"},"Jolt Laravel + Jolt Layout & Routing Only")),(0,r.kt)("h3",{id:"jolt-layout--routing-only"},"Jolt Layout & Routing Only"),(0,r.kt)("p",null,"This is useful if you intend to code your own custom app backend, or don't require any backend functionality."),(0,r.kt)("p",null,"To start with just the Jolt Layout tools, include the following dependency in your project"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"jolt_layout:\n  hosted: https://enee.jfrog.io/artifactory/api/pub/jolt\n  # version: ^1.0.2 # uncomment to lock versions\n")),(0,r.kt)("p",null,"This will provide access to jolt layout framework functionality and also pull in the following chained jolt dependencies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"jolt_ui"),(0,r.kt)("li",{parentName:"ul"},"jolt")),(0,r.kt)("p",null,"Initialise Jolt in your app by replacing your lib/main.dart file contents with the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import 'package:universal_platform/universal_platform.dart';\nimport 'package:beamer/beamer.dart';\nimport 'app/app.dart';\nimport 'app/jolt/env.dart';\n\nFuture<void> main() async {\n  // ---------------------------------\n  // Remove the # in the url on web that normally comes with Flutter\n  // ---------------------------------\n  if (UniversalPlatform.isWeb) {\n    Beamer.setPathUrlStrategy();\n  }\n  // ---------------------------------\n  // Initialise your app\n  // ---------------------------------\n  await initialiseJolt(\n    app: app,\n    env: env,\n  );\n}\n")),(0,r.kt)("h3",{id:"jolt-firebase-backend--jolt-layout--routing"},"Jolt Firebase Backend + Jolt Layout & Routing"),(0,r.kt)("p",null,"This is useful if you intend to set up Firebase auth and database for dynamic app content."),(0,r.kt)("p",null,"This assumes you have already set up a firebase backend. To see instructions on how to do this, go to ",(0,r.kt)("a",{parentName:"p",href:"/backend/firebase/"},"Backend/Firebase")),(0,r.kt)("p",null,"To use a firebase backend, include the following dependency in your project"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"jolt_firebase_storage:\n  hosted: https://enee.jfrog.io/artifactory/api/pub/jolt\n  # version: ^1.0.2 # uncomment to lock versions\n")),(0,r.kt)("p",null,"This will provide access to firebase storage functionality and also pull in the following chained jolt dependencies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"jolt_firebase"),(0,r.kt)("li",{parentName:"ul"},"jolt_social_auth"),(0,r.kt)("li",{parentName:"ul"},"jolt_layout"),(0,r.kt)("li",{parentName:"ul"},"jolt_ui"),(0,r.kt)("li",{parentName:"ul"},"jolt")),(0,r.kt)("p",null,"It will also pull in pub.dev dependencies for the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"firebase_auth (for integration with Firebase user auth functionality)"),(0,r.kt)("li",{parentName:"ul"},"firebase_core (for connection to Firebase backend)"),(0,r.kt)("li",{parentName:"ul"},"firebase_storage (for Firebase cloud storage api access)"),(0,r.kt)("li",{parentName:"ul"},"firebase_messaging (for Firebase Cloud Messaging, a cross-platform push messaging solution that lets you reliably deliver messages)"),(0,r.kt)("li",{parentName:"ul"},"google_sign_in (for Google sign in)")),(0,r.kt)("p",null,"Initialise Jolt in your app by replacing your lib/main.dart file contents with the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import 'package:jolt_firebase/jolt_firebase.dart';\nimport 'package:universal_platform/universal_platform.dart';\nimport 'package:beamer/beamer.dart';\nimport 'app/app.dart';\nimport 'app/jolt/env.dart';\n\nFuture<void> main() async {\n  // ---------------------------------\n  // Remove the # in the url on web that normally comes with Flutter\n  // ---------------------------------\n  if (UniversalPlatform.isWeb) {\n    Beamer.setPathUrlStrategy();\n  }\n  // ---------------------------------\n  // Initialise your app\n  // ---------------------------------\n  await initialiseJoltWithFirebase(\n    app: app,\n    env: firebaseEnv,\n  );\n}\n")),(0,r.kt)("h3",{id:"jolt-laravel-backend--jolt-layout--routing"},"Jolt Laravel Backend + Jolt Layout & Routing"),(0,r.kt)("p",null,"This is useful if you already have a Laravel app with Laravel Passport (or similar) for user authentication and other REST API integration."),(0,r.kt)("p",null,"To use a laravel backend, include the following dependency in your project"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"jolt_laravel:\n  hosted: https://enee.jfrog.io/artifactory/api/pub/jolt\n  # version: ^1.0.2 # uncomment to lock versions\n")),(0,r.kt)("p",null,"This will provide access to firebase storage functionality and also pull in the following chained jolt dependencies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"jolt_layout"),(0,r.kt)("li",{parentName:"ul"},"jolt_ui"),(0,r.kt)("li",{parentName:"ul"},"jolt")),(0,r.kt)("p",null,"It will also pull in pub.dev dependencies for the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"hive (for local device storage)"),(0,r.kt)("li",{parentName:"ul"},"rest_client (for rest api calls)")),(0,r.kt)("p",null,"Initialise Jolt in your app by replacing your lib/main.dart file contents with the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import 'package:bitsdojo_window/bitsdojo_window.dart';\nimport 'package:jolt_laravel/jolt_laravel.dart';\nimport 'package:jolt_layout/flutter_jolt_layout.dart';\nimport 'package:jolt_layout/barrels/beamer.dart';\nimport 'package:universal_platform/universal_platform.dart';\nimport 'app/app.dart';\nimport 'app/jolt/env.dart';\n\nFuture<void> main() async {\n  // ---------------------------------\n  // Remove the # in the url on web that normally comes with Flutter\n  // ---------------------------------\n  if (UniversalPlatform.isWeb) {\n    Beamer.setPathUrlStrategy();\n  }\n  // ---------------------------------\n  // Initialise your app\n  // ---------------------------------\n  await initialiseJoltWithLaravel(\n    env: laravelEnv,\n    // debug: true,\n    app: app,\n  );\n\n  // ---------------------------------\n  // Set any window parameters for desktop here.\n  // ---------------------------------\n  if (UniversalPlatform.isDesktop) {\n    doWhenWindowReady(() {\n      final win = appWindow;\n      // win.minSize = const Size(400, 400);\n      // win.size = const Size(1200, 850);\n      // win.alignment = Alignment.center;\n      win.show();\n    });\n  }\n}\n\n")))}f.isMDXComponent=!0}}]);