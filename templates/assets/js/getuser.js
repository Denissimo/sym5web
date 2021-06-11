window.onload = function () {

    var settings1 = {
        "url": 'https://dev-auth.airchannel.net/api/login_check',
        "data": {"username" : 'denis', "password" : '12345' },
        "method": "POST",
        // "async": false,
    };

    $.ajax(settings1).done(function (response) {
        $.cookie('utm_auth_token', response.token)
        console.log('Response Token: ' + response.token);
    });

    console.log('Cookie: ' + $.cookie('utm_auth_token'));
    var token = $.cookie('utm_auth_token');
    console.log('Cookie Token: ' + token);
    var settings2 = {
        // "url": "http://sym4swg/application/f04433e6-3122-43e8-ab51-5fc980b4ebda",
        // "url": "http://sym4swg/test/load",
        "url": "https://dev-api.airchannel.net/user/name/den",
        // "url": "https://dev-api.airchannel.net/test/load",
        "method": "GET",
        "timeout": 0,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", 'Bearer '+ token);
        }
    };

    $.ajax(settings2).done(function (response) {
        console.log(response);
    });
};
