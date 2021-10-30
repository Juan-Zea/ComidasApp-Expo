import app from "firebase/app";    
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD4i1twdkUNBD6Z5BJMKk5obCZhLzru8Ok",

  authDomain: "restaurant-c05fd.firebaseapp.com",

  projectId: "restaurant-c05fd",

  storageBucket: "restaurant-c05fd.appspot.com",

  messagingSenderId: "264790489389",

  appId: "1:264790489389:web:ee102694b08b062aabbba4",

  measurementId: "G-QXQWBRX5DS"

};

class Firebase {
  constructor() {
      if(!app.apps.length) {
          app.initializeApp(firebaseConfig);
      }

      this.db = app.firestore();
      this.auth = app.auth();
  }
}

const firebase = new Firebase();
export default firebase;