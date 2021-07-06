 
require(
    [   "esri/config", //dv
        "esri/layers/WebTileLayer", //dv
        "esri/layers/GroupLayer", //dv
        "esri/layers/FeatureLayer" ,//dv
        "esri/layers/support/LabelClass",//dv

        
        "esri/views/MapView",
        "esri/views/SceneView",
        "esri/WebMap",
        "esri/WebScene",
        
        "esri/widgets/Search",
        "esri/widgets/Expand",
        "esri/widgets/BasemapGallery",
        "esri/widgets/BasemapToggle",
        "esri/widgets/LayerList",
        "esri/widgets/Locate"
    ],

    function (
        esriConfig,   //dv
        WebTileLayer, //dv
        GroupLayer,   //dv
        FeatureLayer, //dv
        LabelClass,//dv
   
        
        MapView,
        SceneView,
        WebMap,
        WebScene,
        Search,
        Expand,
        BasemapGallery,
        BasemapToggle,
        LayerList,
        Locate
    ) {
        var view;
        var scene;
        var token = $.cookie("utmdata_token");
        var apiUrl = 'https://dev-api.airchannel.net';
        var roles = JSON.parse('{{ user.user.roles|json_encode() }}');
        var user = JSON.parse('{{ user|json_encode() }}');
        var route = '{{ route }}';

        console.log(route);
        console.log(roles);
        console.log(user); 

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
        
        if(checkRoleRoute("ROLE_OPERATOR",roles))
        {
            
            scene = new WebScene({
            portalItem: {
                id: "4c4de937a5d148f18cfa76b23c873766",
                portal: "https://abr-gis-portal.airchannel.net/portal"
            },
        });
        
           view = new SceneView({
            map: scene,
            container: "map-operator"
        });
       }
       else  if(checkRoleRoute("ROLE_OWNER",roles))
        {
            
            scene = new WebMap({
               portalItem: {
                  id:  "4e1ce0dd127c4cadabd554b808d059b4",
                  portal: "https://abr-gis-portal.airchannel.net/portal"
                       },
                ground : "world-elevation"  
                
              });
        
            view = new MapView({
            map: scene,
            spatialReference : {wkid :3857},
            container: "map-operator"
             }); 
        }

        
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

        
        // Layer list of obstacles + expand menu
        const layerList = new LayerList({
            view: view
      });
          
      const bgExpandLayerList = new Expand({
          view: view,
          content: layerList
      });

      view.ui.add(bgExpandLayerList, {
          position: "top-left",
          index: 5
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
            index: 4
        });

        
        if(checkRoleRoute("ROLE_OPERATOR",roles))
             addReal(FeatureLayer,LabelClass,scene);
        // addMobail(WebTileLayer,GroupLayer,scene);
         
       
    });

    function checkRoleRoute(role,roles)
    {
        for (let i=0; i<roles.length; i++) 
          if(roles[i]===role) return true;
        return false;    
    }
   

