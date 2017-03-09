console.log('sanity!!!!!');

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

// credit card validation
$('form.credit-card').on('submit', function(e){
  e.preventDefault();
  var $cvv = $('#cvv').val().length;
  if ($cvv !== 3) {
    $('.cvv-field').addClass('has-error');
  }else {
    $('.credit-card').addClass('has-success');
  }
});

$('.card-inputs').keyup(function () {
  if ($(this).val().length === 4) {
    $(this).next().focus();
  }
  var $cardNum = $('#card-field-1').val().length + $('#card-field-2').val().length + $('#card-field-3').val().length + $('#card-field-4').val().length;
  if ($cardNum !== 16){
    $('.card-field').addClass('has-error');
  } else {
    $('.card-field').addClass('has-success')
  }
});
