
var number;
var name;
var password;
var date;
var eye;
var a;
var drive = {
    firstName: "",    
    lastName: "", 
    age: 0,
    date: "",
    eyeColor: "", 
    
    
    calcAge: function(a) {
        if(a<15){
        alert("You are too young to drive!"); 
        }    
    else if(a>15){
        alert( "You are old enough to drive!");
        }
    else {
         //alert("Gets eaten by Shark.");
        } 

    } 

    
    
    
};
document.getElementById('btn').addEventListener('click', function() {
  var formInput = document.getElementById("numberForm");
  var names=formInput.names.value; 
    number = document.querySelector(".ipt1").value;
    name = document.querySelector(".ipt2").value;
    password = document.querySelector(".ipt3").value;
    date = document.getElementById("numberForm").date1.value;
    eye = document.getElementById("numberForm").eyes.value;
    ageCheck();    
   // alert("name");
      document.getElementById("dateTarget1").innerHTML = number;
      document.getElementById("dateTarget2").innerHTML = name;
      document.getElementById("dateTarget3").innerHTML = password;
      document.getElementById("dateTarget4").innerHTML = date;
      document.getElementById("dateTarget5").innerHTML = eye;
  drive.firstName = "Your Name:";
  console.log(drive.firstName);
drive.firstName = name;
drive.lastName= name;
drive.age= parseInt(number);
drive.date=date;
drive.eyeColor=eye;
drive.calcAge(drive.age);
console.log("age is " + drive.age);
});
  
console.log(drive.calcAge());

   
 
 function dateFunction1() {
  var x = document.querySelector(".ipt1").value;
  console.log(x);
  document.getElementById("dateTarget1").innerHTML = x;

}

function ageCheck(){
    console.log(number); 
    console.log(name);          
    console.log(password);
    console.log(date);  
    console.log(eye);
    }
    
 
    

 