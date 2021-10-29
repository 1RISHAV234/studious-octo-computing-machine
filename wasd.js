const firebaseConfig = {

    apiKey: "AIzaSyB7Kvr313nKLMX37JLgsOH-AmLwR69Pwg4",
  
    authDomain: "kwitter-app-38af2.firebaseapp.com",
  
    databaseURL: "https://kwitter-app-38af2-default-rtdb.firebaseio.com",
  
    projectId: "kwitter-app-38af2",
  
    storageBucket: "kwitter-app-38af2.appspot.com",
  
    messagingSenderId: "755699659272",
  
    appId: "1:755699659272:web:914f1d43e6da66c95057bd",
  
    measurementId: "G-VX2Z12H00N"
  
  };
  
  firebase.initializeApp(firebaseConfig);  
var user_name = localStorage.getItem("user_name");

function start() {
    document.getElementById("qwerty").innerHTML = "Welcome " + user_name + " :)"
}

function logout() {
    localStorage.removeItem("user_name");
    window.location = "index.html"
}
function addroom() {
    room_name = document.getElementById("input2").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "Adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
}
function getData() {
    firebase.database().ref("/").on('value',
        function (snapshot) {
            document.getElementById("outputxd").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                row = "<div class='room_names' id="+Room_names+"onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
                document.getElementById("outputxd").innerHTML+=row;
            });
        });
}
getData();