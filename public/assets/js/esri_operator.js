$(document).ready(function () {
    require([
        "esri/Map",
        "esri/views/SceneView",
        "esri/WebScene",
        "esri/widgets/BasemapGallery",
        "esri/config"
    ], function (
        Map,
        SceneView,
        WebScene,
        BasemapGallery,
        esriConfig
    ) {
        var map = new Map({
            basemap: "gray-vector"
        });

        esriConfig.portalUrl = "https://abr-gis-portal.airchannel.net/portal";
        var webScene = new WebScene({
            portalItem: {
                id: "4c4de937a5d148f18cfa76b23c873766"
            }
        });
        console.log(webScene);
        var view = new SceneView({
            container: "operator_screen",
            map: webScene
            // center: [139.68, 35.68],
            // zoom: 10
        });

        var basemapGallery = new BasemapGallery({
            view: view
        });

        // Add the widget to the top-right corner of the view
        view.ui.add(basemapGallery, {
            position: "top-right"
        });
    });
});
