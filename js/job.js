//auto slider Section
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(slideIndex) {
  showSlides(slideIndex); 
}

//Current Slide controls
function currentSlide(slideIndex) {
  showSlides(slideIndex);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  if (slideIndex < 1) { slideIndex = slides.length }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 6000); //change slide every 6 seconds
}

//Slick Slide Section
$(document).ready(function () {
    $('.multiple-items').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1
    });
});

//Navbar Scrolling Effect
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
            $(".navbar_Section").css("background", "white");
            $(".navbar_Section").css("top", "0");
            $(".navbar_Section").css("box-shadow","0 10px 11px rgba(0,0,0,0.4)");
            $(".navbar_Section a").css("color","black");
            $(".section3 .fa").css("color","black");
            $(".section2 .logo").css("display","none");
            $(".section2 .logo1").css("display","flex");
        }
        else {
            $(".navbar_Section").css("background", "transparent");
            $(".navbar_Section").css("top", "30px");
            $(".navbar_Section").css("box-shadow","0 0px 0px rgba(0,0,0,0.4)");
            $(".navbar_Section a").css("color","white");
            $(".section3 .fa").css("color","white");
            $(".section2 .logo").css("display","flex");
            $(".section2 .logo1").css("display","none");
        }

        if($(this).scrollTop() > 200){
            $('.top').fadeIn();
        }
        else{
            $('.top').fadeOut();
        }
    });
    $('.top').fadeOut();
    $('.top').click(function(){
        $('html,body').animate({scrollTop:0},5000);
    })

    $('.top').bind('click' , function(){
        $('html,body').animate({scrollTop:0},1000);
        return false;
    });
});

// navbar Section
let bar = document.querySelector('.bar');
let mark = document.querySelector('.mark');
let navlist = document.querySelector('.nav-list');
function menubtn() {
  bar.style.display = "none";
  mark.style.display = "flex";
  navlist.style.transform = "translateX(0vw)";
}

function hidebtn() {
    bar.style.display = "flex";
    mark.style.display = "none";
    navlist.style.transform = "translateX(-100vw)";
}