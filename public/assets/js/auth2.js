window.onload = function () {

    console.log('Cookie: ' + $.cookie('utm_auth_token'));
    var settings = {
        // "url": "https://api.airchannel.net/application/f04433e6-3122-43e8-ab51-5fc980b4ebda",
        "url": "http://sym4swg/application/f04433e6-3122-43e8-ab51-5fc980b4ebda",
        "method": "GET",
        "timeout": 0,
    };
    // loadData('http://sym4swg/test/load');
    res = authenticate('denis', '12345', 'http://sym4auth');
    console.log(res.then(alert));
    // authenticate('denis', '12345', 'https://auth.airchannel.net');
    // $.ajax(settings).done(function (response) {
    //     console.log(response.updatedAt.date);
    // });
};

async function authenticate(username, password, url) {
    // url": "https://api.airchannel.net/application/f04433e6-3122-43e8-ab51-5fc980b4ebda",

    var settings = {
        "url": url + "/api/login_check",
        "data": {"username" : username, "password" : password },
        "method": "POST",
        // "async": false,
        "timeout": 0,
    };

    var token;

    console.log(settings);

    return await $.ajax(settings);
}

function loadData(urlFull) {
    // url": "https://api.airchannel.net/application/f04433e6-3122-43e8-ab51-5fc980b4ebda",

    var token = $.cookie('utm_auth_token');
    console.log(token);
    if (token === undefined) {
        console.log('token undefined');
        authenticate('denis', '12345', 'http://sym4auth');
        token = $.cookie('utm_auth_token');
        console.log(token);
    }

    console.log('auth');
    var settings = {
        "url": urlFull,
        "method": "GET",
        // "async": false,
        "timeout": 0,
        "contentType": 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", 'Bearer '+ token);
        }
    };

    console.log(settings);

    $.ajax(settings).done(function (response) {
        console.log(response);
        return response;
    });
}
