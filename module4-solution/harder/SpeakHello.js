

(function (window){
	var objHello={};
var speakWord = "Hello";

objHello.speak= function (name) {
  console.log(speakWord + " " + name);
  
}
window.objHello=objHello;
})(window);




