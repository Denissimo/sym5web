window.onload = function () {

    console.log('Cookie: ' + $.cookie('utm_auth_token'));
    var token = $.cookie('utm_auth_token');
    var settings = {
        // "url": "http://sym4swg/application/f04433e6-3122-43e8-ab51-5fc980b4ebda",
        // "url": "http://sym4swg/test/load",
        // "url": "https://api.airchannel.net/test/load",
        "url": "https://dev-api.airchannel.net/user/name/denis",
        "method": "GET",
        "timeout": 0,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", 'Bearer '+ token);
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
};
