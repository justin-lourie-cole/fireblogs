import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB8c8PpkYi8ZDhCs-7zIyDY1Nwd8PPQY7E",
  authDomain: "fireblogsjc.firebaseapp.com",
  projectId: "fireblogsjc",
  storageBucket: "fireblogsjc.appspot.com",
  messagingSenderId: "66580153004",
  appId: "1:66580153004:web:c14038fbb3a3df37d35509"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {timestamp}
export default firebaseApp.firestore()