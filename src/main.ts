import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [FIREBASE_PROVIDERS, defaultFirebase({
  apiKey: "AIzaSyAW7rQWj5rgWHW1XrNiVgNyHQ3E1hHwW-8",
  authDomain: "xap5xap-1d8a9.firebaseapp.com",
  databaseURL: "https://xap5xap-1d8a9.firebaseio.com",
  storageBucket: "xap5xap-1d8a9.appspot.com"
})]);
