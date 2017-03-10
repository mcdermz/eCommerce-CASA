console.log('sanity!!!!!');

$( "input[type='checkbox']" ).on('click', function () {
  $('#firstName-bill').val($('#firstName-ship').val());
  $('#lastName-bill').val($('#lastName-ship').val());
  $('#company-bill').val($('#company-ship').val());
  $('#addressLine1-bill').val($('#addressLine1-ship').val());
  $('#addressLine2-bill').val($('#addressLine2-ship').val());
  $('#city-bill').val($('#city-ship').val());
  $('#state-bill').val($('#state-ship').val());
  $('#zipCode-bill').val($('#zipCode-ship').val());
});

$('form.shipping').on('submit', function(e){
  e.preventDefault();

  if ($('#zipCode-ship').val().length !== 5 && $('#zipCode-ship').val().length !== 9){
    $('.zip-ship').addClass('has-error');
  }else if($('#zipCode-ship').val().length === 5 || $('#zipCode-ship').val().length === 9){
    $('.zip-ship').removeClass('has-error');
    $('form.shipping').addClass('has-success');
  }

});

$('form.billing').on('submit', function(e){
  e.preventDefault();

  if ($('#zipCode-bill').val().length !== 5 && $('#zipCode-bill').val().length !== 9){
    $('.zip-bill').addClass('has-error');
  }else if($('#zipCode-bill').val().length === 5 || $('#zipCode-bill').val().length === 9){
    $('.zip-bill').removeClass('has-error');
    $('form.billing').addClass('has-success');
  }
});

// credit card validation
$('form.credit-card').on('submit', function(e){
  e.preventDefault();
  var $cvv = $('#cvv').val().length;
  if ($cvv !== 3) {
    $('.cvv-field').removeClass('has-success')
    $('.cvv-field').addClass('has-error');
  } else if (!$('.card-field').hasClass('has-success')){
    $('.card-field').addClass('has-error');
  }
  else {
    $('.credit-card').addClass('has-success');
  }
});

$('.card-inputs').focus(function () {
  var invalidCardFields = $('.card-inputs').filter(function(){
      return this.value.length !== 4;
    }).length;
  if (invalidCardFields !== 0){
    $('.card-field').removeClass('has-success');
    $('.card-field').addClass('has-error');
  } else {
    $('.card-field').addClass('has-success');
  }
});

$('.card-inputs').keyup(function () {
  if ($(this).val().length !== 4){
    $('.card-field').removeClass('has-success');
    $('.card-field').addClass('has-error');
  } else {
      if ($(this).next().length === 0) {
      $('.card-field').addClass('has-success');
      }
    $(this).next().focus();
  }
});
