var column = document.querySelectorAll(".row>.column");
for(var i=0; i<column.length; i++){
  column[i].onclick = function(e){
    document.getElementById("myModal").style.display = "block";
  }
}

document.getElementsByClassName("close")[0].onclick = function(){
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;

/*点击前一个/后一个函数*/
function plusSlides(n){
  showSlides(slideIndex += n);
}

/*点击图片*/
function currentSlides(n){
  showSlides(slideIndex = n);
}

/*控制图片随着参数的改变而改变*/
function showSlides(n){
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementsByClassName("caption");
  if(n > slides.length){
    slideIndex = 1;
  }
  if(n < 1){
    slideIndex = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    dots[i].className = dots[i].className.replace(" active","");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex -1].className += " active";
  captionText[0].innerHTML = dots[slideIndex -1].alt;
}
