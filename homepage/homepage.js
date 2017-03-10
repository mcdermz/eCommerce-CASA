console.log('sanity!!!!!');


function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}

var imgFeature = `<img class="image-feature"; src="http://fillmurray.com/300/300" alt="Bill Murray Picture">`;
var buttonShoppingCart = `<div><h6>ADD TO CART</h6></div>`;
var addCartText= `<a href="#" class="btn addCartText" style="display:none">Add Cart Item</a>`;



var featureCol = []
  for (var i = 0; i < products.length; i++) {
    var colOpenTag = `<div data-identification="${products[i].id}" data-size="${products[i].size}" class="col-md-4 col-sm-6 col-xs-8">`;
    featureCol.push(colOpenTag + imgFeature + addCartText + `<p> ${products[i].id}</p>` + `<p> ${products[i].ratings}</p>` + `<p> ${products[i].price}</p>` + `</div>`);
  }

 $('#feature-row').append(featureCol[0], featureCol[1], featureCol[2])

  $('.image-feature').hover(function(){
    $(this).addClass('image-feature');
    $(this).siblings('.addCartText').addClass('display', 'block');
    $(this).siblings('.addCartText').show();

  }, function(){
    $(this).removeClass('image-feature');
    $(this).siblings('.addCartText').hide();
  })

// carousel
$(function(){
  var $slider = $('#slider .slides');
  var currentSlide = 1;
  var animateSpeed = 1000;
  var pause = 6000;
  function caroselMove(next){
    if (next){
      $slider.animate({'margin-left': '-=1440'}, animateSpeed, function(){
        currentSlide++;
        if(currentSlide === $('.slide').length){
          currentSlide = 1;
          $slider.css('margin-left', 0);
        }
      })
    } else {
      $slider.animate({'margin-right': '+=1440'}, animateSpeed, function(){
        currentSlide--;
        if(currentSlide === 0){
          currentSlide = $('.slide').length;
          $slider.css('margin-right', 0);
        }
      })
    }
  }

  setInterval(function(){
    caroselMove(next)
  }, pause);

  $('aside a').on('click', function(){
    if ($(this).attr('id') === 'next'){
      let next = true;
      caroselMove(next);
    }
    if ($(this).attr('id') === 'prev'){
      let next = false;
      caroselMove(next);
    }
  });
  // arrow keys
});
