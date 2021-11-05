//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAgS37mtY1m3qHBueaG8-0jTBA_tOg4bBk",
      authDomain: "kwitter---practice-proje-2e725.firebaseapp.com",
      databaseURL: "https://kwitter---practice-proje-2e725-default-rtdb.firebaseio.com",
      projectId: "kwitter---practice-proje-2e725",
      storageBucket: "kwitter---practice-proje-2e725.appspot.com",
      messagingSenderId: "19939375073",
      appId: "1:19939375073:web:411e970fa750cd406484a0"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function send(){
        msg=document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name, 
              message:msg, 
              like:0
        });
        document.getElementById("msg").value="";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
