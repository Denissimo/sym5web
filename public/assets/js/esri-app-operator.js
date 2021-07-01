require(
    [   "esri/config", //dv
        "esri/layers/WebTileLayer", //dv
        "esri/layers/GroupLayer", //dv
        "esri/layers/FeatureLayer" ,//dv
        
        "esri/WebScene",
        "esri/views/SceneView",
        "esri/widgets/Search",
        "esri/widgets/Expand",
        "esri/widgets/BasemapGallery",
        "esri/widgets/BasemapToggle"
    ],

    function (
        esriConfig,   //dv
        WebTileLayer, //dv
        GroupLayer,   //dv
        FeatureLayer, //dv

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
        /*
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
        */

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
        
        // addMobail(WebTileLayer,GroupLayer,scene);
        // addReal(FeatureLayer,scene);

    });

    function addMobail(WebTileLayer,GroupLayer,esriConfig,scene){
        esriConfig.request.proxyUrl = "/proxy/proxy.php"; 
        let grpMobail=new GroupLayer();
        grpMobail.title="Мобильная связь";
        let tele2 =new GroupLayer();
            tele2.title="Tele2"
        var tele2g= new WebTileLayer({urlTemplate:'https://new-msk.tele2.ru/maps/_2g/{level}/{col}/{row}.png',title: "TELE2_2G",  visible :false, minScale : 300000 });
        var tele3g= new WebTileLayer({urlTemplate:'https://new-msk.tele2.ru/maps/_3g//{level}/{col}/{row}.png',title: "TELE2_3G",  visible :false, minScale : 300000 });
        var telelte= new WebTileLayer({urlTemplate:'https://new-msk.tele2.ru/maps/_4g//{level}/{col}/{row}.png',title: "TELE2_LTE",  visible :false ,minScale : 300000});
        tele2.layers.add(tele2g);tele2.layers.add(tele3g);tele2.layers.add(telelte); grpMobail.layers.add(tele2);
        
        let mts   =new GroupLayer();
            mts.title="MTS"
        var mts2g= new WebTileLayer({urlTemplate:'https://tiles.qsupport.mts.ru/g2_New/{level}/{col}/{row}',title: "MTS_2G",  visible :false, minScale : 300000 });
        var mts3g= new WebTileLayer({urlTemplate:'https://tiles.qsupport.mts.ru/g3_New/{level}/{col}/{row}',title: "MTS_3G",  visible :false ,minScale : 300000});
        var mtslte= new WebTileLayer({urlTemplate:'https://tiles.qsupport.mts.ru/lte_New/{level}/{col}/{row}',title: "MTS_LTE",  visible :false ,minScale : 300000});
        mts.layers.add(mts2g);mts.layers.add(mts3g);mts.layers.add(mtslte); grpMobail.layers.add(mts)
      
     
        let megafon =new GroupLayer();
        megafon.title="Megafon"
        var megafon2g= new WebTileLayer({urlTemplate:'https://coverage-map.megafon.ru/{level}/{col}/{row}.png?layers=2g',title: "Megafon_2G",  visible :false ,minScale : 300000});
        var megafon3g= new WebTileLayer({urlTemplate:'https://coverage-map.megafon.ru/{level}/{col}/{row}.png?layers=3g',title: "Megafon_3G",  visible :false ,minScale : 300000});
        var megafonlte= new WebTileLayer({urlTemplate:'https://coverage-map.megafon.ru/{level}/{col}/{row}.png?layers=lte',title: "Megafon_LTE",  visible :true ,minScale : 300000});
        var megafonltep= new WebTileLayer({urlTemplate:'https://coverage-map.megafon.ru/{level}/{col}/{row}.png?layers=lte_plus',title: "Megafon_LTE+",  visible :false,minScale : 300000 });
     
        megafon.layers.add(megafon2g);megafon.layers.add(megafon3g);megafon.layers.add(megafonlte);megafon.layers.add(megafonltep); grpMobail.layers.add(megafon)
       
        let beeline =new GroupLayer();
        
        beeline.title="Beeline"
        var beeline2g= new WebTileLayer({urlTemplate:'https://static.beeline.ru/upload/tiles/2G/current/{level}/{col}/{row}.png',title: "Beeline_2G",  visible :false, minScale : 300000 });
        var beeline3g= new WebTileLayer({urlTemplate:'https://static.beeline.ru/upload/tiles/3G/current//{level}/{col}/{row}.png',title: "Beeline_3G",  visible :false, minScale : 300000 });
        var beelinelte= new WebTileLayer({urlTemplate:'https://static.beeline.ru/upload/tiles/4G/current//{level}/{col}/{row}.png',title: "Beeline_LTE",  visible :false ,minScale : 300000});
        beeline.layers.add(beeline2g);beeline.layers.add(beeline3g);beeline.layers.add(beelinelte); grpMobail.layers.add(beeline)
     
          
      scene.layers.add(grpMobail);
     }

    function addReal(FeatureLayer,scene){
        var realLayer = new FeatureLayer({
           url: "https://abr-gis-server.airchannel.net/airchannel/rest/services/Hosted/TruckLastBJTime/FeatureServer",
       });
       scene.layers.add(realLayer);
   }    

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
