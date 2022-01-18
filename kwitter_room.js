
var firebaseConfig = {
      apiKey: "AIzaSyCDKdXPd11jru_Qp5corDcw2p3d_cv_Bgc",
      authDomain: "kwitter-e19d6.firebaseapp.com",
      databaseURL: "https://kwitter-e19d6-default-rtdb.firebaseio.com",
      projectId: "kwitter-e19d6",
      storageBucket: "kwitter-e19d6.appspot.com",
      messagingSenderId: "710929140176",
      appId: "1:710929140176:web:271e6e1aa079504dde51d5"
    };
    firebase. initializeApp(firebaseConfig);

    function getData() {firebase.database().ref("/"+room_name).on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     firebase_message_id = childKey;
     message_data = childData;

     console.log(firebase_message_id);
     console.log(message_data);
     name = message_data['name'];
     message =message_data['message'];
     like = message_data['Like'];
     name_with_tag = "<h4>"+ name +"<img class='user_trick' src='tick.png'></h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+ Like+" onclick=updateLike(this.id)'>";
     span_with_tag = "span class='glyphicon glyphicon-thumbs-up'>Like: "+ Like+"</span></button><hr>";
     
     
     row_with_tag + message_with_tag +Like_button + span_with_tag;
     document.getElementById("output").innerHTML +=row;

     
     });});}
getData();

function addRoom()
{
 room_name = document.getElementById("room_name").Value;

 firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
 });

 localStorage.setItem("room_name", room_name);

 window.location = "kwitter_page.html";

}

function redirectToRoomName (name)
{

      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function redirecToRoom(name)
{
      console.log(name);
      localstorage.removeItem("user_name", name);
      window.location = "kwitter_page.html";


}

function  logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}

function send ()
{
      msg = document.getElementById("msg").Value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").Value = "";
}

function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  update_likes = Number(likes) + 1;
  console.log(update_likes);

  firebase.database().ref(room_name).child(message_id).update({
  });
  

}
