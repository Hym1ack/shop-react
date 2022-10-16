import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBy6wi6jR8k2CjEsgnzjeuZK2JoXjEQXek",
  authDomain: "shopreact-14a92.firebaseapp.com",
  projectId: "shopreact-14a92",
  storageBucket: "shopreact-14a92.appspot.com",
  messagingSenderId: "169304901223",
  appId: "1:169304901223:web:2120132dd078fa80c276c2",
};
const app = initializeApp(firebaseConfig);
const firestoreDatabase = getFirestore(app);
const auth = getAuth(app);

export { auth, firestoreDatabase };
