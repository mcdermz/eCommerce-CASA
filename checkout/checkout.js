console.log('sanity!!!!!');

// on form submit
// if zip code length !== 5 || 9
// then log'error'

$('form').on('submit', function(e){
  e.preventDefault();

  if ($('#zipCode-ship').val().length !== 5 && $('#zipCode-ship').val().length !== 9){
    $('.zip-ship').addClass('has-error');
  }else if($('#zipCode-ship').val().length === 5 || $('#zipCode-ship').val().length === 9){
    $('.zip-ship').removeClass('has-error');
  }
});

// $('form').on('submit', function(e){
//   e.preventDefault();
//
//   if ($('#zipCode-bill').val().length !== 5 && $('#zipCode-bill').val().length !== 9){
//     $('.zip').addClass('has-error');
//   }else if($('#zipCode-bill').val().length === 5 || $('#zipCode-bill').val().length === 9){
//     $('.zip').removeClass('has-error');
//   }
// });
