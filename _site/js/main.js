$(document).ready(function() {
  $("#purchase").click(function(e) {
      e.preventDefault();

      alert("yes baby");

    // See Teez answer, I wasn't aware of this.
    var dataToSend = $("#customer-form").serializeArray();

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
});



//if ($('input#same-address').is(':checked')) {

