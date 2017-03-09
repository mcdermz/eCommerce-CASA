console.log('sanity!!!!!');
// $('#feature-row').append(arrOfCol[0], arrOfCol[1], arrOfCol[2]);

function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}

var colOpenTag = `<div class="col-xs-4">`
var imgFeature = `<img class="image-feature" src="http://fillmurray.com/300/300" alt="Bill Murray Picture">`
var buttonShoppingCart = `<div><h6>ADD TO CART</h6></div>`
var addCartText= `<a href="#" class="btn addCartText" style="display:none">Add Cart Item</a>`



var featureCol = []
  for (var i = 0; i < products.length; i++) {
    featureCol.push(colOpenTag + imgFeature + addCartText + `<p> ${products[i].id}</p>` + `<p> ${products[i].ratings}</p>` + `<p> ${products[i].price}</p>` + `</div>`)

  }

  console.log("Hello?", $('#feature-row').append(featureCol[0], featureCol[1], featureCol[2]));


  // var featureWrapper = `<div class="wrapper-feature"><span class="text-feature">ADD TO CART</span>${imgFeature}</div>`

  $('.image-feature').hover(function(){
    $(this).addClass('image-feature')
    $(this).siblings('.addCartText').addClass('display', 'block')
    $(this).siblings('.addCartText').show();

    // '.addCartText').toggleClass('hidden')


  }, function(){
    $(this).removeClass('image-feature')
    $(this).siblings('.addCartText').hide();
    // $('.addCartText').attr('opacity', '1')
  })




  // $('.mouseenter').on('mouseenter', function () {
  //   console.log('!')
  //   $(this).toggleClass('orange')








// for (var i = 0; i < products.length; i++) {
//   arrOfCol.push(colOpen + br + picture + `<p>Id: ${products[i].id}</p>` + `<p>Size: ${products[i].size}</p>` + `<p>Description: ${products[i].description}</p>` + divClose)
// }


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
