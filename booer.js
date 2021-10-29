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

room_name = localStorage.getItem("room_name")

user_name = localStorage.getItem("user_name");

msg = document.getElementById("A_SUS").value;

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html"
}

function send() {
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    })
}
//Done :)