// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  REST_API_SERVER: 'https://raccapaolo-crudserver.herokuapp.com/api/',
  firebaseConfig: {
    apiKey: 'AIzaSyAbAmTPwrP_BVvHy6nirr68aooUbwKJylQ',
    authDomain: 'my-recipes-310821.firebaseapp.com',
    projectId: 'my-recipes-310821',
    storageBucket: 'my-recipes-310821.appspot.com',
    messagingSenderId: '938111640035',
    appId: '1:938111640035:web:af9c4716d37657853880d6',
    measurementId: 'G-JEHL28FQ7M',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
