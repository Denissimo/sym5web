var token;
var filter;
var stara;
var enda;
//var segFeatClone;
var USERS; //=[1,4,6,7,9,10,27,29,30,31,32];
require([
  "esri/Map",
  "esri/WebScene",
  "esri/views/SceneView",
  "esri/layers/SceneLayer",
  "esri/layers/FeatureLayer" ,
  /*,"esri/layers/MapImageLayer"*/,
  "esri/layers/StreamLayer",
  "esri/widgets/TimeSlider",
  "esri/config",
  "esri/geometry/SpatialReference",
  "esri/geometry/Extent",
  "esri/tasks/support/Query",
  "esri/layers/support/LabelClass",
  "esri/symbols/WebStyleSymbol",
  "esri/tasks/Geoprocessor",
  "esri/config",

  "esri/widgets/BasemapGallery",
  "esri/widgets/LayerList",
  "esri/widgets/Search",
  "esri/views/layers/support/FeatureFilter",

  "esri/widgets/FeatureTable",
  "esri/geometry",
  "esri/geometry/Point",
  "esri/geometry/Polyline",
  "esri/geometry/Polygon",
  "esri/geometry/geometryEngine",
  "esri/layers/GraphicsLayer",
  "esri/Graphic",
  "esri/layers/support/Relationship",
  "esri/Basemap",
  "esri/PopupTemplate",
  "esri/tasks/support/RelationshipQuery",
  "esri/widgets/BasemapGallery/support/LocalBasemapsSource",
  "esri/layers/WebTileLayer",
  "esri/layers/GroupLayer",
], function (
  Map,
  WebScene,
  SceneView,
  SceneLayer,
  FeatureLayer,
  StreamLayer,
  //  MapImageLayer,
  TimeSlider,
  esriConfig,
  SpatialReference,
  Extent,
  Query,
  LabelClass,
  WebStyleSymbol,
  Geoprocessor,
  esriConfig,
  BasemapGallery,
  LayerList,
  Search,
  FeatureFilter,
  FeatureTable,
  geometry,
  Point,
  Polyline,
  Polygon,
  geometryEngine,
  GraphicsLayer,
  Graphic,
  Relationship,
  Basemap,
  PopupTemplate,
  RelationshipQuery,
  LocalBasemapsSource,
  WebTileLayer,
  GroupLayer
) {
  //window.onload = function () {

  //console.log('Cookie: ' + $.cookie('utm_auth_token'));
  // token=window.parent.document.getElementById("idToken").value;
  // token=document.getElementById("idToken").value;
  //console.log(token);
  //token = $.cookie('utm_auth_token');

  //}

  document.getElementById("quality").addEventListener("change", function (event) {
    changeQscene(this.value);
  });

  let punktslv;
  /* segFeatClone=[];
        var uvRenderer = {
          type: "unique-value",  // autocasts as new UniqueValueRenderer()
          field: "relationships/0/status",  // values returned by this function will
                             // be used to render features by type
          uniqueValueInfos: [
            {
              value: 4,  // features labeled as "High"
              symbol: lineSymbolRoute4  // will be assigned sym1
            }, {
              value: 3,  // features labeled as "Medium"
              symbol:lineSymbolRoute4  // will be assigned sym2
            }, {
              value: 5,  // features labeled as "Low"
              symbol: lineSymbolRoute5  // will be assigned sym2
            }
            , {
              value: 6,  // features labeled as "Low"
              symbol: lineSymbolRoute5  // will be assigned sym2
            }
          ]
        };
*/

  var checkGeometry;
  var checkInd;
  rid = "{631E5D87-29E2-4E07-88AD-7297C036EFBD}";
  fid = "{631E5D87-29E2-4E07-88AD-7297C036EFBD}";

  var servicePath =
    "https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/VectorDevelop2/FeatureServer/";

  var sourceTrackRoute = servicePath + "1";
  var sourceTrackZone = servicePath + "4";
  var sourceFlyghtZone = servicePath + "5";
  var sourceFlyghtRoute = servicePath + "2";
  var sourceFlyghtSeg = servicePath + "3";
  var sourceFlyghtPunkts = servicePath + "0";
  var apiHTML = "https://dev-api.airchannel.net/";
  var BT = "btAll";
  var iniDt = getIniDate();
  var UsersId = [];
  USERS = [];
  var zoneLayer = new FeatureLayer({
    //"https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/templZone/FeatureServer/0",
    url: sourceFlyghtZone,
    outFields: ["*"],
    hasZ: true,
    //renderer: zoneRenderer,
    listMode: "hide",
    returnZ: true,
    elevationInfo: {
      mode: "relative-to-ground",
      offset: 500,
    },
  });
  var routeLayer = new FeatureLayer({
    //url : "https://abr-gis-server.airchannel.net/airchannel/rest/services/Route/FeatureServer",
    //"https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/flyghtRoute/FeatureServer/0",
    url: sourceFlyghtRoute,
    //popupTemplate:templateRoute,
    // renderer:lineRendererRoute,
    listMode: "hide",
    opacity: 0.4,
    elevationInfo: {
      mode: "absolute-height",
      //offset : 100
    },
  });
  var mks2Layer = new FeatureLayer({
    //url:"https://abr-gis-geo.airchannel.net/arcgeo/rest/services/ISS-stream-service-out3/StreamServer",
    //url:"https://abr-gis-geo.airchannel.net/arcgeo/rest/services/SreamMavlink/StreamServer",

    url: "https://abr-gis-server.airchannel.net/airchannel/rest/services/Hosted/TruckLastBJTime/FeatureServer",
  });
  var gpUrl =
    "https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/SendTracker/GPServer/SendTracker";
  var gp = new Geoprocessor({
    url: gpUrl,
  });
  function dataForSend() {
    let dt = new Float32Array([120, 0, 0, 0, 0, 0, 0]);
    let bths = "";
    for (let i = 0; i < dt.length; i++) {
      let hex = ToHex(dt[i]);

      for (let j = 0; j < 8; j += 2) {
        bths = bths + hex.substring(j, j + 2) + " ";
      }
    }

    // alert(bths);

    // var bth=bytesToHexString(bytes);
    //   var bths=(bth.toString()).replaceAll(',', ' ');

    let bytes = getInt16Bytes(19);
    let bth2 = bytesToHexString(bytes);
    let bth2s = bth2.toString().replaceAll(",", " ");
    bths = bths + bth2s + " 00 00 ";

    let trId = 129;
    bytes = getInt32Bytes(trId);
    let bth3 = bytesToHexString(bytes);
    let trIds = bth3[0];

    bytes = getInt32Bytes(33);
    let bth4 = bytesToHexString(bytes);
    let data = "fd " + bth4[0] + " " + trIds + " 00 6c " + bths + "cc cc";
    return data;

    function bytesToHexString(bytes) {
      bth = [];
      for (var index = 0; index < bytes.length; index++) {
        if (bytes[index] < 16) {
          bth.push("0" + bytes[index].toString(16));
        } else bth.push(bytes[index].toString(16));
      }
      return bth;
    }

    function ToHex(d) {
      const getHex = (i) => ("00" + i.toString(16)).slice(-2);
      var view = new DataView(new ArrayBuffer(4)),
        result;
      view.setFloat32(0, d);
      result = Array.apply(null, { length: 4 })
        .map((_, i) => getHex(view.getUint8(i)))
        .join("");
      return result;
    }
    function getInt64Bytes(long) {
      var byteArray = [0, 0, 0, 0, 0, 0, 0, 0];
      for (var index = 0; index < byteArray.length; index++) {
        var byte = long & 0xff;
        byteArray[index] = byte;
        long = (long - byte) / 256;
      }
      return byteArray;
    }
    function getInt32Bytes(long) {
      var byteArray = [0, 0, 0, 0];
      for (var index = 0; index < byteArray.length; index++) {
        var byte = long & 0xff;
        byteArray[index] = byte;
        long = (long - byte) / 256;
      }
      return byteArray;
    }
    function getInt16Bytes(long) {
      var byteArray = [0, 0];
      for (var index = 0; index < byteArray.length; index++) {
        var byte = long & 0xff;
        byteArray[index] = byte;
        long = (long - byte) / 256;
      }
      return byteArray;
    }
  }

  /*
       function getUserIds()
       { 
        iniInd=USERS.length;             
        var wh="sdate >= timestamp'"+ iniDt+"'"
           
        zoneLayer.queryFeatures({
          where : wh,
          outFields: ["*"],
        })
        .then(function(fSet1) {
          for(let i=0;i<fSet1.features.length;i++)
          {  let flag=false;
             for(let j =0;j<USERS.length;j++)
                if (fSet1.features[i].getAttribute("ownerid")==USERS[j]) flag=true;
             if (!flag) USERS.push(fSet1.features[i].getAttribute("ownerid"));
          }          
          routeLayer.queryFeatures({
            where : wh,
            outFields: ["*"],
          })
          .then(function(fSet2) {
            for(let i=0;i<fSet2.features.length;i++)
          {  let flag=false;
             for(let j =0;j<USERS.length;j++)
                if (fSet2.features[i].getAttribute("ownerid")==USERS[j]) flag=true;
             if (!flag) USERS.push(fSet2.features[i].getAttribute("ownerid"));
          }
          if(iniInd<USERS.length)
            etFlyghtRecords(akeListUserName); 
          else
            etUserFly();  
            
        });
      });
    } 
*/

  start();
  var selItem = [];
  var sd;
  var fd;
  var tmzon = 0;

  var interv;

  function start() {
    let d = new Date();
    d.setDate(d.getDate() - 20);

    let d2 = new Date();
    d2.setDate(d2.getDate() + 20);
    let m1 = String(d.getMonth() + 1).padStart(2, "0");
    let day1 = String(d.getDate()).padStart(2, "0");
    let m2 = String(d2.getMonth() + 1).padStart(2, "0");
    let day2 = String(d2.getDate()).padStart(2, "0");

    stara = d.getFullYear().toString() + m1 + day1 + "000000";
    enda = d2.getFullYear().toString() + m2 + day2 + "000000";

    btns = ["btAll", "btCan", "btApp", "btAcc"];
    //По нажатию на кнопку наш таймер начнет работать:
    for (i = 0; i < btns.length; i++) {
      document.getElementById(btns[i]).addEventListener("mousedown", setBT);
    }
    //getUserIds()
    getFlyghtRecords(makeListUserName);
    makeRealFlyght();
    window.setInterval(allRefresh, 60000);
  }
  function inArray(Arr, el) {
    for (let j = 0; j < Arr.length; j++) if (Arr[j] == el) return true;
    return false;
  }

  function makeListUserName(response) {
    for (let i = 0; i < response.applications.length; i++) {
      if (response.applications[i].application.start.date >= iniDt)
        if (response.applications[i].status.id > 2) {
          let flag = true;

          for (let j = 0; j < UsersId.length; j++) {
            if (UsersId[j][0] == response.applications[i].user.id) {
              flag = false;
              break;
            }
          }
          if (flag)
            UsersId.push([
              response.applications[i].user.id,
              response.applications[i].user.user.username,
            ]);
        }
    }

    getUserFly();
  }
  function getUserName(owid) {
    // alert(UsersId);
    for (let i = 0; i < UsersId.length; i++)
      if (UsersId[i][0] == owid) return UsersId[i][1];
    return null;
  }
  function setBT(event) {
    BT = event.target.id;
  }
  //Эта функция будет запускаться каждую секунду

  function allRefresh() {
    routeLayerTen.refresh();
    zoneLayerTen.refresh();
    getFlyghtRecords(makeListUserName);
    makeRealFlyght();
  }

  function makeRealFlyght() {
    mks2Layer
      .queryFeatures({
        where: "",
        returnGeometry: true,
        outFields: ["*"],
      })
      .then(function (featureSet) {
        makeListRealFlyght(featureSet.features);
      });
  }

  function getFlyghtRecords(resFunc) {
    //let owid= USERS[ind];
    //console.log(owid);
    var settings = {
      url: apiHTML + "application/interval/" + stara + "/" + enda,

      method: "GET",
      timeout: 0,
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
      resFunc(response);
    });
  }

  // start();

  var templateBuffer = {
    title: "Пересечение",
    content: [
      {
        type: "fields",
        fieldInfos: [
          {
            fieldName: "describe",
            label: "Описание",
          },
        ],
      },
    ],
  };

  var templateBufferRoute = {
    title: "Пересечение c полетом",
    content: [
      {
        type: "fields",
        fieldInfos: [
          {
            fieldName: "start",
            label: "Старт",
          },
          {
            fieldName: "finish",
            label: "Финиш",
          },
          {
            fieldName: "owner",
            label: "Клиент",
          },
        ],
      },
    ],
  };

  bufferLayer = new GraphicsLayer({
    elevationInfo: {
      mode: "on-the-ground",

      offset: 100,
    },
  });

  const srw = new SpatialReference({ wkid: 4326 });
  let inersectGeometry = [];

  function checkInter() {
    bufferLayer.removeAll();
    //   checkGeometry.spatialReference =srw;

    buffer = geometryEngine.geodesicBuffer(checkGeometry, 500, "meters");
    buffer2 = geometryEngine.geodesicBuffer(checkGeometry, 1000, "meters");

    let sdtm = new Date(sd);
    sdtm.setTime(sdtm.getTime() - 100 + 3600000 * tmzon);
    sdt = covertTime(new Date(sdtm));
    //alert(fd);
    let fdtm = new Date(fd);
    fdtm.setTime(fdtm.getTime() - 100 + 3600000 * tmzon);
    fdt = covertTime(new Date(fdtm));

    checkInterRoute(buffer, buffer2, sdt, fdt, routeLayer);

    checkInterRoute(buffer, buffer2, sdt, fdt, zoneLayer);

    checkInterProc(buffer, restrictLayer);
    checkInterProc(buffer, prohLayer);

    //checkInterRest(buffer);
    //checkInterProh(buffer);
    if (checkGeometry.type == "polyline") checkElevation(50);

    interv = window.setInterval(checksMess, 2000);
    // webScene.layers.add(featureBufLayer);
    return;
  }

  function checksMess() {
    window.clearInterval(interv);

    if (bufferLayer.graphics.length == 0) alert("Нет конфиликтов");
    else {
      alert("Внимание конфиликты !!!");
    }
  }

  let glb = [];
  function getUserFly() {
    let flighthtml = "";

    const flighthtml0 = '    <div class="filterDiv '; //onaproval">'//accepted">'//canceled

    const flighthtml1 = '<div class="flight-list-item"'; //  flight-list-item-onapproval"'
    const flighthtml2 = '><div class="flight-top">';
    /*<div class="flight-image">
          <img src="images/map__2.jpg" alt="">
        </div>*/
    const flighthtml3 =
      ' <div class="flight-content"><p class="flight-item-reg">'; //AZ 200187
    const flighthtml4 =
      '  </p> <p class="flight-item-flightnumber"><span  class="flight-item-title">Номер полета</span>'; //000150
    const flighthtml5 =
      '</p> <p class="flight-item-date-start"><span  class="flight-item-title">Дата начала полета</span>'; //20.12.2020 16:30
    const flighthtml6 =
      '</p><p class="flight-item-date-stop"><span  class="flight-item-title">Дата окончания полета</span>'; //20.12.2020 17:30
    const flighthtml7 =
      '</p>  </div> </div>  <div class="flight-bottom">  <p class="flight-item-status '; // status-onapproval">На утверждении
    const flighthtml8 = "</p>";
    const flighthtml7a = ' <button  class="btn btn-more" id="';
    const flighthtml7b = '">Согласовать</button>';
    const flighthtml7c = ' <button  class="btn btn-more" id="';
    const flighthtml7d = '">Отклонить</button>';
    const flighthtml7e = ' <button  class="btn btn-more" id="';
    const flighthtml7f = '">Отменить</button>';
    const flighthtml8a = ' <button  class="btn btn-more" id="';
    const flighthtml8b = '">Подробнее</button>'; //  </div>'
    const flighthtml8c = "</div>";
    const flighthtml9 = '<div class="flight-bottom"> ';
    const flighthtml10 = ' <button  class="btn btn-more" id="';
    const flighthtml10a = '">Проверить полет </button> </div>';
    const flighthtml11 = "</div>";

    lst = flighthtml;
    getFlyghtRecords(makeListFlyghtPanel);

    // glb=[]; ?????????????

    function makeListFlyghtPanel(response) {
      for (let i = 0; i < response.applications.length; i++) {
        if (response.applications[i].application.start.date >= iniDt)
          if (response.applications[i].status.id > 2)
            panFlyght(response.applications[i]);
      }

      document.getElementById("flist").innerHTML = lst;
      addFlyEvent();
      document.getElementById(BT).click();
    }

    function panFlyght(flyght) {
      var nm = flyght.user.user.username + " " + flyght.track.name;

      var glob = flyght.id; // glob - GUID полета
      var kod = flyght.status.id;
      // glb -  массив согласованных или на согласовании

      var obj = flyght.application.externalId; //ftfSet.features[i].getAttribute("objectid");
      var sdat = flyght.application.start.date; //ftfSet.features[i].getAttribute("startdate");
      var fdat = flyght.application.finish.date; //ftfSet.features[i].getAttribute("finishdate");

      if (kod == 7) return;
      lst = lst + flighthtml0;
      if (kod == 3) {
        lst =
          lst + 'onaproval"> ' + flighthtml1 + ' flight-list-item-onapproval"';
        glb.push([glob, 0, flyght.track.type.toString()]);
      }
      if (kod == 5)
        lst = lst + 'canceled">' + flighthtml1 + ' flight-list-item-rejected"';
      if (kod == 4) {
        lst = lst + 'accepted">' + flighthtml1 + ' flight-list-item-accepted"';
        glb.push([glob, 1, flyght.track.type.toString()]);
      }
      if (kod == 6)
        lst = lst + 'canceled">' + flighthtml1 + ' flight-list-item-rejected"';
      lst = lst + flighthtml2;
      lst = lst + flighthtml3;
      lst = lst + nm;
      lst = lst + flighthtml4;
      lst = lst + obj.toString();
      lst = lst + flighthtml5;
      lst = lst + new Date(sdat).toString();
      lst = lst + flighthtml6;
      lst = lst + new Date(fdat).toString();
      lst = lst + flighthtml7;

      if (kod == 3) lst = lst + ' status-onapproval">На утверждении';
      if (kod == 5) lst = lst + '  status-rejected">Отклонен';
      if (kod == 6) lst = lst + '  status-rejected">Отменен';
      if (kod == 4) lst = lst + '  status-accepted">Согласован';

      lst = lst + flighthtml8;

      if (kod == 3) {
        lst = lst + flighthtml7a;
        lst = lst + "S" + glob + flyght.track.type.toString();
        lst = lst + flighthtml7b;
        lst = lst + flighthtml7c;
        lst = lst + "D" + glob + flyght.track.type.toString();
        lst = lst + flighthtml7d;
      }
      if (kod == 4) {
        lst = lst + flighthtml7e;
        lst = lst + "R" + glob + flyght.track.type.toString();
        lst = lst + flighthtml7f;
      }
      /*
                    if (kod==3 ||kod==4)
                    {
                    lst=lst+flighthtml8a;
                    lst=lst+"P"+glob;
                    lst=lst+flighthtml8b;
                    lst=lst+flighthtml8c;
                    }
                    else*/
      lst = lst + flighthtml8c;
      if (kod == 3 || kod == 4) {
        lst = lst + flighthtml9;
        lst = lst + flighthtml8a;
        lst = lst + "P" + glob;
        lst = lst + flighthtml8b;

        lst = lst + flighthtml10;
        lst = lst + "C" + glob;
        lst = lst + flighthtml10a;
      }
      lst = lst + flighthtml11;
      lst = lst + flighthtml11;
    } //alert(profil[k].paths)
  }
  function addFlyEvent() {
    for (i = 0; i < glb.length; i++) {
      document
        .getElementById("C" + glb[i][0])
        .addEventListener("click", eventFlyCheck);
      document
        .getElementById("P" + glb[i][0])
        .addEventListener("click", eventFlyDetal);
      if (glb[i][1] == 0) {
        document
          .getElementById("S" + glb[i][0] + glb[i][2])
          .addEventListener("click", eventFlyApp);
        document
          .getElementById("D" + glb[i][0] + glb[i][2])
          .addEventListener("click", eventFlyApp);
      } else {
        document
          .getElementById("R" + glb[i][0] + glb[i][2])
          .addEventListener("click", eventFlyApp);
      }
    }
  }
  function eventFlyApp(event) {
    bufferLayer.removeAll();
    let gld = event.target.id.substring(1, event.target.id.length - 1);
    let reg = event.target.id.substring(0, 1);
    let tp = event.target.id.substring(event.target.id.length - 1);

    //let gld=event.target.id;
    let stat;
    if (reg == "S") stat = 4;
    if (reg == "D") stat = 5;
    if (tp == "2") modLayerRec(gld, routeLayer, "flyid", "status", stat);
    else modLayerRec(gld, zoneLayer, "flyid", "status", stat);

    let dat = {
      statusId: stat,
    };

    updateRecordFlyghtTable(dat, gld, false);
  }

  function makeListRealFlyght(feats) {
    const flightrealhtml0 = '    <div class="filterDiv> '; //onaproval">'//accepted">'//canceled
    const flightrealhtml2 =
      '<div class="flight-list-item"><div class="flight-top">';
    /*<div class="flight-image">
          <img src="images/map__2.jpg" alt="">
        </div>*/
    const flightrealhtml3 =
      ' <div class="flight-content"><p class="flight-item-reg">'; //AZ 200187
    const flightrealhtml4 = "  </p>";

    const flightrealhtml10 = ' <button  class="btn btn-more" id="';
    const flightrealhtml10a = '">Поcлать команду</button> </div>';
    const flightrealhtml11 = "</div>";
    lst = "";

    var glids = [];
    for (let i = 0; i < feats.length; i++) {
      panRealFlyght(feats[i]);
    }

    document.getElementById("freallist").innerHTML = lst;
    addFlyRealEvent(glids);

    function panRealFlyght(feat) {
      let glid = feat.getAttribute("globalid");
      glids.push(glid);
      let nid = feat.getAttribute("boardnumber");
      lst = lst + flightrealhtml0;
      lst = lst + flightrealhtml2;
      lst = lst + flightrealhtml3;
      lst = lst + nid;
      lst = lst + flightrealhtml4;
      lst = lst + flightrealhtml10;
      lst = lst + glid;
      lst = lst + flightrealhtml10a;
      lst = lst + flightrealhtml11;
      lst = lst + flightrealhtml11;
    }
  }
  function addFlyRealEvent(glids) {
    for (i = 0; i < glids.length; i++) {
      document
        .getElementById(glids[i])
        .addEventListener("click", eventFlyRealSend);
    }
  }

  function modLayerRec(gld, modLayer, atrName, atrNameMod, val) {
    modLayer
      .queryFeatures({
        where: atrName + " = '" + gld + "'",
        returnGeometry: true,
        returnZ: true,
        returnM: true,
        outFields: ["*"],
      })
      .then(function (ftfSet) {
        ftfSet.features[0].setAttribute(atrNameMod, val);
        param2 = { updateFeatures: ftfSet.features };
        updateLayer(modLayer, param2);
      });
  }
  function updateLayer(lay, params) {
    lay
      .applyEdits(params)
      .then(function (editsResult) {})
      .catch(function (error) {
        alert(error.name);
        alert(error.message);
      });
  }
  function updateRecordFlyghtTable(dat, flid, isNew) {
    while (glb.length > 0) {
      glb.pop();
    }

    var settings = {
      url: apiHTML + "application/" + flid,

      method: "PUT",
      data: JSON.stringify(dat),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: function (data) {
        getUserFly();
        // формирование панели полетов
      },

      error: function (errMsg) {
        alert("@@@@@@");
        alert(JSON.stringify(errMsg) + " !!");
      },
    };

    $.ajax(settings).done(function (response) {
      //alert( response.id +" ??");
      //      console.log(response);
    });
  }

  function eventFlyRealSend(event) {
    //alert(event.target.id);
    let data = dataForSend();
    let params = { DATA: data };

    gp.submitJob(params).then(function (jobInfo) {
      var options = {
        statusCallback: function (jobInfo1) {
          progTest(jobInfo1);
        },
      };
      gp.waitForJobCompletion(jobInfo.jobId, options).then(function (jobInfo2) {
        console.log(jobInfo2);
        getResultData(jobInfo2);
      });
    });
    function progTest(value) {
      console.log(value.jobStatus);
    }
    function getResultData(result2) {
      gp.getResultData(result2.jobId, "Result").then(function (result) {
        console.log(result.value);
      });
    }
  }
  function eventFlyCheck(event) {
    eventFlyDetal(event);
  }
  function eventFlyDetal(event) {
    bufferLayer.removeAll();
    var gld = event.target.id.substring(1);
    var pref = event.target.id.substring(0, 1);
    var settings = {
      url: apiHTML + "application/" + gld,

      method: "GET",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
    };
    $.ajax(settings).done(function (response) {
      rid = response.track.id;
      fid = response.id;
      td = response.application.start.date;
      sd = td;
      tmzon = response.application.start.timezone_type;
      fd = response.application.finish.date;
      setTimeSlider(td, fd);
      if (pref == "C") getCheckGeometry(rid, checkInter);
      else getCheckGeometry(rid, null);

      defQ = buildDefinitionQuery();

      routeLayer.definitionExpression = defQ;
      zoneLayer.definitionExpression = defQ;
      punktsLayer.definitionExpression = defQ;
      punktsOtherLayer.definitionExpression = buildDefinitionQueryOtherPunkts(); //"flyid <> '"+fid+ "'";
      punktsBeforLayer.visible = false;
      punktsBeforLayer.definitionExpression = defQ;
    });
  }

  function checkWeath() {
    var tt = new Date();

    stt = new Date(sd);

    ftt = new Date(fd);

    if (stt.getDate() - tt.getDate() > 5) {
      alert("Нет достоверного прогноза");
      return;
    }
    resp = otladResponse;
    weather = JSON.parse(resp);
    wth = new Graphic();
    daily = weather.daily;
    k = 0;
    delt = -1;
    for (k = 0; k < weather.daily; k++) {
      tdt = new Date(daily[k].dt * 1000);
      delt = tdt.getTime() - sdt.getTime();
      if (delt > 0) {
        break;
      }
    }
    dDat = stt.getDate() - tt.getDate();
    // dDat=1;
    if (dDat > 2) {
      if (delt > 12 * 3600000) k = k - 1;

      ss = "";
      ss = ss + " Tmax = " + (daily[k].temp.max - 273.15) + " C \n";
      ss = ss + " Tmin = " + (daily[k].temp.min - 273.15) + " C \n";
      ss = ss + " P = " + daily[k].pressure.toString() + " hPa \n";
      ss = ss + " H = " + daily[k].humidity.toString() + " % \n";
      ss = ss + " Dew Point : " + (daily[k].dew_point - 273.15) + " C \n";
      ss = ss + "Wind speed : " + daily[k].wind_speed + " m/sec \n";
      ss = ss + "Wind direction : " + daily[k].wind_deg + " degrees \n";
      ss = ss + "Clouds : " + daily[k].clouds + " % \n";
      alert(ss);
    } else {
      hourly = weather.hourly;
      if (ftt.getTime() - tt.getTime() > 3600000) {
        for (k = 0; k < hourly.daily; k++) {
          tdt = new Date(hourly[k].dt * 1000);
          delt = tdt.getTime() - sdt.getTime();
          if (delt > 0) {
            break;
          }
        }
        ss = "";
        ss = ss + " T = " + (hourly[k].temp - 273.15) + " C \n";
        ss = ss + " P = " + hourly[k].pressure.toString() + " hPa \n";
        ss = ss + " H = " + hourly[k].humidity.toString() + " % \n";
        ss = ss + " Dew Point : " + (hourly[k].dew_point - 273.15) + " C \n";
        ss = ss + "Wind speed : " + hourly[k].wind_speed + " m/sec \n";
        ss = ss + "Wind direction : " + hourly[k].wind_deg + " degrees \n";
        ss = ss + "Visibility : " + hourly[k].visibility + " meters \n";
        ss = ss + "Clouds : " + hourly[k].clouds + " % \n";
        ss = ss + "Precipitation :" + hourly[k].pop * 100 + " % \n";
        alert(ss);
      } else {
      }
    }
  }

  function changeExtent2(ext) {
    wkd = ext.spatialReference.wkid;
    view.extent = new Extent({
      xmin: ext.xmin - (ext.xmax - ext.xmin),
      ymin: ext.ymin - (ext.ymax - ext.ymin),
      xmax: ext.xmax + (ext.xmax - ext.xmin),
      ymax: ext.ymax + (ext.ymax - ext.ymin),
      spatialReference: {
        wkid: wkd,
      },
    });
    timeSlider.play();
  }

  function getIniDate() {
    var st = new Date();
    st.setDate(st.getDate() - 20);
    st.setDate;
    stDt = covertTime(st);
    return stDt;
  }

  function buildDefinitionQueryTen() {
    stDt = getIniDate();
    var defQuery = "sdate >= timestamp'" + stDt + "'";
    return defQuery;
  }
  function buildDefinitionQuery() {
    var defQuery = "flyid = '" + fid + "'";
    return defQuery;
  }

  var webDronActive = {
    type: "web-style", // autocasts as new WebStyleSymbol()
    styleUrl:
      "https://abr-gis-portal.airchannel.net/portal/sharing/rest/content/items/bb7b64a19ac9455d97ac219080a0e978/data",
    //"https://abr-gis-portal.airchannel.net/portal/sharing/rest/content/items/209758da27ef4d53a7a7049f3283393e",
    name: "drone_active",
  };
  var webDronOther = {
    type: "web-style", // autocasts as new WebStyleSymbol()
    styleUrl:
      "https://abr-gis-portal.airchannel.net/portal/sharing/rest/content/items/bb7b64a19ac9455d97ac219080a0e978/data",
    //"https://abr-gis-portal.airchannel.net/portal/sharing/rest/content/items/209758da27ef4d53a7a7049f3283393e",
    name: "drone_other",
  };

  //filter=new FeatureFilter();

  // load webscene from portal item
  esriConfig.portalUrl = "https://abr-gis-portal.airchannel.net/portal";
  var webScene = new WebScene({
    portalItem: {
      // autocasts as new PortalItem()
      //"601393b52c9747c889b883a4360149e1"
      id: "4c4de937a5d148f18cfa76b23c873766",
    }, //,
    // ground : "world-elevation"
  });

  var view = new SceneView({
    map: webScene,
    container: "map-operator",
  });

  function changeQscene(param) {
    if (param.toString() == "low") {
      view.qualityProfile = "low";
    }

    if (param.toString() == "medium") {
      view.qualityProfile = "medium";
    }
    if (param.toString() == "high") {
      view.qualityProfile = "high";
    }
  }

  //######################################################################################################
  d = new Date();
  d.setDate(d.getDate() - 20);
  d2 = new Date();
  d2.setDate(d2.getDate() + 20);
  timeExtent = {
    start: d,
    end: d2,
  };

  let timeSlider = new TimeSlider({
    //container: "viewDiv",
    fullTimeExtent: timeExtent,
    playRate: 700, //1000,
    values: [d],
    mode: "instant",
    timeVisible: true,

    stops: {
      interval: {
        value: 4,

        unit: "seconds",
      },
    },
  });

  timeSlider.watch("timeExtent", function () {
    view.whenLayerView(punktsOtherLayer).then(function (layerView) {
      var et = timeSlider.timeExtent.end.getTime();

      ett = new Date(et);
      ett.setTime(ett.getTime() + 3000 + 3600000 * tmzon);

      stt = new Date(et);
      stt.setTime(stt.getTime() + 3600000 * tmzon);

      var defQuery =
        "tdate >= " + stt.valueOf() + " And tdate < " + ett.valueOf();
      layerView.filter = new FeatureFilter({
        where: defQuery,
      });
    });
    view.whenLayerView(punktsBeforLayer).then(function (layerView) {
      var st = timeSlider.timeExtent.start.getTime();

      stt = new Date(st);
      stt.setTime(stt.getTime() - 100 + 3600000 * tmzon);

      var defQuery = "tdate < " + stt.valueOf();
      layerView.filter = new FeatureFilter({
        where: defQuery,
      });
      layerView.visible = true;
    });
    view
      .whenLayerView(punktsLayer)
      .then(function (layerView) {
        var et = timeSlider.timeExtent.end.getTime();

        ett = new Date(et);
        ett.setTime(ett.getTime() + 3000 + 3600000 * tmzon);

        stt = new Date(et);
        stt.setTime(stt.getTime() + 3600000 * tmzon);

        let defQuery =
          "tdate >= " + stt.valueOf() + " And tdate < " + ett.valueOf();
        //layerView.maximumNumberOfFeatures=2;
        layerView.filter = new FeatureFilter({
          where: defQuery,
        });

        //    punktsBeforLayer.definitionExpression=buildDefinitionBeforQueryPunkts() ;
      })
      .catch(function (error) {
        alert(error); // An error occurred during the layerview creation
      });
  });

  function buildDefinitionQueryOtherPunkts() {
    var et = timeSlider.fullTimeExtent.end.getTime();
    var st = timeSlider.fullTimeExtent.start.getTime();

    ett = new Date(et);

    ett.setTime(ett.getTime() + 3600000 * tmzon);

    stt = new Date(st);

    stt.setTime(stt.getTime() + 3600000 * tmzon);

    startDt = covertTime(stt);
    endDt = covertTime(ett);

    var defQuery =
      "tdate >= timestamp'" +
      startDt +
      "' And tdate < timestamp'" +
      endDt +
      "' And flyid <> '" +
      fid +
      "'";

    return defQuery;
  }

  function buildDefinitionQueryPunkts() {
    var et = timeSlider.timeExtent.end.getTime();
    var st = timeSlider.timeExtent.start.getTime();

    ett = new Date(et);
    //ett1= new Date(et);
    ett.setTime(ett.getTime() + 4200 + 3600000 * tmzon);
    // ett1.setTime(ett.getTime()+4200+3600000*tmzon+2000);
    stt = new Date(st);
    // stt1= new Date(st);
    stt.setTime(stt.getTime() + 3600000 * tmzon);
    // stt1.setTime(stt1.getTime()+3600000*tmzon+2000);

    startDt = covertTime(stt);
    endDt = covertTime(ett);
    // startDt1=covertTime(stt1);
    // endDt1=covertTime(ett1);

    var defQuery =
      "tdate >= timestamp'" +
      startDt +
      "' And tdate < timestamp'" +
      endDt +
      "' And flyid = '" +
      fid +
      "'";
    // var defQuery ="tdate >= timestamp'"+ startDt+"' And tdate < timestamp'"+endDt+ "' And tdate >= timestamp'"+ startDt1+"' And tdate < timestamp'"+endDt1+ "' And  flyid = '"+fid+ "'";
    // alert(defQuery);
    // alert(defQuery)
    return defQuery;
  }

  function buildDefinitionBeforQueryPunkts() {
    var st = timeSlider.timeExtent.start.getTime();

    stt = new Date(st);
    stt.setTime(stt.getTime() - 100 + 3600000 * tmzon);
    startDt = covertTime(stt);

    var defQuery =
      "tdate < timestamp'" + startDt + "' And flyid = '" + fid + "'";

    //var defQuery ="relationships/0/status = 4";

    return defQuery;
  }

  function covertTime(stt) {
    st1 = stt.toISOString();
    i1 = st1.indexOf("T");
    i2 = st1.indexOf(".", i1);
    // st2=st1.substring(0, st1.length - 5);
    st2 = st1.substring(0, i2);
    st = st2.replace("T", " ");
    return st;
  }
  //  view.ui.add(timeSlider, "manual");

  const basemapGallery = new BasemapGallery({
    view: view,
    source: new LocalBasemapsSource({
      basemaps: [
        Basemap.fromId("hybrid"),
        Basemap.fromId("streets-night-vector"),
        Basemap.fromId("osm"),
      ],
    }),
    container: document.createElement("div"),
  });

  view.ui.add(basemapGallery, {
    position: "bottom-right",
  });

  view.ui.add(timeSlider, {
    position: "bottom-right",
  });
  var layerList = new LayerList({
    //  container :  document.createElement("div"),
    view: view,
  });
  // Adds widget below other elements in the top left corner of the view
  view.ui.add(layerList, {
    view: view,
    position: "bottom-left",
  });

  const searchWidget = new Search({
    view: view,
  });
  // Adds the search widget below other elements in
  // the top left corner of the view
  view.ui.add(searchWidget, {
    position: "top-right",
  });

  var markerSymbolPunkts = {
    type: "point-3d", // autocasts as new PointSymbol3D()
    symbolLayers: [
      {
        type: "object", // autocasts as new ObjectSymbol3DLayer()
        width: 15000, // diameter of the object from east to west in meters
        height: 5000, // height of object in meters
        depth: 15000, // diameter of the object from north to south in meters
        resource: { primitive: "sphere" },
        material: { color: "yellow" },
      },
    ],
  };

  var markerRendererPunkts = {
    type: "simple",
    /* symbol: markerSymbolPunkts*/
    symbol: webDronActive,
  };

  var mksRendererPunkts = {
    type: "simple",
    symbol: markerSymbolPunkts,
    /*symbol:webDronActive*/
  };

  var markerRendererOtherPunkts = {
    type: "simple",
    /* symbol: markerSymbolPunkts*/
    symbol: webDronOther,
  };

  var markerRendererBeforPunkts = {
    type: "simple",
    symbol: markerSymbolPunkts,
  };

  //############################################################################################################

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!17.12.20  Изменил символ маршрута  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  var lineSymbolIntersect = {
    type: "simple-line", // autocasts as SimpleLineSymbol()
    color: [255, 0, 0],
    width: 20,
  };

  var lineSymbolRoute5 = {
    type: "line-3d",
    symbolLayers: [
      {
        type: "path",
        profile: "circle",
        material: {
          color: [255, 0, 0], //,0.5]
        },
        width: 60, // the width in m
        height: 60, // the height in m
        cap: "square", //"round"
      },
    ],
  };

  var lineSymbolRoute4 = {
    type: "line-3d",
    symbolLayers: [
      {
        type: "path",
        profile: "circle",
        material: {
          color: [0, 255, 0], //,0.5]
        },
        width: 60, // the width in m
        height: 60, // the height in m
        cap: "square", //"round"
      },
    ],
  };
  var lineSymbolRoute2 = {
    type: "line-3d",
    symbolLayers: [
      {
        type: "path",
        profile: "circle",
        material: {
          color: [255, 235, 30], //,0.5]
        },
        width: 60, // the width in m
        height: 60, // the height in m
        cap: "square", //"round"
      },
    ],
  };

  var lineRendererRoute2 = {
    type: "simple",
    symbol: lineSymbolRoute2,
  };

  var lineSymbolRoute = {
    type: "line-3d",
    symbolLayers: [
      {
        type: "path",
        profile: "circle",
        material: {
          color: [255, 0, 197],
        },
        width: 50, // the width in m
        height: 50, // the height in m
      },
    ],
  };
  //!!!!!!!!!!!!!!!!!!!!!!!!! 17.12.20 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  var lineRendererRoute = {
    type: "simple",
    symbol: lineSymbolRoute,
  };

  var lineSymbolRoute3 = {
    type: "simple-line", // autocasts as SimpleLineSymbol()
    color: [128, 128, 128],
    width: 2,
  };
  var lineRendererRoute3 = {
    type: "simple",
    symbol: lineSymbolRoute3,
  };

  var lineSymbolBound = {
    type: "simple-line", // autocasts as SimpleLineSymbol()
    color: [255, 235, 190],
    width: 2,
  };
  var lineRendererBound = {
    type: "simple",
    symbol: lineSymbolBound,
  };

  var fillSymbolIntersect = {
    type: "simple-fill", // autocasts as SimpleLineSymbol()
    color: "red",
    width: 2,
  };

  var fillRendererIntersect = {
    type: "simple",
    symbol: fillSymbolIntersect,
  };

  var fillSymbolZone = {
    type: "simple-fill", // autocasts as SimpleLineSymbol()
    color: [255, 0, 197, 0.2],
    width: 2,
  };

  var fillSymbolZoneTen = {
    type: "simple-fill",
    color: [128, 128, 128, 0.2],
    style: "solid",
  };
  var zoneRenderer = {
    type: "simple",
    symbol: fillSymbolZone,
  };

  var zoneRenderer2 = {
    type: "simple",
    symbol: fillSymbolZoneTen,
  };

  var templateMks = {
    // autocasts as new PopupTemplate()
    title: "{BoardNumber}",
    content: [
      {
        // It is also possible to set the fieldInfos outside of the content
        // directly in the popupTemplate. If no fieldInfos is specifically set
        // in the content, it defaults to whatever may be set within the popupTemplate.
        type: "fields",
        fieldInfos: [
          {
            fieldName: "altitude",
            label: "Высота",
            format: {
              places: 0,
              digitSeparator: true,
            },
          },
          {
            fieldName: "speed",
            label: "Скорость",
            format: {
              places: 0,
              digitSeparator: true,
            },
          },
          {
            fieldName: "heading",
            label: "Курс",
            format: {
              places: 0,
              digitSeparator: true,
            },
          },
        ],
      },
    ],
  };

  var templateRoute = {
    // autocasts as new PopupTemplate()
    title: "Маршрут",
    content: [
      {
        // It is also possible to set the fieldInfos outside of the content
        // directly in the popupTemplate. If no fieldInfos is specifically set
        // in the content, it defaults to whatever may be set within the popupTemplate.
        type: "fields",
        fieldInfos: [
          {
            fieldName: "sdate",
            label: "Старт",
          },
          {
            fieldName: "edate",
            label: "Финиш",
          },
        ],
      },
    ],
  };

  var restrictLayer = new FeatureLayer({
    title: "Restrict",
    url: "https://abr-gis-server.airchannel.net/airchannel/rest/services/Restricted_areas/FeatureServer",
  });

  var prohLayer = new FeatureLayer({
    title: "Prohibited",
    url: "https://abr-gis-server.airchannel.net/airchannel/rest/services/SPb/Prohibited_areas/FeatureServer",
  });

  // getUserFly();

  var obstaclesLayer = new SceneLayer({
    url: "https://abr-gis-server.airchannel.net/airchannel/rest/services/Hosted/Obstacles_3D/SceneServer",
  });

  var boundaryLayer = new FeatureLayer({
    url: "https://abr-gis-server.airchannel.net/airchannel/rest/services/Boundary/FeatureServer",
    renderer: lineRendererBound,
  });

  var zoneLayerTen = new FeatureLayer({
    //"https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/templZone/FeatureServer/0",
    url: sourceFlyghtZone,
    outFields: ["*"],
    hasZ: true,
    returnZ: true,
    renderer: zoneRenderer2,
    title: "Fly Zone Proection",
    elevationInfo: {
      mode: "on-the-ground",
    },
    //  offset : -200}
  });

  zoneLayer.renderer = zoneRenderer;

  routeLayer.renderer = lineRendererRoute;
  routeLayer.popupTemplate = templateRoute;

  var routeLayerTen = new FeatureLayer({
    //  url : "https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/OwnerRoute/FeatureServer",
    //   url : "https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/TemplRout/FeatureServer/0",
    //"https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/flyghtRoute/FeatureServer/0",
    url: sourceFlyghtRoute,
    title: "Fly Proection",
    renderer: lineRendererRoute3,
    elevationInfo: {
      mode: "on-the-ground",
    },
    //  offset : -200}
  });
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 17.12.20 добавил слой реального маршрута

  dict = {};
  dict[177] = "flyght1";
  dict[123] = "flyght2";

  const mksLabelClass = new LabelClass({
    labelExpressionInfo: {
      expression:
        "$feature.boardNumber+TextFormatting.NewLine +'Скорость :'+ $feature.Speed+TextFormatting.NewLine +'Высота :'+ $feature.Altitude+TextFormatting.NewLine +'Курс :'+ $feature.Heading",
    },
    symbol: {
      type: "label-3d", // autocasts as new LabelSymbol3D()
      symbolLayers: [
        {
          type: "text", // autocasts as new TextSymbol3DLayer()
          material: { color: [255, 0, 0] },
          size: 12, // points
        },
      ],
    },
  });

  //var mksLayer = new StreamLayer({
  var mksLayer = new FeatureLayer({
    //url:"https://abr-gis-geo.airchannel.net/arcgeo/rest/services/ISS-stream-service-out3/StreamServer",
    //url:"https://abr-gis-geo.airchannel.net/arcgeo/rest/services/SreamMavlink/StreamServer",
    //url:"https://abr-gis-geo.airchannel.net/arcgeo/rest/services/streamBortJS/StreamServer",
    url: "https://abr-gis-server.airchannel.net/airchannel/rest/services/Hosted/TruckLastBJTime/FeatureServer",

    /*
        purgeOptions: {
          displayCount: 1000
        },*/
    popupTemplate: templateMks,
    labelingInfo: [mksLabelClass],
    elevationInfo: {
      //mode:"absolute-height"}
      //mode:"on-the-ground"}
      mode: "relative-to-ground", //,
      /*offset :10 */
    }, //350000}//,
    //renderer:mksRendererPunkts
  });

  var realRouteLayer = new FeatureLayer({
    //"https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/flyghtRoute/FeatureServer/0",
    url: sourceFlyghtRoute,
    popupTemplate: templateRoute,
    renderer: lineRendererRoute2,
    listMode: "hide",
    elevationInfo: {
      mode: "absolute-height",

      // offset : 100
    },
  });

  // Фильтр   реальных маршрутов   "routeid = '1' "
  //При изменении фильтра меняется маршрут
  realRouteLayer.definitionExpression = "objectid  < 0 ";

  webScene.layers.add(realRouteLayer);
  // webScene.layers.add(intersectLayer);

  //alert(intersectLayer)
  realRouteLayer.on("layerview-create", function (event) {
    realRoutelv = event.layerView;
  });
  //#################################################################################################################################################

  var punktsLayer = new FeatureLayer({
    //"https://abr-gis-server.airchannel.net/airchannel/rest/services/PunktRouteTime/FeatureServer",
    url:
      //"https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/PunktPoints/FeatureServer",
      sourceFlyghtPunkts,
    renderer: markerRendererPunkts,
    listMode: "hide",
    elevationInfo: {
      mode: "absolute-height",
      featureReduction: {
        type: "selection",
      },
      //  offset : 140
    },
  });
  punktsLayer.outFields = ["*"];
  punktsLayer.definitionExpression = " objectid < 0";
  var punktsOtherLayer = new FeatureLayer({
    //"https://abr-gis-server.airchannel.net/airchannel/rest/services/PunktRouteTime/FeatureServer",
    url:
      //"https://abr-gis-server.airchannel.net/airchannel/rest/services/Dev/PunktPoints/FeatureServer",
      sourceFlyghtPunkts,
    renderer: markerRendererOtherPunkts,
    listMode: "hide",
    elevationInfo: {
      mode: "absolute-height",

      // offset : 140
    },
  });

  punktsOtherLayer.definitionExpression = " objectid < 0";

  punktsOtherLayer.outFields = ["*"];
  webScene.layers.add(punktsOtherLayer);

  var punktsBeforLayer = new FeatureLayer({
    url: sourceFlyghtSeg,
    renderer: lineRendererRoute2,
    listMode: "hide",
    elevationInfo: {
      mode: "absolute-height",
      //  offset : 140
    },
    popupTemplate: {
      title: "Полет",
      content: [
        {
          type: "fields",
          fieldInfos: [
            {
              fieldName: "relationships/0/status",
              visible: true,
            },
          ],
        },
      ],
    },
  });
  /*
                      var punktsBeforLayerClone = new FeatureLayer({
                        
                         // url: 
                          //sourceFlyghtSeg,                      
                           renderer:uvRenderer,
                           source : segFeatClone,  
                                listMode :"hide",
                             elevationInfo:{
                                 mode:"absolute-height"
                               //  offset : 140
                               },
                               popupTemplate: {
                                 title: "Полет экспер",
                                 content: [
                                     {
                                       type: "fields",
                                      fieldInfos :
                                      [
                                       {
                                         fieldName: "relationships/0/status",
                                         visible: true
                                 
                               }]
                             }
                           ]
                         }
             
                                  });

                     routeLayerTen.queryRelatedFeatures(new RelationshipQuery({relationshipId: routeLayerTen.relationships[0].id, }));
*/

  punktsBeforLayer.outFields = ["*"];
  // alert(routeLayer.fieldsIndex.dateFields.length);
  punktsBeforLayer.definitionExpression = "objectid < 0";
  buildDefinitionBeforQueryPunkts();
  //punktsBeforLayer.outFields = ["tdate","routeid"];

  //

  webScene.layers.add(punktsBeforLayer);
  // webScene.layers.add(punktsBeforLayerClone);

  //#############################################################################################################################################

  let grpMobail = new GroupLayer();
  grpMobail.title = "Мобильная связь";
  let tele2 = new GroupLayer();
  tele2.title = "Tele2";
  var tele2g = new WebTileLayer({
    urlTemplate: "https://new-msk.tele2.ru/maps/_2g/{level}/{col}/{row}.png",
    title: "TELE2_2G",
    visible: false,
  });
  var tele3g = new WebTileLayer({
    urlTemplate: "https://new-msk.tele2.ru/maps/_3g//{level}/{col}/{row}",
    title: "TELE2_3G",
    visible: false,
  });
  var telelte = new WebTileLayer({
    urlTemplate: "https://new-msk.tele2.ru/maps/_4g//{level}/{col}/{row}",
    title: "TELE2_LTE",
    visible: false,
  });
  tele2.layers.add(tele2g);
  tele2.layers.add(tele3g);
  tele2.layers.add(telelte);
  grpMobail.layers.add(tele2);

  let mts = new GroupLayer();
  mts.title = "MTS";
  var mts2g = new WebTileLayer({
    urlTemplate: "https://tiles.qsupport.mts.ru/g2_New/{level}/{col}/{row}",
    title: "MTS_2G",
    visible: false,
  });
  var mts3g = new WebTileLayer({
    urlTemplate: "https://tiles.qsupport.mts.ru/g3_New/{level}/{col}/{row}",
    title: "MTS_3G",
    visible: false,
  });
  var mtslte = new WebTileLayer({
    urlTemplate: "https://tiles.qsupport.mts.ru/glte_New/{level}/{col}/{row}",
    title: "MTS_LTE",
    visible: false,
  });
  mts.layers.add(mts2g);
  mts.layers.add(mts3g);
  mts.layers.add(mtslte);
  grpMobail.layers.add(mts);

  let megafon = new GroupLayer();
  megafon.title = "Megafon";
  var megafon2g = new WebTileLayer({
    urlTemplate:
      "https://coverage-map.megafon.ru/{level}/{col}/{row}.png?layers=2g",
    title: "Megafon_2G",
    visible: false,
  });
  var megafon3g = new WebTileLayer({
    urlTemplate:
      "https://coverage-map.megafon.ru/{level}/{col}/{row}.png?layers=3g",
    title: "Megafon_3G",
    visible: false,
  });
  var megafonlte = new WebTileLayer({
    urlTemplate:
      "https://coverage-map.megafon.ru/{level}/{col}/{row}.png?layers=lte",
    title: "Megafon_LTE",
    visible: false,
  });
  var megafonltep = new WebTileLayer({
    urlTemplate:
      "https://coverage-map.megafon.ru/{level}/{col}/{row}.png?layers=lte_plus",
    title: "Megafon_LTE+",
    visible: false,
  });

  megafon.layers.add(megafon2g);
  megafon.layers.add(megafon3g);
  megafon.layers.add(megafonlte);
  megafon.layers.add(megafonltep);
  grpMobail.layers.add(megafon);

  let beeline = new GroupLayer();

  beeline.title = "Beeline";
  var beeline2g = new WebTileLayer({
    urlTemplate:
      "https://static.beeline.ru/upload/tiles/2G/current/{level}/{col}/{row}.png",
    title: "Beeline_2G",
    visible: false,
  });
  var beeline3g = new WebTileLayer({
    urlTemplate:
      "https://static.beeline.ru/upload/tiles/3G/current//{level}/{col}/{row}",
    title: "Beeline_3G",
    visible: false,
  });
  var beelinelte = new WebTileLayer({
    urlTemplate:
      "https://static.beeline.ru/upload/tiles/4G/current//{level}/{col}/{row}",
    title: "Beeline_LTE",
    visible: false,
  });
  beeline.layers.add(beeline2g);
  beeline.layers.add(beeline3g);
  beeline.layers.add(beelinelte);
  grpMobail.layers.add(beeline);

  //#############################################################################################################################################

  webScene.layers.add(grpMobail);

  defQ = buildDefinitionQuery();

  routeLayer.definitionExpression = defQ;
  zoneLayer.definitionExpression = defQ;

  webScene.layers.add(boundaryLayer);

  webScene.layers.add(zoneLayer);
  webScene.layers.add(zoneLayerTen);

  zoneLayerTen.definitionExpression = buildDefinitionQueryTen();

  webScene.layers.add(routeLayer);
  webScene.layers.add(routeLayerTen);
  routeLayerTen.definitionExpression = buildDefinitionQueryTen();

  webScene.layers.add(punktsLayer);
  bufferLayer.title = "Confliсt";
  webScene.layers.add(bufferLayer);

  webScene.layers.add(mksLayer);

  //alert(mksLayer.timeInfo);

  // these two highlight handlers are used for selection and hovering over features
  var highlightSelect, highlightHover;

  // initialize AbortController

  view.on("click", function (event) {
    if (event.button == 2)
      // правая кнопка - очистка графики
      bufferLayer.removeAll();

    queryPunkt(event);
  });

  function getCheckGeometry(rdd, func) {
    const query = new Query();
    query.where = "routeid = '" + rdd + "';// And numb >= 0 ";
    query.outSpatialReference = { wkid: 4326 };
    query.returnGeometry = true;
    (query.returnZ = true), (query.returnM = true), (query.outFields = ["*"]);

    routeLayerTen.queryFeatures(query).then(function (featureSet) {
      paths = [];
      pts = [];
      if (featureSet.features.length > 0) {
        for (
          k = 1;
          k < featureSet.features[0].geometry.paths[0].length - 1;
          k++
        )
          pts.push(featureSet.features[0].geometry.paths[0][k]);

        paths.push(pts);

        var checkSdate = featureSet.features[0].getAttribute("sdate");

        //alert(checkSdate);
        checkGeometry = new Polyline({
          hasZ: true,
          hasM: true,
          //  paths: featureSet.features[0].geometry.paths,
          paths: paths,
          spatialReference: { wkid: 4326 },
        });
        checkInd = 0;
        changeExtent2(checkGeometry.extent);
        if (func != null) func();
      }
      //featureSet.features[0].geometry;
      else {
        query.where = "routeid = '" + rdd + "'";

        (query.returnM = false),
          zoneLayerTen.queryFeatures(query).then(function (featureSet) {
            if (featureSet.features.length > 0) {
              for (
                k = 0;
                k < featureSet.features[0].geometry.rings[0].length;
                k++
              )
                pts.push(featureSet.features[0].geometry.rings[0][k]);
              paths.push(pts);
              checkSdate = featureSet.features[0].getAttribute("sdate");
              checkGeometry = new Polygon({
                hasZ: true,
                hasM: false,
                //  paths: featureSet.features[0].geometry.paths,
                rings: paths,
                spatialReference: { wkid: 4326 },
              });

              changeExtent2(checkGeometry.extent);
              if (func != null) func();
            }
          });
      }
    });
  }

  function queryPunkt(screenPoint) {
    view.hitTest(screenPoint).then(function (response) {
      var result = response.results[0];

      if (result) {
        //alert(result.graphic.getAttribute("describe"));
        ss = result.graphic.getAttribute("describe");
        // alert(ss) ;
        view.popup.open({
          features: [result.graphic],
          content: ss,
          featureMenuOpen: true,
        });
      }
    });
    return;
  }

  function checkInterRoute(buff, buff2, sdate, edate, checkLayer) {
    distance = 500;
    units = "meters";
    //wh="flyid <> '"+fid+"' AND tdate >= timestamp'"+ sdate+"' And tdate < timestamp'"+edate+ "'"

    wh =
      "flyid <> '" +
      fid +
      "' AND sdate >= timestamp'" +
      sdate +
      "' And sdate <= timestamp'" +
      edate +
      "' Or flyid <> '" +
      fid +
      "' AND edate >= timestamp'" +
      sdate +
      "' And edate <= timestamp'" +
      edate +
      "' Or flyid <> '" +
      fid +
      "' AND sdate <= timestamp'" +
      sdate +
      "' And edate >= timestamp'" +
      edate +
      "'";

    checkLayer
      .queryFeatures({
        geometry: buff,
        // distance and units will be null if basic query selected
        distance: distance,
        units: units,
        where: wh,
        spatialRelationship: "intersects",
        returnGeometry: true,
        returnQueryGeometry: true,
        outFields: ["*"],
      })
      .then(function (featureSet) {
        roats = [];
        flyghts = [];
        whh = "";
        whFl = "";

        if (featureSet.features.length > 0) {
          for (m = 0; m < featureSet.features.length; m++) {
            var rgeom = featureSet.features[m].geometry;
            var rgeom1 = rgeom;
            bufcon == rgeom;
            if (rgeom.type == "polyline") {
              var path1 = [];
              var part = [];

              for (let s = 1; s < rgeom.paths[0].length - 1; s++)
                part.push([
                  rgeom.paths[0][s][0],
                  rgeom.paths[0][s][1],
                  rgeom.paths[0][s][2],
                ]);
              path1.push(part);
              var rgeom1 = new Polyline({
                paths: path1,
                hasZ: true,
                hasM: true,
                spatialReference: { wkid: 4326 },
              });
              bufcon = geometryEngine.geodesicBuffer(rgeom1, 500, "meters");
            }
            //bufcon=geometryEngine.geodesicBuffer(rgeom1, 500, "meters");
            inter = geometryEngine.intersect(buff, bufcon);
            // nm="";
            // flid=featureSet.features[m].getAttribute("routeid")
            // var owid = featureSet.features[m].getAttribute("ownerid");
            var edt = new Date(
              featureSet.features[m].getAttribute("edate")
            ).toLocaleString();
            var sdt = new Date(
              featureSet.features[m].getAttribute("sdate")
            ).toLocaleString();

            let Att = {
              start: sdt.toString(),
              finish: edt.toString(),
              owner: getUserName(owid),
            };
            if (inter instanceof Array) {
              for (j = 0; j < inter.length; j++) {
                gg = new Graphic({
                  geometry: inter[j],
                  symbol: fillSymbolIntersect,
                  spatialReference: srw,
                });
                /*
                       gg. attributes = {
                        "describe": "Route[ name  : "+nm+"]"
                      }; */
                gg.attributes = Att;
                gg.popupTemplate = templateBufferRoute;

                bufferLayer.add(gg);
              }
            } else if (inter != null) {
              gg = new Graphic({
                geometry: inter,
                symbol: fillSymbolIntersect,
                spatialReference: srw,
              });
              /*
                      gg. attributes = {
                        "describe": "Route[ name  : "+nm+"]"
                      };*/
              gg.attributes = Att;
              gg.popupTemplate = templateBufferRoute;
              bufferLayer.add(gg);
            }
          }

          // });
          // });
        }
      });
  }

  function checkElevation(delt) {
    wh = "flyid = '" + fid + "'";
    // alert(wh)
    routeLayer
      .queryFeatures({
        where: wh,
        returnGeometry: true,
        returnQueryGeometry: true,
        returnZ: true,
        returnM: true,
        outFields: ["*"],
      })
      .then(function (featureSet) {
        evalGeometry = new Polyline({
          hasZ: true,
          hasM: true,
          paths: featureSet.features[0].geometry.paths,
          spatialReference: { wkid: 4326 },
        });
        view.map.ground
          .queryElevation(evalGeometry, { returnSampleInfo: true })
          // Successfully sampled all points
          .then(function (result) {
            // Print result of each sampled point to the console
            geom4 = result.geometry;
            pts1 = geom4.paths;
            pts2 = evalGeometry.paths;

            sost = 0;
            outpts = [];
            el = [];
            //alert(pts1[0].length)
            //alert(pts2[0].length)
            for (i = 1; i < pts1[0].length - 1; i++) {
              flag = false;

              // if (pts2[0][i+1][2]-pts1[0][i][2] <delt )
              if (pts2[0][i][2] - pts1[0][i][2] < delt) {
                //  alert(pts2[0][i+1][2]-pts1[0][i][2]);
                //  alert(sost);
                if (sost == 0) {
                  if (i > 1) {
                    x = (pts1[0][i][0] + pts1[0][i - 1][0]) / 2;
                    y = (pts1[0][i][1] + pts1[0][i - 1][1]) / 2;
                    z = (pts1[0][i][2] + pts1[0][i - 1][2]) / 2;
                    lM = (pts1[0][i][3] + pts1[0][i - 1][3]) / 2;
                    el.push([x, y, z, lM]);
                  }
                  sost = 1;
                }

                x = pts1[0][i][0];
                y = pts1[0][i][1];
                z = pts1[0][i][2];
                lM = pts1[0][i][3];

                el.push([x, y, z, lM]);

                if (i == pts1[0].length - 2) flag = true;
              } else {
                if (sost == 1) {
                  x = (pts1[0][i][0] + pts1[0][i - 1][0]) / 2;
                  y = (pts1[0][i][1] + pts1[0][i - 1][1]) / 2;
                  z = (pts1[0][i][2] + pts1[0][i - 1][2]) / 2;
                  lM = (pts1[0][i][3] + pts1[0][i - 1][3]) / 2;
                  el.push([x, y, z, lM]);
                  flag = true;
                }
                // alert("++++")
                sost = 0;
              }
              // alert("-----")
              if (flag) {
                outpts.push(el);
                inter = new Polyline({
                  hasZ: true,
                  hasM: true,
                  paths: outpts,
                  spatialReference: { wkid: 4326 },
                });

                gg = new Graphic({
                  geometry: inter,
                  symbol: lineSymbolIntersect,
                  spatialReference: srw,
                });
                gg.attributes = {
                  describe: "dangerous approach to earth !!! < " + delt,
                };

                gg.popupTemplate = templateBuffer;
                bufferLayer.add(gg);

                outpts = [];
                el = [];
              }
            }
            //alert(pts1[0].length)
            //alert(pts2[0].length)
          });
      });
  }

  function checkInterProc(buff, checkLayer) {
    //buff = projection.project(buffer, sr1,projection.getTransformation(buffer.spatialReference,sr1));

    distance = 0;
    units = "meters";

    checkLayer
      .queryFeatures({
        // where :"OBJECTID = 2",
        geometry: buff,
        // distance and units will be null if basic query selected
        distarence: distance,
        units: units,
        spatialRelationship: "intersects",
        returnGeometry: true,
        //returnQueryGeometry: true,
        outFields: ["*"],
      })
      .then(function (featureSet) {
        if (featureSet.features.length > 0) {
          for (k = 0; k < featureSet.features.length; k++) {
            intRestGeometry = new Polygon({
              hasZ: false,
              hasM: false,
              rings: featureSet.features[k].geometry.rings,
              spatialReference: { wkid: 4326 },
            });

            inter = geometryEngine.intersect(buff, intRestGeometry);
            if (checkLayer.title == "Restrict")
              Attrs = {
                describe:
                  "Restriction [\n name  : " +
                  featureSet.features[k].getAttribute("name") +
                  "\n identification: " +
                  featureSet.features[k].getAttribute("identification") +
                  "\n remarks: " +
                  featureSet.features[k].getAttribute("remarks") +
                  "\n limit : " +
                  featureSet.features[k].getAttribute("limit") +
                  "\n ]",
              };
            if (checkLayer.title == "Prohibited") {
              Attrs = {
                describe:
                  "Prohibite  [\n name  : " +
                  featureSet.features[k].getAttribute("name") +
                  "\n identification: " +
                  featureSet.features[k].getAttribute("identification") +
                  "\n remarks: " +
                  featureSet.features[k].getAttribute("remarks") +
                  "\n limit : " +
                  featureSet.features[k].getAttribute("limit") +
                  "\n ]",
              };
            }
            if (inter instanceof Array) {
              for (j = 0; j < inter.length; j++) {
                gg = new Graphic({
                  geometry: inter[j],
                  symbol: fillSymbolIntersect,
                  spatialReference: { wkid: 4326 },
                });
                gg.attributes = Attrs;
                gg.popupTemplate = templateBuffer;
                bufferLayer.add(gg);
              }
            } else if (inter != null) {
              gg = new Graphic({
                geometry: inter,
                symbol: fillSymbolIntersect,
                spatialReference: { wkid: 4326 },
              });

              gg.attributes = Attrs;
              gg.popupTemplate = templateBuffer;
              bufferLayer.add(gg);
            }
          }
        }
      });
  }

  function setTimeSlider(tm, fm) {
    st0 = new Date(tm);
    st1 = new Date(tm);
    // st1.setSeconds(st1.getSeconds()-1800)
    timeSlider.values = [st0];
    st2 = new Date(fm);
    st2.setSeconds(st2.getSeconds() + 10);

    timeExtent = {
      start: st1,
      end: st2,
    };

    val = parseInt(st2.getTime() - st1.getTime() / 100000, 10);
    stops = {
      interval: {
        value: val,

        unit: "seconds",
      },
    };

    timeSlider.fullTimeExtent = timeExtent;
    //  timeSlider.stops=stops;
    // timeSlider.playRate=1000;
  }

  let otladResponse =
    '{"lat":55.7482,"lon":37.5403,"timezone":"Europe/Moscow","timezone_offset":10800,"current":{"dt":1614684476,"sunrise":1614658721,"sunset":1614697538,"temp":277.15,"feels_like":269.86,"pressure":1006,"humidity":60,"dew_point":270.45,"uvi":0.76,"clouds":75,"visibility":10000,"wind_speed":7,"wind_deg":290,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}]}' +
    ',"minutely":[{"dt":1614684480,"precipitation":0},{"dt":1614684540,"precipitation":0},{"dt":1614684600,"precipitation":0},{"dt":1614684660,"precipitation":0},{"dt":1614684720,"precipitation":0},{"dt":1614684780,"precipitation":0},{"dt":1614684840,"precipitation":0},{"dt":1614684900,"precipitation":0},{"dt":1614684960,"precipitation":0},{"dt":1614685020,"precipitation":0},{"dt":1614685080,"precipitation":0.1034},' +
    '{"dt":1614685140,"precipitation":0.1092},{"dt":1614685200,"precipitation":0.115},{"dt":1614685260,"precipitation":0.165},{"dt":1614685320,"precipitation":0.215},{"dt":1614685380,"precipitation":0.265},{"dt":1614685440,"precipitation":0.315},{"dt":1614685500,"precipitation":0.365},{"dt":1614685560,"precipitation":0.4044},{"dt":1614685620,"precipitation":0.4438},{"dt":1614685680,"precipitation":0.4832},' +
    '{"dt":1614685740,"precipitation":0.5226},{"dt":1614685800,"precipitation":0.562},{"dt":1614685860,"precipitation":0.6494},{"dt":1614685920,"precipitation":0.7368},{"dt":1614685980,"precipitation":0.8242},{"dt":1614686040,"precipitation":0.9116},{"dt":1614686100,"precipitation":0.999},{"dt":1614686160,"precipitation":0.949},{"dt":1614686220,"precipitation":0.899},{"dt":1614686280,"precipitation":0.849},' +
    '{"dt":1614686340,"precipitation":0.799},{"dt":1614686400,"precipitation":0.749},{"dt":1614686460,"precipitation":0.6964},{"dt":1614686520,"precipitation":0.6438},{"dt":1614686580,"precipitation":0.5912},{"dt":1614686640,"precipitation":0.5386},{"dt":1614686700,"precipitation":0.486},{"dt":1614686760,"precipitation":0.4244},{"dt":1614686820,"precipitation":0.3628},{"dt":1614686880,"precipitation":0.3012},' +
    '{"dt":1614686940,"precipitation":0.2396},{"dt":1614687000,"precipitation":0.178},{"dt":1614687060,"precipitation":0.1496},{"dt":1614687120,"precipitation":0.1212},{"dt":1614687180,"precipitation":0},{"dt":1614687240,"precipitation":0},{"dt":1614687300,"precipitation":0},{"dt":1614687360,"precipitation":0},{"dt":1614687420,"precipitation":0},{"dt":1614687480,"precipitation":0},{"dt":1614687540,"precipitation":0},{"dt":1614687600,"precipitation":0},{"dt":1614687660,"precipitation":0},{"dt":1614687720,"precipitation":0},{"dt":1614687780,"precipitation":0},{"dt":1614687840,"precipitation":0},' +
    '{"dt":1614687900,"precipitation":0},{"dt":1614687960,"precipitation":0},{"dt":1614688020,"precipitation":0},{"dt":1614688080,"precipitation":0}]' +
    ',"hourly":[{"dt":1614682800,"temp":277.15,"feels_like":271.4,"pressure":1006,"humidity":60,"dew_point":270.45,"uvi":0.76,"clouds":75,"visibility":10000,"wind_speed":4.8,"wind_deg":304,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"pop":0.37,"snow":{"1h":0.11}},{"dt":1614686400,"temp":275.81,"feels_like":270.3,"pressure":1007,"humidity":77,"dew_point":272.3,"uvi":0.5,"clouds":86,"visibility":10000,"wind_speed":4.84,"wind_deg":307,"weather":[{"id":601,"main":"Snow","description":"snow","icon":"13d"}],"pop":0.37,"snow":{"1h":0.75}},' +
    '{"dt":1614690000,"temp":274.97,"feels_like":269.76,"pressure":1007,"humidity":84,"dew_point":272.63,"uvi":0.27,"clouds":73,"visibility":10000,"wind_speed":4.49,"wind_deg":309,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"pop":0},{"dt":1614693600,"temp":274.38,"feels_like":269.53,"pressure":1008,"humidity":90,"dew_point":272.95,"uvi":0.09,"clouds":82,"visibility":10000,"wind_speed":4.05,"wind_deg":309,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"pop":0},' +
    '{"dt":1614697200,"temp":272.61,"feels_like":267.9,"pressure":1008,"humidity":96,"dew_point":272.12,"uvi":0,"clouds":79,"visibility":10000,"wind_speed":3.67,"wind_deg":309,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"pop":0},{"dt":1614700800,"temp":273.02,"feels_like":267.74,"pressure":1009,"humidity":96,"dew_point":271.25,"uvi":0,"clouds":82,"visibility":5468,"wind_speed":4.57,"wind_deg":320,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"pop":0},{"dt":1614704400,"temp":272.83,"feels_like":267.06,"pressure":1010,"humidity":97,"dew_point":271.38,"uvi":0,"clouds":86,"visibility":2124,"wind_speed":5.25,"wind_deg":322,' +
    '"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0.05},{"dt":1614708000,"temp":272.4,"feels_like":266.58,"pressure":1011,"humidity":97,"dew_point":270.94,"uvi":0,"clouds":89,"visibility":2366,"wind_speed":5.25,"wind_deg":326,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0.09},{"dt":1614711600,"temp":272.04,"feels_like":265.95,"pressure":1011,"humidity":96,"dew_point":270.13,"uvi":0,"clouds":100,"visibility":6553,"wind_speed":5.53,"wind_deg":326,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0.34},' +
    '{"dt":1614715200,"temp":271.47,"feels_like":265.34,"pressure":1011,"humidity":96,"dew_point":269.29,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":5.48,"wind_deg":329,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0.01},{"dt":1614718800,"temp":270.33,"feels_like":264.54,"pressure":1012,"humidity":95,"dew_point":267.78,"uvi":0,"clouds":94,"visibility":10000,"wind_speed":4.78,"wind_deg":327,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0.04},{"dt":1614722400,"temp":269.34,"feels_like":264.11,"pressure":1013,"humidity":98,"dew_point":268.35,"uvi":0,"clouds":72,"visibility":319,"wind_speed":3.88,"wind_deg":319,' +
    '"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"pop":0.19},{"dt":1614726000,"temp":270.25,"feels_like":264.61,"pressure":1014,"humidity":97,"dew_point":269.05,"uvi":0,"clouds":77,"visibility":1741,"wind_speed":4.6,"wind_deg":329,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"pop":0.35,"snow":{"1h":0.18}},{"dt":1614729600,"temp":269.56,"feels_like":263.61,"pressure":1014,"humidity":97,"dew_point":268.09,"uvi":0,"clouds":80,"visibility":8225,"wind_speed":4.93,"wind_deg":319,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"pop":0.08},{"dt":1614733200,"temp":268.7,"feels_like":262.11,"pressure":1015,"humidity":95,"dew_point":266.49,"uvi":0,"clouds":84,"visibility":10000,"wind_speed":5.66,"wind_deg":319,' +
    '"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"pop":0},{"dt":1614736800,"temp":267.98,"feels_like":261.74,"pressure":1015,"humidity":95,"dew_point":265.74,"uvi":0,"clouds":43,"visibility":10000,"wind_speed":5.06,"wind_deg":316,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"pop":0},{"dt":1614740400,"temp":267.65,"feels_like":261.56,"pressure":1015,"humidity":95,"dew_point":265.39,"uvi":0,"clouds":29,"visibility":10000,"wind_speed":4.8,"wind_deg":314,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"pop":0},{"dt":1614744000,"temp":267.37,"feels_like":261.6,"pressure":1016,"humidity":95,"dew_point":265.12,"uvi":0,"clouds":21,"visibility":10000,"wind_speed":4.3,"wind_deg":309,' +
    '"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"pop":0},{"dt":1614747600,"temp":267.55,"feels_like":261.9,"pressure":1016,"humidity":95,"dew_point":265.46,"uvi":0.12,"clouds":17,"visibility":10000,"wind_speed":4.16,"wind_deg":311,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"pop":0},{"dt":1614751200,"temp":268.82,"feels_like":262.78,"pressure":1016,"humidity":95,"dew_point":266.3,"uvi":0.37,"clouds":14,"visibility":10000,"wind_speed":4.9,"wind_deg":312,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"pop":0},{"dt":1614754800,"temp":270.29,"feels_like":264.39,"pressure":1016,"humidity":94,"dew_point":267.39,"uvi":0.71,"clouds":0,"visibility":10000,"wind_speed":4.9,"wind_deg":311,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"pop":0},' +
    '{"dt":1614758400,"temp":271.33,"feels_like":265.32,"pressure":1015,"humidity":95,"dew_point":268.79,"uvi":1.07,"clouds":0,"visibility":10000,"wind_speed":5.26,"wind_deg":298,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"pop":0},{"dt":1614762000,"temp":272.26,"feels_like":266.03,"pressure":1015,"humidity":96,"dew_point":270.14,"uvi":1.3,"clouds":0,"visibility":10000,"wind_speed":5.78,"wind_deg":291,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"pop":0},{"dt":1614765600,"temp":272.67,"feels_like":266.37,"pressure":1015,"humidity":96,"dew_point":270.52,"uvi":0.83,"clouds":23,"visibility":8864,"wind_speed":5.95,"wind_deg":290,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"pop":0},' +
    '{"dt":1614769200,"temp":272.96,"feels_like":266.91,"pressure":1014,"humidity":96,"dew_point":270.79,"uvi":0.69,"clouds":38,"visibility":8711,"wind_speed":5.65,"wind_deg":291,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"pop":0},{"dt":1614772800,"temp":273.06,"feels_like":267.06,"pressure":1014,"humidity":95,"dew_point":270.68,"uvi":0.45,"clouds":49,"visibility":10000,"wind_speed":5.57,"wind_deg":287,"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"pop":0},{"dt":1614776400,"temp":272.91,"feels_like":267.02,"pressure":1014,"humidity":96,"dew_point":270.64,"uvi":0.19,"clouds":100,"visibility":10000,"wind_speed":5.41,"wind_deg":287,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0},{"dt":1614780000,"temp":272.6,"feels_like":266.68,"pressure":1013,"humidity":96,"dew_point":270.52,"uvi":0.06,"clouds":100,"visibility":10000,"wind_speed":5.4,"wind_deg":284,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0},{"dt":1614783600,"temp":272.3,"feels_like":266.41,"pressure":1013,"humidity":96,"dew_point":270.3,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":5.29,"wind_deg":285,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0},{"dt":1614787200,"temp":271.94,"feels_like":266.09,"pressure":1013,"humidity":96,"dew_point":270.03,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":5.17,"wind_deg":283,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0},{"dt":1614790800,"temp":271.79,"feels_like":266.04,"pressure":1013,"humidity":96,"dew_point":269.89,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":5,"wind_deg":280,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0},{"dt":1614794400,"temp":271.73,"feels_like":265.97,"pressure":1012,"humidity":96,"dew_point":269.95,"uvi":0,"clouds":100,"visibility":7533,"wind_speed":5,"wind_deg":279,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0},{"dt":1614798000,"temp":271.67,"feels_like":266.29,"pressure":1011,"humidity":97,"dew_point":270.06,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":4.47,"wind_deg":274,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0},{"dt":1614801600,"temp":271.75,"feels_like":266.75,"pressure":1010,"humidity":96,"dew_point":270.07,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":3.92,"wind_deg":260,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0},{"dt":1614805200,"temp":271.27,"feels_like":265.77,"pressure":1009,"humidity":96,"dew_point":269.56,"uvi":0,"clouds":98,"visibility":10000,"wind_speed":4.55,"wind_deg":251,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0},{"dt":1614808800,"temp":271.25,"feels_like":265.36,"pressure":1008,"humidity":97,"dew_point":269.96,"uvi":0,"clouds":99,"visibility":1869,"wind_speed":5.13,"wind_deg":247,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0},{"dt":1614812400,"temp":272.22,"feels_like":266.48,"pressure":1007,"humidity":98,"dew_point":271.28,"uvi":0,"clouds":99,"visibility":561,"wind_speed":5.12,"wind_deg":248,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"pop":0.34,"snow":{"1h":0.12}},{"dt":1614816000,"temp":273.45,"feels_like":267.25,"pressure":1006,"humidity":97,"dew_point":272.81,"uvi":0,"clouds":99,"visibility":76,"wind_speed":6,"wind_deg":253,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"pop":0.22,"snow":{"1h":0.19}},{"dt":1614819600,"temp":273.65,"feels_like":266.67,"pressure":1004,"humidity":96,"dew_point":272.93,"uvi":0,"clouds":100,"visibility":210,"wind_speed":7.12,"wind_deg":251,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"pop":0.65,"snow":{"1h":0.21}},{"dt":1614823200,"temp":273.52,"feels_like":266.63,"pressure":1003,"humidity":95,"dew_point":271.82,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":6.93,"wind_deg":252,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0.57},{"dt":1614826800,"temp":272.97,"feels_like":266.11,"pressure":1002,"humidity":97,"dew_point":271.51,"uvi":0,"clouds":100,"visibility":936,"wind_speed":6.84,"wind_deg":256,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"pop":0.53,"snow":{"1h":0.12}},{"dt":1614830400,"temp":272.57,"feels_like":265.69,"pressure":1001,"humidity":98,"dew_point":271.59,"uvi":0,"clouds":100,"visibility":288,"wind_speed":6.82,"wind_deg":263,' +
    '"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13n"}],"pop":0.57,"snow":{"1h":0.19}},{"dt":1614834000,"temp":272.59,"feels_like":265.85,"pressure":1001,"humidity":98,"dew_point":271.51,"uvi":0.15,"clouds":100,"visibility":555,"wind_speed":6.62,"wind_deg":264,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"pop":0.6,"snow":{"1h":0.18}},{"dt":1614837600,"temp":273.13,"feels_like":266.67,"pressure":1001,"humidity":97,"dew_point":271.6,"uvi":0.46,"clouds":100,"visibility":10000,"wind_speed":6.3,"wind_deg":265,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0.6},{"dt":1614841200,"temp":273.71,"feels_like":267.6,"pressure":1000,"humidity":94,"dew_point":272.16,"uvi":0.46,"clouds":100,"visibility":10000,"wind_speed":5.83,"wind_deg":268,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0.03},' +
    '{"dt":1614844800,"temp":273.88,"feels_like":268.25,"pressure":1000,"humidity":93,"dew_point":272.39,"uvi":0.7,"clouds":100,"visibility":10000,"wind_speed":5.15,"wind_deg":265,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0.11},{"dt":1614848400,"temp":273.62,"feels_like":268.11,"pressure":999,"humidity":96,"dew_point":273.16,"uvi":0.85,"clouds":100,"visibility":335,"wind_speed":5.01,"wind_deg":258,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"pop":0.22,"snow":{"1h":0.12}},{"dt":1614852000,"temp":273.7,"feels_like":268.23,"pressure":999,"humidity":98,"dew_point":273.5,"uvi":1.03,"clouds":100,"visibility":63,"wind_speed":5.03,"wind_deg":253,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"pop":0.47,"snow":{"1h":0.17}}],' +
    '"daily":[{"dt":1614675600,"sunrise":1614658721,"sunset":1614697538,"temp":{"day":274.27,"min":271.47,"max":277.15,"night":271.47,"eve":272.61,"morn":274.83},"feels_like":{"day":268.92,"night":265.34,"eve":267.9,"morn":269.12},"pressure":1008,"humidity":98,"dew_point":274.03,"wind_speed":4.99,"wind_deg":296,"weather":[{"id":601,"main":"Snow","description":"snow","icon":"13d"}],"clouds":99,"pop":0.37,"snow":0.98,"uvi":0.92},{"dt":1614762000,"sunrise":1614744970,"sunset":1614784064,"temp":{"day":272.26,"min":267.37,"max":273.06,"night":271.75,"eve":272.3,"morn":267.65},"feels_like":{"day":266.03,"night":266.75,"eve":266.41,"morn":261.56},"pressure":1015,"humidity":96,"dew_point":270.14,"wind_speed":5.78,"wind_deg":291,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":0,"pop":0.35,"snow":0.18,"uvi":1.3},' +
    '{"dt":1614848400,"sunrise":1614831218,"sunset":1614870589,"temp":{"day":273.62,"min":267.04,"max":273.88,"night":267.04,"eve":271.64,"morn":272.97},"feels_like":{"day":268.11,"night":261.95,"eve":267.17,"morn":266.11},"pressure":999,"humidity":96,"dew_point":273.16,"wind_speed":5.01,"wind_deg":258,"weather":[{"id":601,"main":"Snow","description":"snow","icon":"13d"}],"clouds":100,"pop":0.96,"snow":4.31,"uvi":1.03},{"dt":1614934800,"sunrise":1614917465,"sunset":1614957114,"temp":{"day":269.15,"min":264.4,"max":269.92,"night":265.06,"eve":266.93,"morn":264.4},"feels_like":{"day":265.25,"night":260.41,"eve":262.51,"morn":259.89},"pressure":1009,"humidity":95,"dew_point":267.07,"wind_speed":1.89,"wind_deg":285,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":48,"pop":0.31,"snow":0.5,"uvi":1.32},' +
    '{"dt":1615021200,"sunrise":1615003713,"sunset":1615043638,"temp":{"day":264.97,"min":262.6,"max":265.34,"night":262.6,"eve":263.43,"morn":262.77},"feels_like":{"day":259.33,"night":256.98,"eve":258.74,"morn":258.09},"pressure":1016,"humidity":93,"dew_point":262.07,"wind_speed":3.79,"wind_deg":329,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":100,"pop":0.27,"snow":0.12,"uvi":1.18},{"dt":1615107600,"sunrise":1615089959,"sunset":1615130162,"temp":{"day":272.71,"min":263.89,"max":272.71,"night":264.14,"eve":265.41,"morn":267.02},"feels_like":{"day":264.21,"night":256.54,"eve":257.96,"morn":258.75},"pressure":990,"humidity":97,"dew_point":271.34,"wind_speed":9.13,"wind_deg":234,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":100,"pop":1,"snow":3.49,"uvi":2},' +
    '{"dt":1615194000,"sunrise":1615176205,"sunset":1615216686,"temp":{"day":261.21,"min":259.36,"max":264.53,"night":259.36,"eve":260.62,"morn":264.01},"feels_like":{"day":253.68,"night":253.13,"eve":254.07,"morn":256.4},"pressure":1004,"humidity":92,"dew_point":258.31,"wind_speed":6.11,"wind_deg":312,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":100,"pop":0.54,"snow":0.24,"uvi":2},{"dt":1615280400,"sunrise":1615262450,"sunset":1615303209,"temp":{"day":259.78,"min":255.96,"max":262.19,"night":261.12,"eve":260.86,"morn":255.96},"feels_like":{"day":253.65,"night":256.26,"eve":256.01,"morn":249.95},"pressure":1017,"humidity":91,"dew_point":256.58,"wind_speed":3.98,"wind_deg":315,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":100,"pop":0,"uvi":2}],' +
    '"alerts":[{"sender_name":"","event":"Wind","start":1614715200,"end":1614740400,"description":""},{"sender_name":"","event":"Ветер","start":1614715200,"end":1614740400,"description":"местами порывы 15"},{"sender_name":"","event":"Other dangers","start":1614682800,"end":1614848400,"description":""},{"sender_name":"","event":"Прочие опасности","start":1614682800,"end":1614848400,"description":"Гололедица"}]}';
});
