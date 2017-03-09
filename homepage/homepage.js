console.log('sanity!!!!!');
// $('#feature-row').append(arrOfCol[0], arrOfCol[1], arrOfCol[2]);

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
