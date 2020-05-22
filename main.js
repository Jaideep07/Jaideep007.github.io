var bars=document.getElementsByClassName("mobile-nav-toggle")[0];
bars.onclick = function(){
  var y=document.getElementById("header").getAttribute("name");
    if(y=="intial"){
      head = document.getElementById("header");
      var attri=document.createAttribute("style");
      attri.value = "left:0px;";
      head.setAttributeNode(attri);
      document.getElementById("header").setAttribute("name","after");
    }
    if(y=="after"){
      head = document.getElementById("header");
      var attri=document.createAttribute("style");
      attri.value = "left:-300px;";
      head.setAttributeNode(attri);
      document.getElementById("header").setAttribute("name","intial"); 
    }
};

//review box script

var modal = document.getElementById("mymodal");
var trigger = document.getElementById("btn");
var closeButton = document.getElementsByClassName("close-button")[0];

trigger.onclick = function() {
    modal.style.display = "block";
}

closeButton.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//end of rewiew box script

//smooth scrolling and options highlighting

  var section = document.querySelectorAll(".scroll");
  var sections = {};
  var i = 0;

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector('.active').setAttribute('class', ' ');
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
      }
    }
  };

//end of smooth scrolling  

//start of skills script


  function count(A,B){
    var x=document.getElementById("skill");
    var p=document.getElementById(A);
    var z=p.textContent;


    var i;
    if(elementInViewport2(x) && z==0){
      for(i=0;i<B;i++){
        setTimeout(function() {z++;
          p.textContent=z+"%";
        },(B/2)*i);
      }
    }
    if(!elementInViewport2(x)){
      p.textContent=0;
      z=0;
    }
  }

function progress_bar(Z){ 
  var ele = document.getElementsByName(Z);
  var attri2=document.createAttribute("class");
  var attri1 = document.createAttribute("id");
  if(elementInViewport2(document.getElementById("skill"))){
    attri1.value = "mybar";
    attri2.value = "progress-bar progress-bar-striped progress-bar-animated";
    ele[0].setAttributeNode(attri2);
    ele[0].setAttributeNode(attri1);
  }
  else{
    attri1.value = "";
    attri2.value = "";
    ele[0].setAttributeNode(attri2);
    ele[0].setAttributeNode(attri1);
  } 
}

//end of skills script

  function elementInViewport2(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
  }