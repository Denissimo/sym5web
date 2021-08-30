// --------------------------------------------------------------------
// update-library.js
//
// Helper script to replace the ArcGIS API for JavaScript library
// `[HOSTNAME_AND_PATH_TO_JSAPI]dojo` text with `www.example.com/javascript/api/4.20/init.js`.
//
// Note: requires node version 7.10.0 and npm version 4.2.0 or higher.
// --------------------------------------------------------------------
let fs                       = require("fs"),
    path                     = require("path"),
    util                     = require("util"),
    // --------------------------------------------------------------------
    // hostname to replace js.arcgis.com in the library such as:
    // www.example.com
    // apiDirectory would be the virtual directory in the web server hosting
    // the ArcGIS API for JavaScript library
    // --------------------------------------------------------------------
    localHost                = "www.example.com",
    apiDirectory             = "javascript/api/4.20/init.js",
    apiDirectoryWorker             = "javascript/api/4.20/init.js",
    // --------------------------------------------------------------------
    // path to the downloaded ArcGIS API for JavaScript library
    // download archive contents arcgis_js_v%jsapi_version.replace(".", "")%_api\arcgis_js_api\4.20\
    // to IIS virtual directory C:\Inetpub\wwwroot\javascript\api\4.20\
    // --------------------------------------------------------------------
    jsapiDownloadLocation    = path.join("C:", "inetpub", "wwwroot", "javascript", "api", "4.20"),
    // --------------------------------------------------------------------
    // Regular expression to match the template text
    // [HOSTNAME_AND_PATH_TO_JSAPI] in
    // baseUrl:"https://[HOSTNAME_AND_PATH_TO_JSAPI]dojo"
    // --------------------------------------------------------------------
    hostnameAndPathRegEx            = /\[HOSTNAME_AND_PATH_TO_JSAPI\]dojo/i,
    // --------------------------------------------------------------------
    // base url for the locally hosted ArcGIS API for JavaScript such as:
    // www.example.com/javascript/api/4.20/
    // --------------------------------------------------------------------
    jsapiURLBaseLocal        = util.format("%s/%s", localHost, apiDirectory),
    // --------------------------------------------------------------------
    // Dojo file containing the CDN link to ArcGIS API for JavaScript
    //C:\Inetpub\wwwroot\javascript\api4.20\init.js
    // --------------------------------------------------------------------
    // jsapiInitFile = path.join(jsapiDownloadLocation, "init.js");
    jsapiInitFile = "init.js";

// --------------------------------------------------------------------
// 1) Read the ArcGIS API for JavaScript library files
// 2) Replace the script src attribute for the ArcGIS API for JavaScript CDN
// --------------------------------------------------------------------

// --------------------------------------------------------------------
// Read the init file contents from disk
// --------------------------------------------------------------------
console.log("library - reading %s", jsapiInitFile);
let rawInitContent = fs.readFileSync(jsapiInitFile, "utf-8");
// --------------------------------------------------------------------
// Replace the script src attribute for the ArcGIS API for JavaScript CDN
// --------------------------------------------------------------------
console.log("library - replacing script tag for %s", jsapiInitFile);
let updatedInitContent = rawInitContent.replace(hostnameAndPathRegEx, jsapiURLBaseLocal);
// --------------------------------------------------------------------
// Save the init file contents to disk
// --------------------------------------------------------------------
console.log("library - saving %s", jsapiInitFile);
fs.writeFileSync(jsapiInitFile, updatedInitContent, "utf-8");