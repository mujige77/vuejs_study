import firebase from 'firebase'
// Initialize Firebase
var config = {
  apiKey: "AIzaSyB2sM0XmlHVGIZRWhm0R-lugBRatnNs19o",
  authDomain: "pizza-planet-afd99.firebaseapp.com",
  databaseURL: "https://pizza-planet-afd99.firebaseio.com",
  projectId: "pizza-planet-afd99",
  storageBucket: "",
  messagingSenderId: "774098005012"
};
const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.database()
export const dbMenuRef = db.ref('menu')
