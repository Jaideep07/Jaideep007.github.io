
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




    var slider = document.querySelector(".items");
		var slides = document.querySelectorAll(".item");
		var button = document.querySelectorAll(".button");

		var current = 0;
		var prev = 2;
		var next = 1;

		for (var i = 0; i < button.length; i++) {
			button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
		}

		var gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

		var gotoNext = () => current < 2 ? gotoNum(current + 1) : gotoNum(0);

		var gotoNum = number => {
			current = number;
			prev = current - 1;
			next = current + 1;

			for (var i = 0; i < slides.length; i++) {
				slides[i].classList.remove("active");
				slides[i].classList.remove("prev");
				slides[i].classList.remove("next");
			}

			if (next == 3) {
				next = 0;
			}

			if (prev == -1) {
				prev = 2;
			}

			slides[current].classList.add("active");
			slides[prev].classList.add("prev");
			slides[next].classList.add("next");
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

  //end of auto update

  //review stars

  function review1(w){
    for(var i=1;i<=w;i++){
      var num=i;
      num=num.toString();
          document.getElementsByName("star"+num)[0].classList.remove("unchecked");
          document.getElementsByName("star"+num)[0].classList.add("checked");
    }
  }

  function review2(w){
    for(var i=5;i>w;i--){
      var num=i;
      num=num.toString();
          document.getElementsByName("star"+num)[0].classList.remove("checked");
          document.getElementsByName("star"+num)[0].classList.add("unchecked");
    }
  }

  function compli(w){
    switch(w){
      case 1:
        document.getElementById("compliments").innerHTML = "&#128532 Will Try To Improve!";
        break;
      case 2:
        document.getElementById("compliments").innerHTML = "&#128524 Will Try To Improve!"; 
        break; 
      case 3:
        document.getElementById("compliments").innerHTML = "&#128522 Thank You!"; 
        break; 
      case 4:
        document.getElementById("compliments").innerHTML = "&#128516 Thank You So Much!"; 
        break; 
      case 5:
        document.getElementById("compliments").innerHTML = "&#128525 Glad You Liked It!"; 
        break;              
    }
  }



// Create a "close" button and append it to each list item
var myNodelist = document.getElementById("myUL").children;
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close2";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close2");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('#myUL');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {

  var att = document.createAttribute("name");
  att.value = "LI";
  var li = document.createElement("li");
  li.setAttributeNode(att);
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close2";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}



