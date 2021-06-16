

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
                "username": $('#inputLogin').val(),
                "password": $('#inputPassword').val()
            }),
            success: function(response){
                console.log('OK');
                var url = '/';
                $(location).prop('href', url);
            },
            error: function(){
                console.log('Hui tam...');
                alert('Пошёл на хуй');
            },


        };

        event.preventDefault();

        // Forms dumps
        console.log($(this).serialize());

        // Token Response
        $.ajax(settings).done(function (response) {
            console.log(response);
            return response;
        });

        // Cookie test
        // $.ajax(settings).done(function (response) {
        //     $.cookie('utm_auth_token', response.token)
        //     console.log(response);
        // });

      });





});






