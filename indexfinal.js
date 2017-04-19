function appearStart(){
   document.getElementById("top3").innerHTML="STARTING WITH:";


}


function disappearStart(){
   document.getElementById("top3").innerHTML=' "YOUR WORLD" ';


}


$(document).ready(function(){

	$("#background1").fadeIn(3000);
  

});

/*

function appearRed(){

	 document.getElementsByClassName("btn1").value="IN";


}
function disappearRed(){

	 document.getElementsByClassName("btn1").value=" ";


}


*/


/*design a gallery */
var slideindex=1;
showGallery(slideindex);

function showproGallery(n){
  showGallery(slideindex=n);
  
}


function showGallery(n){
  var i;
  var big = document.getElementsByClassName("mySlides");
  var small= document.getElementsByClassName("demo");
  
  if (n > big.length){
    slideindex =1;
  }
  if (n< 1){ 
    slideindex= big.length;
    
  }
  
  for(i=0; i<big.length; i++){
    big[i].style.display="none";
  }
  
  for(i=0; i< small.length; i++){
    small[i].className= small[i].className.replace("opacityOff","");
  }
  
  big[slideindex-1].style.display = "block";
  small[slideindex-1].className += "opacityOff";
  
}
