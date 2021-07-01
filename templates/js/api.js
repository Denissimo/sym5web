
function apiData(url, path, token, method = 'GET', data = null) {
    var settings = {
        url: url + path,
        method: method,
        timeout: 0,
        dataType: "json",
        data: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
        success: function (response) {
            // console.log('success GET');
            // console.log(response);
        },
        error: function (response) {
            console.log('error GET');
            console.log(response);
        }
    };

    return Promise.resolve(
        $.ajax(settings).done(function (response) {
            // console.log('done GET');
            return response;
        })
    );
}