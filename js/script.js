/* create variables */
var icon = document.querySelector("#icon");
var element =  document.querySelector("#dropdown-content-mobile");
/*for footer menu*/
var footer_h6 = document.getElementsByClassName("footer-h6");
console.log(footer_h6);
/* create event listener for changes to form */
icon.addEventListener("click", function(){
  /*change icon */
  if(element.style.display =="none"){
    element.style.display = 'block';
    icon.innerHTML="&#x2613;";
   
  }else{
     element.style.display = 'none';
    icon.innerHTML="&#9776;";
   
  }
}, false);


var acc = document.getElementsByClassName("footer-h6");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display =="none"){
      panel.style.display = 'block';
    } else {
      panel.style.display = 'none';
    } 
  }
}

