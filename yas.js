

function myFunction() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("numb").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  if (isNaN(x) || x < -99 || x > 100 ) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("demo").innerHTML = text;
}

function myMove() {
  let id = null;
  const elem = document.getElementById("animation");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}

function mOver(obj) {
  obj.innerHTML = "Thank You"
}

function mOut(obj) {
  obj.innerHTML = "Mouse Over Me"
}
document.getElementById("myBtn").addEventListener("click", displayDate);
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
function newdoc(){
        window.location.assign("https://www.w3schools.com")

  }
  function goback(){
    window.history.back()
  }

  function goForward() {
  window.history.forward()
}
function ifunction(){
  var txt;
  if(confirm("presss the button")){
    txt=" this  is ok";
  }
  else{
    text="this is cansel!";
  }
  document.getElementById("hello").innerHTML=txt;
}
function j(){
     alert="hello"
}
function getlocation(){
  try{
    navigator.geolocation.getCurrentPosition(showPosition);

  }
  catch(err){
    x.innerHTML=err;
  }
}
function showPosition(){
   x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}
function validity(){
  const inpobj=document.getElementById("id1");
  if(!inpobj.chekvalidity()){
    document.getElementById("dem").innerHTML=inpobj.validationMessage;
  }
  else {
    document.getElementById("dem").innerHTML= "input ok!";
  }
}
function mylocation(){
  const xhttp= new XMLHttpRequest();
  xhttp.onload=function(){
    document.getElementById("i").innerHTML=this.responceText;
  }
      xhttp.open("GET", "ajax_info.txt");
      xhttp.send ("heloo  word ")
    

      