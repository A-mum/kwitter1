var firebaseConfig = {
    apiKey: "AIzaSyBJutbFeBL_ZmDL7dMxotnSrALhmEGgG8c",
    authDomain: "project-93-a7aab.firebaseapp.com",
    databaseURL: "https://project-93-a7aab-default-rtdb.firebaseio.com",
    projectId: "project-93-a7aab",
    storageBucket: "project-93-a7aab.appspot.com",
    messagingSenderId: "167963486035",
    appId: "1:167963486035:web:ed5d4b6c95182bdfc663a6"
  };
firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();