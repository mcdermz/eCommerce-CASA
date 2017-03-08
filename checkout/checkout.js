console.log('sanity!!!!!');

// on form submit
// if zip code length !== 5 || 9
// then log'error'

$('form.shipping').on('submit', function(e){
  e.preventDefault();

  if ($('#zipCode-ship').val().length !== 5 && $('#zipCode-ship').val().length !== 9){
    $('.zip-ship').addClass('has-error');
  }else if($('#zipCode-ship').val().length === 5 || $('#zipCode-ship').val().length === 9){
    $('.zip-ship').removeClass('has-error');
  }
});

$('form.billing').on('submit', function(e){
  e.preventDefault();

  if ($('#zipCode-bill').val().length !== 5 && $('#zipCode-bill').val().length !== 9){
    $('.zip-bill').addClass('has-error');
  }else if($('#zipCode-bill').val().length === 5 || $('#zipCode-bill').val().length === 9){
    $('.zip-bill').removeClass('has-error');
  }
});
