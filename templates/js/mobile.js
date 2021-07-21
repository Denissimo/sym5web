
function addMobail(WebTileLayer,GroupLayer,esriConfig,scene){
    esriConfig.request.proxyUrl = "/proxy/proxy.php";
    let grpMobail=new GroupLayer();
    grpMobail.title="Мобильная связь";
    let tele2 =new GroupLayer();
    tele2.title="Tele2"
    var tele2g= new WebTileLayer({urlTemplate:'https://msk.tele2.ru/maps/_2g/{level}/{col}/{row}.png',title: "TELE2_2G",  visible :false, minScale : 500000 });
    var tele3g= new WebTileLayer({urlTemplate:'https://msk.tele2.ru/maps/_3g//{level}/{col}/{row}.png',title: "TELE2_3G",  visible :false, minScale : 500000 });
    var telelte= new WebTileLayer({urlTemplate:'https://msk.tele2.ru/maps/_4g//{level}/{col}/{row}.png',title: "TELE2_LTE",  visible :false ,minScale : 500000});
    tele2.layers.add(tele2g);tele2.layers.add(tele3g);tele2.layers.add(telelte); grpMobail.layers.add(tele2);

    let mts   =new GroupLayer();
    mts.title="MTS"
    var mts2g= new WebTileLayer({urlTemplate:'https://tiles.qsupport.mts.ru/g2_New/{level}/{col}/{row}',title: "MTS_2G",  visible :false, minScale : 500000 });
    var mts3g= new WebTileLayer({urlTemplate:'https://tiles.qsupport.mts.ru/g3_New/{level}/{col}/{row}',title: "MTS_3G",  visible :false ,minScale : 500000});
    var mtslte= new WebTileLayer({urlTemplate:'https://tiles.qsupport.mts.ru/lte_New/{level}/{col}/{row}',title: "MTS_LTE",  visible :false ,minScale : 500000});
    mts.layers.add(mts2g);mts.layers.add(mts3g);mts.layers.add(mtslte); grpMobail.layers.add(mts)


    let megafon =new GroupLayer();
    megafon.title="Megafon"
    var megafon2g= new WebTileLayer({urlTemplate:'https://coverage-map.megafon.ru/{level}/{col}/{row}.png?layers=2g',title: "Megafon_2G",  visible :false ,minScale : 500000});
    var megafon3g= new WebTileLayer({urlTemplate:'https://coverage-map.megafon.ru/{level}/{col}/{row}.png?layers=3g',
   // tileInfo:{origin:{x:0,y:0},spatialReference : {wkid :3857}},
    title: "Megafon_3G",  visible :false ,minScale : 500000});
    var megafonlte= new WebTileLayer({urlTemplate:'https://coverage-map.megafon.ru/{level}/{col}/{row}.png?layers=lte',title: "Megafon_LTE",  visible :false ,minScale : 500000});
    var megafonltep= new WebTileLayer({urlTemplate:'https://coverage-map.megafon.ru/{level}/{col}/{row}.png?layers=lte_plus',title: "Megafon_LTE+",  visible :false,minScale : 500000 });

    megafon.layers.add(megafon2g);megafon.layers.add(megafon3g);megafon.layers.add(megafonlte);megafon.layers.add(megafonltep); grpMobail.layers.add(megafon)

    let beeline =new GroupLayer();

    beeline.title="Beeline"
    var beeline2g= new WebTileLayer({urlTemplate:'https://static.beeline.ru/upload/tiles/2G/current/{level}/{col}/{row}.png',title: "Beeline_2G",  visible :false, minScale : 500000 });
    var beeline3g= new WebTileLayer({urlTemplate:'https://static.beeline.ru/upload/tiles/3G/current//{level}/{col}/{row}.png',title: "Beeline_3G",  visible :false, minScale : 500000 });
    var beelinelte= new WebTileLayer({urlTemplate:'https://static.beeline.ru/upload/tiles/4G/current//{level}/{col}/{row}.png',title: "Beeline_LTE",  visible :false ,minScale : 500000});
    beeline.layers.add(beeline2g);beeline.layers.add(beeline3g);beeline.layers.add(beelinelte); grpMobail.layers.add(beeline)


    scene.layers.add(grpMobail);
}