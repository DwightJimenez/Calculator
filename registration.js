 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
 import{getDatabase, set, ref}from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyB6z61FtXQjNZGOBuyM9UTrdK4uPzzGaVU",
   authDomain: "securitydatabase-a48c2.firebaseapp.com",
   databaseURL: "https://securitydatabase-a48c2-default-rtdb.asia-southeast1.firebasedatabase.app",
   projectId: "securitydatabase-a48c2",
   storageBucket: "securitydatabase-a48c2.appspot.com",
   messagingSenderId: "699007169688",
   appId: "1:699007169688:web:06a587a33a2aeff7d24ced",
   measurementId: "G-7FVJXMJYT2"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getDatabase();
 const auth = getAuth();

 let EmailInp = document.getElementById('username');
 let PasswordInp = document.getElementById('password');
 let Form = document.getElementById('registrationForm');

 let RegisterUser = evt => {
     evt.preventDefault();
     createUserWithEmailAndPassword(auth, EmailInp.value, PasswordInp.value)
     .then((credentials)=>{
         console.log(credentials);
     })
     .catch((error)=>{
         alert(error.message);
         console.log(error.code);
         console.log(error.message);
     })
 }
 Form.addEventListener('submit', RegisterUser);

