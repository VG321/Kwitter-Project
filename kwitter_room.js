
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

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome - " + user_name + "!";
    
    function addroom(){
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose: "adding room name"
          });

          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;

      //End code
      });
});
}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
