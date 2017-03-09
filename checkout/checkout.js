console.log('sanity!!!!!');

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

// credit card validation
$('form.credit-card').on('submit', function(e){
  e.preventDefault();
  var $cardNum = $('#card-field-1').val().length + $('#card-field-2').val().length + $('#card-field-3').val().length + $('#card-field-4').val().length;
  if ($cardNum !== 16){
    $('.card-field').addClass('has-error')
  }else {
    $('.card-field').addClass('has-success')
  }
});
