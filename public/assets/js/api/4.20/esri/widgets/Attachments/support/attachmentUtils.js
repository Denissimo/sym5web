// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../assets"],function(c,d){c.getIconPath=function(a){const b=d.getAssetUrl("esri/themes/base/images/files/");return a?"text/plain"===a?`${b}text-32.svg`:"application/pdf"===a?`${b}pdf-32.svg`:"text/csv"===a?`${b}csv-32.svg`:"application/gpx+xml"===a?`${b}gpx-32.svg`:"application/x-dwf"===a?`${b}cad-32.svg`:"application/postscript"===a||"application/json"===a||"text/xml"===a||"model/vrml"===a?`${b}code-32.svg`:"application/x-zip-compressed"===a||"application/x-7z-compressed"===
a||"application/x-gzip"===a||"application/x-tar"===a||"application/x-gtar"===a||"application/x-bzip2"===a||"application/gzip"===a||"application/x-compress"===a||"application/x-apple-diskimage"===a||"application/x-rar-compressed"===a||"application/zip"===a?`${b}zip-32.svg`:-1!==a.indexOf("image/")?`${b}image-32.svg`:-1!==a.indexOf("audio/")?`${b}sound-32.svg`:-1!==a.indexOf("video/")?`${b}video-32.svg`:-1!==a.indexOf("msexcel")||-1!==a.indexOf("ms-excel")||-1!==a.indexOf("spreadsheetml")?`${b}excel-32.svg`:
-1!==a.indexOf("msword")||-1!==a.indexOf("ms-word")||-1!==a.indexOf("wordprocessingml")?`${b}word-32.svg`:-1!==a.indexOf("powerpoint")||-1!==a.indexOf("presentationml")?`${b}report-32.svg`:`${b}generic-32.svg`:`${b}generic-32.svg`};c.isSupportedImage=function(a){a=a.toLowerCase();return"image/bmp"===a||"image/emf"===a||"image/exif"===a||"image/gif"===a||"image/x-icon"===a||"image/jpeg"===a||"image/png"===a||"image/tiff"===a||"image/x-wmf"===a};Object.defineProperty(c,"__esModule",{value:!0})});