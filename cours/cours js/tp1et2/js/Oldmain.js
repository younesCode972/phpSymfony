/*var a=1 ;
var b=3 ;
var result=a+b;
console.log(typeof(result),result);
*/
/*
var fruits=["banane","pomme","fraise","citron","orange"];
var display=function(arr){
   var str="<ul>";
     for (var i = 0; i< arr.length; i++) {
       str+="<li>" +arr[i]+ "</li>";
     }
     str+="</ul>";
     document.body.innerHTML=str;
     console.log(str);
   }
   display(fruits);
   */
   var users ={
     "user1":{"firstname":"gleann","surname":"le gac", "age":30,"role":"formateur"},
     "user2":{ "name":"John", "surname":"eric","age":31, "role":"eleve" }
   };
 alert(users.user1.firstname);
/*
 var s = '{"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}';

var obj = JSON.parse(s);

document.getElementById("user").innerHTML ="Name: " + obj.first_name + " " + obj.last_name + "<br>" + "Location: " + obj.location;
*/
var obj1=JSON.parse(users.user1);
document.getElementById("user").innerHTML ="Name: " + obj1.firstname + " " + obj.surname + "<br>" + "age: " + obj.age+ "<br>" + "role: " + obj.role;
