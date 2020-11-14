var tabNavs = document.querySelectorAll(".nav-tab");
var tabPanes = document.querySelectorAll(".tab-pane");
var first = document.querySelector(".first");
var second = document.querySelector(".second");
let tabContent = document.getElementById("tab-content");


$(document).ready(function(){
  $('.slider-block').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       arrows: true,
       autoplay: true,
       responsive: [
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
       ]
  });
  
});


$(document).ready(function(){
     $('.slider').slick({
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: false,
          responsive: [
               {
                   breakpoint: 992,
                   settings: {
                     slidesToShow: 3,
                     slidesToScroll: 1
                   }
                 },
               {
                   breakpoint: 768,
                   settings: {
                     slidesToShow: 2,
                     slidesToScroll: 1
                   }
                 }
          ]
     });
     
});



function clickFirstTab(){
  tabContent.style.background = 'url("/img/tabs/tabs-bg.png") center no-repeat';
  tabContent.style.backgroundSize="100% 100%";
}
function clickSecondTab (){
  tabContent.style.background = 'url("/img/tabs/tabs-bg2.png") center no-repeat';
  tabContent.style.backgroundSize="100% 100%";
}

first.addEventListener('click', clickFirstTab);
second.addEventListener('click', clickSecondTab);


for (var i = 0; i < tabNavs.length; i++) {

  tabNavs[i].addEventListener("click", function(e){
    e.preventDefault();
    var activeTabAttr = e.target.getAttribute("data-tab");

    for (var j = 0; j < tabNavs.length; j++) {
      var contentAttr = tabPanes[j].getAttribute("data-tab-content");

      if (activeTabAttr === contentAttr) {
        tabNavs[j].classList.add("active");
        tabPanes[j].classList.add("active"); 
      } else {
        tabNavs[j].classList.remove("active");
        tabPanes[j].classList.remove("active");
      }
    };
  });
}
$(document).ready(function(){$(".services-item").on("click",function(){$(".overlay").show()});$(".popup-close").on("click",function(){$(".overlay").hide()})});

$(document).ready(function(){$(".slider-item").on("click",function(){$(".slider-overlay").show()});$(".slider-close").on("click",function(){$(".slider-overlay").hide()})});

$(document).ready(function() {

$("form").submit(function() {
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "mail.php",
    data: th.serialize()
  }).done(function() {
    alert("Спасибо за заявку!");
    setTimeout(function() {
      th.trigger("reset");
    }, 1000);
  });
  return false;
});

});
