$(document).ready(function() {
  $("#purchase").click(function(e) {
      e.preventDefault();

    // See Teez answer, I wasn't aware of this.
    var dataToSend = $("#customer-form").serializeArray();

    // If I can't figure out how to do the checkbox, then count the length of the array

    $.ajax({                
        url: "userDetailTest.php", 
        type: "POST",
        data: dataToSend,     
        cache: false,
        success: function(php_output)
        {
         $(".overallSummary").html(php_output);
        }    
    });
  });

  $('#same-address').change(function(){
        if(this.checked)
            $('.shipping-info').fadeOut('slow');
        else
            $('.shipping-info').fadeIn('slow');

    });
});






//if ($('input#same-address').is(':checked')) {

