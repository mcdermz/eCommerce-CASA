console.log('sanity!!!!!');

$('billingAddressButton').on('submit', function(e){
  e.preventDefault();
    if($('#addressLine1').val().length === ''){
      $('#addressLineWrapper').addClass('has-error');
    }
});
