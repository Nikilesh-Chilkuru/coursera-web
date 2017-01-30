

(function (window){
 
 var objBye={};
var speakWord = "Good Bye";

objBye.speak= function (name) {
  console.log(speakWord + " " + name);
  
}
window.objBye = objBye;
} )(window);


