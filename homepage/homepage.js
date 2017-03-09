console.log('sanity!!!!!');

function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}

// var myInterval = setInterval(function(){
//
//   // console.log(new Date());
//
// }, 1000);
//
//
// $('#slider .slides').animate({'margin-left': -720}, 1000);

$(function(){
  var $slider = $('#slider .slides');
  var currentSlide = 1;

  // var width = 720;
  var animateSpeed = 1000;
  var pause = 3000;

  setInterval(function(){
    $slider.animate({'margin-left': '-=1440'}, animateSpeed, function(){
      currentSlide++;
      if(currentSlide === $('.slide').length){
        currentSlide = 1;
        $slider.css('margin-left', 0);
      }
    });
  }, pause);


  //listen for mouseenter and pause
  //resume on mouseleave


});
