"use strict";(self.webpackChunkjolt=self.webpackChunkjolt||[]).push([[9936],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||a;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7696:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],i={},c="Emulating firebase locally",u={unversionedId:"workflow/local-firebase",id:"workflow/local-firebase",title:"Emulating firebase locally",description:"You are able to set up a local firebase emulation suite using the guides and documentation here//firebase.google.com/docs/emulator-suite",source:"@site/docs/workflow/local-firebase.md",sourceDirName:"workflow",slug:"/workflow/local-firebase",permalink:"/jolt_docs/workflow/local-firebase",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/jolt_docs/workflow/deployment"},next:{title:"Jolt",permalink:"/jolt_docs/jolt/"}},s={},f=[],p={toc:f};function m(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"emulating-firebase-locally"},"Emulating firebase locally"),(0,a.kt)("p",null,"You are able to set up a local firebase emulation suite using the guides and documentation here: ",(0,a.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/emulator-suite"},"https://firebase.google.com/docs/emulator-suite")),(0,a.kt)("p",null,"To set up your Jolt project to connect to your local instance of firebase, add the following code into the events.dart file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"...\n\nimport 'package:firebase_auth/firebase_auth.dart';\nimport 'package:cloud_firestore/cloud_firestore.dart';\nimport 'package:cloud_functions/cloud_functions.dart';\nimport 'package:firebase_storage/firebase_storage.dart';1\n\n...\n\nJoltEvents(\n    beforeRunApp: () async {\n        if (kDebugMode) {\n        await FirebaseAuth.instance.useAuthEmulator('localhost', 9099);\n        await FirebaseStorage.instance.useStorageEmulator('localhost', 9199);\n        FirebaseFirestore.instance.useFirestoreEmulator('localhost', 8080);\n        FirebaseFunctions.instanceFor(region: 'us-central1')\n            .useFunctionsEmulator('localhost', 5001);\n        }\n    }\n    ...\n)\n")))}m.isMDXComponent=!0}}]);