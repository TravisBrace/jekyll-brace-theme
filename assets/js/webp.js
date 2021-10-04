
// check_webp_feature:

function check_webp_feature(feature, callback) {
    var kTestImages = {
        lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
        lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
        alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
        animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
    };
    var img = new Image();
    img.onload = function () {
        var result = (img.width > 0) && (img.height > 0);
        callback(feature, result);
    };
    img.onerror = function () {
        callback(feature, false);
    };
    img.src = "data:image/webp;base64," + kTestImages[feature];
}

check_webp_feature('lossy', function(feature, result) {
  if (result == true) {
   check_webp_feature('lossless', function(feature, result) {
    if (result == true) {
     check_webp_feature('alpha', function(feature, result) {
      if (result == true) {
      document.querySelector('html').setAttribute('class', 'webp-enabled');
      } else {document.querySelector('html').setAttribute('class', 'webp-disabled')};
     });
    } else {document.querySelector('html').setAttribute('class', 'webp-disabled')};
   });
  } else {document.querySelector('html').setAttribute('class', 'webp-disabled')};
});
