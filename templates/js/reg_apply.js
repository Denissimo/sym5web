$(document).ready(function () {
console.log('reg-apply-js');
    var apiUrl = '{{ api_url|raw }}';
    var authUrl = '{{ auth_url|raw }}';
    var tokenCookieName = '{{ token_cookie_name }}';
    $("#uav-reg-add").submit(function (event) {
        var token = $.cookie(tokenCookieName);


        var settings = {
            url: apiUrl + "/aircraft_registration/add",
            method: "POST",
            timeout: 0,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },

            data: JSON.stringify({
                aircraftRegistration: {
                    aircraft: $("#aircraftId").val(),
                    comment: $("#comment").val(),

                },
                typeLabel: $("#registrationType").val()
            }),

            success: function (response) {
                console.log("OK");
            },

            error: function (response) {
                console.log(response);
            },
        };

        // Token Response
        $.ajax(settings).done(function (response) {
            console.log(response);
            var url = "/uav";
            $(location).prop("href", url);
            return response;
        });

        event.preventDefault();
    });

    // Remove cookie
    $("#logout").click(function (event) {
        $.removeCookie(tokenCookieName, {path: '/'});
        console.log(tokenCookieName);
        var url = "/login";
        $(location).prop("href", url);
    });
});
