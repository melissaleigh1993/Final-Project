//Image Slider

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//Quiz

function start() {
    document.getElementById("questionOne").classList.remove("display-none");
    document.getElementById("start").classList.add("display-none");
}

function to_question2() {
    document.getElementById("questionTwo").classList.remove("display-none");
    document.getElementById("questionOne").classList.add("display-none");
}

function to_question3() {
    document.getElementById("questionThree").classList.remove("display-none");
    document.getElementById("questionTwo").classList.add("display-none");
}

function to_question4() {
    document.getElementById("questionThree").classList.add("display-none");
    document.getElementById("questionFour").classList.remove("display-none");
}

function to_question5() {
    document.getElementById("questionFour").classList.add("display-none");
    document.getElementById("questionFive").classList.remove("display-none");
    document.getElementById("submit").classList.remove("display-none")
}

function check() {
document.getElementById("questionFive").classList.add("display-none");

var question1 = document.getElementById("question1").value; 
var question2 = document.getElementById("question2").value;
var answer2 = document.getElementById("answer2");
var quest4_ans1 = document.getElementById("quest4_ans1");
var quest4_ans2 = document.getElementById("quest4_ans2");
var quest4_ans3 = document.getElementById("quest4_ans3");
var question5 = document.getElementById("question5").value;

var points = 0; 
var points = parseFloat(points)


question1 = question1.toLowerCase()

if (question1 == "Gene Simmons") {
    points = points + 1} else if (question1 == "gene simmons") {
    points = points + 1} else if (question1 == "chaim witz") {
    points = points + 1}
else if (question1 == "Chaim Witz") {
    points = points + 1}
    
if (question2 == 21) {
    points = points + 1}

if (answer2.checked) {
    points = points + 1
}
    
if (quest4_ans2.checked) {
    points = points + (1/2)
}
    
if (quest4_ans3.checked) {
    points = points + (1/2)
}
    
if (question5 == "Carmelit") {
    points = points + 1} else if (question1 == "carmelit") {
    points = points + 1} else if (question1 == "subway") {
    points = points + 1}
else if (question1 == "underground railway") {
    points = points + 1}

document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("number_correct").innerHTML = ("You got " + points + " question(s) right"); 


if (points == 0) {
    document.getElementById("message").innerHTML = "Do you even know where Haifa is?"
}
if (points > 0 && points <= 1) {
    document.getElementById("message").innerHTML = "Lucky Guess! Learn more!"
}
if (points > 1 && points < 2) {
    document.getElementById("message").innerHTML = "You don't know much about Haifa, do you?"
}
if (points >= 2 && points < 3) {
    document.getElementById("message").innerHTML = "You know a little about Haifa!"
}
if (points >= 3 && points < 4) {
    document.getElementById("message").innerHTML = "Hey, you know quite a bit about Haifa!"
}
if (points >=4 && points <= 5) {
    document.getElementById("message").innerHTML = "!וואו איזה חיפאי/ת"
}
}
