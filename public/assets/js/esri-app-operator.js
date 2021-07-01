require(
    [

        "esri/WebScene",
        "esri/views/SceneView",
        "esri/widgets/Search",
        "esri/widgets/Expand",
        "esri/widgets/BasemapGallery",
        "esri/widgets/BasemapToggle"
    ],

    function (
        WebScene,
        SceneView,
        Search,
        Expand,
        BasemapGallery,
        BasemapToggle
    ) {
        var token = $.cookie("utmdata_token");
        var apiUrl = 'https://dev-api.airchannel.net';

        // пример получения данных из API
        var allApplications = apiData(
            apiUrl,
            '/application/interval/20210604000000/20210615000000',
            token
        );

        allApplications.then(function (response) {
            console.log(response);
        });

        // пример изменения данных в API
        var setAircraft = apiData(
            apiUrl,
            '/aircraft/a6ed6021-c495-4aba-b3bf-f234ebcaf4ae',
            token,
            'PUT',
            {
                "category": 3,
                "mass": 2
            }
        );

        setAircraft.then(function (response) {
            console.log(response);
        });

        const scene = new WebScene({
            portalItem: {
                id: "4c4de937a5d148f18cfa76b23c873766",
                portal: "https://abr-gis-portal.airchannel.net/portal"
            },
        });

        const view = new SceneView({
            map: scene,
            container: "map-operator"
        });

        // Quality settings of scene

        const quality = document.querySelector('.quality-selector');
        quality.addEventListener("change", function (event) {
            changeQualityScene(this.value);
        });

        function changeQualityScene(param) {
            if (param.toString() === "low") {
                view.qualityProfile = "low";
            }

            if (param.toString() === "medium") {
                view.qualityProfile = "medium";
            }
            if (param.toString() === "high") {
                view.qualityProfile = "high";
            }
        }

        // Remove copyrights at bottom
        view.ui.remove("attribution");

        // Search widget
        const searchWidget = new Search({
            view: view
        });

        view.ui.add(searchWidget, {
            position: "top-left",
            index: 0
        });

        // Basemap gallery stack
        const basemapGallery = new BasemapGallery({
            view: view,
            container: document.createElement("div")
        });

        const bgExpand = new Expand({
            view: view,
            content: basemapGallery
        });

        basemapGallery.watch("activeBasemap", function () {
            const mobileSize = view.heightBreakpoint === "xsmall" || view.widthBreakpoint === "xsmall";

            if (mobileSize) {
                bgExpand.collapse();
            }

        });

        view.ui.add(bgExpand, {
            position: "top-left",
            index: 1
        });


        let bmToggleWidget = new BasemapToggle({
            view: view,
            nextBasemap: "hybrid"
        });

        view.ui.add(bmToggleWidget, "bottom-left");
    });

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
