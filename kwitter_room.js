
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyB6-r8SQH_irkNMrg1O5MqxHPpMWyHeMCs",
      authDomain: "kwitterdatabase-ac674.firebaseapp.com",
      databaseURL: "https://kwitterdatabase-ac674-default-rtdb.firebaseio.com",
      projectId: "kwitterdatabase-ac674",
      storageBucket: "kwitterdatabase-ac674.appspot.com",
      messagingSenderId: "240228301860",
      appId: "1:240228301860:web:e70d8a6a15551317116cb1"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
