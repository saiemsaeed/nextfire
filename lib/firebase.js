import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDK1bgt-oWMPo_OwCDexM_ijv1IUQx6j0E',
  authDomain: 'nextfireapp.firebaseapp.com',
  projectId: 'nextfireapp',
  storageBucket: 'nextfireapp.appspot.com',
  messagingSenderId: '564674947723',
  appId: '1:564674947723:web:68a44121708e597855c28e',
};

/* We need to check length of the apps, because nextjs tends to initialize the app twice.
 And if app is already initilized, it will throw error. That's why we are adding short circuit test. */
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
