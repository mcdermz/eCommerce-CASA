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

  if ($( "input[type='checkbox']" ).is(':checked')){
    $('#firstName-bill').val($('#firstName-ship').val());
    $('#lastName-bill').val($('#lastName-ship').val());
    $('#company-bill').val($('#company-ship').val());
    $('#addressLine1-bill').val($('#addressLine1-ship').val());
    $('#addressLine2-bill').val($('#addressLine2-ship').val());
    $('#city-bill').val($('#city-ship').val());
    $('#state-bill').val($('#state-ship').val());
    $('#zipCode-bill').val($('#zipCode-ship').val());
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
