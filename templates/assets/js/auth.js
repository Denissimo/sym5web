window.onload = function () {
    // authenticate('denis', '12345', 'http://sym4auth/api/login_check');
    // authenticate('denis', '12345', 'https://auth.airchannel.net/api/login_check');
    authenticate('denis', '12345', 'https://dev-auth.airchannel.net/api/login_check');
};

function authenticate(username, password, url) {

    var settings = {
        "url": url,
        "data": {"username" : username, "password" : password },
        "method": "POST",
        // "async": false,
    };

    $.ajax(settings).done(function (response) {
        $.cookie('utm_auth_token', response.token)
        console.log(response);
    });
}
