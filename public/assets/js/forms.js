

$(document).ready(function () {

    $( "#form-login" ).submit(function( event ) {
        
        $(this).serialize();

        var settings = {
            "url": "https://dev-auth.airchannel.net/api/login_check",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify({
              "username": "",
              "password": ""
            }),
          };
           
          $.ajax(settings).done(function (response) {
            console.log(response);
          });

        event.preventDefault();
      });

});
