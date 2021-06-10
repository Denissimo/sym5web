window.onload = function () {
    console.log('start');
    var settings = {
        url: "https://api.airchannel.net/track/add",
        // url: "http://sym4swg/track/add",
        type: 'POST',
        // contentType: "application/json; charset=utf-8",
        dataType: "json",
        // crossDomain: true,
        // headers: {
        //     "accept": "application/json",
        //     "Access-Control-Allow-Origin":"*",
        //     'Access-Control-Allow-Method':"POST",
        //     'Access-Control-Allow-Credentials': 'true',
        //     'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        // },
        data:  JSON.stringify({
            "userId": 1,
            "track": {
                "radius": 32,
                "type": 1,
                "name": "Типовой маршрут"
            }
        }),
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });

};