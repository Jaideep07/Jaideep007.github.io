function reset1(){
  if(window.matchMedia("(min-width: 1199px)").matches){
    head = document.getElementById("header");
    var attri=document.createAttribute("style");
    attri.value = "left:0px;";
    head.setAttributeNode(attri);
    document.getElementById("header").setAttribute("name","after");
  }
}

function bars(){
  if( document.getElementById("header").getAttribute("name")=='initial'){
    head = document.getElementById("header");
    var attri=document.createAttribute("style");
    attri.value = "left:0px;";
    head.setAttributeNode(attri);
    document.getElementById("header").setAttribute("name","after");
  }

  else if( document.getElementById("header").getAttribute("name")=='after'){
    head = document.getElementById("header");
    var attri=document.createAttribute("style");
    attri.value = "left:-300px;";
    head.setAttributeNode(attri);
    document.getElementById("header").setAttribute("name","initial");
  }
}




// typewriter effect Start
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};
// typwriter effect end

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
        },i*5000/B);
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

  //auto updating age and year of copyright
  
  document.getElementById("autodate").innerHTML = new Date().getFullYear();

  var age = new Date().getFullYear() - 2001;
  var mon = new Date().getMonth() - 7 + 1;
  if (mon < 0) {
      --age;
  }
  else if (mon === 0) {
      var day = new Date().getDate() - 7;
      if (day < 0) --age; 
  }
  document.getElementById("autoage").innerHTML = age;
