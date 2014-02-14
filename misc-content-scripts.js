var importIconLink = $('.ImportIcon').find('a');
//console.log(importIconLink);
if (importIconLink.length) {
    var oldOnClick = importIconLink.attr("onclick");
    /* disable the confirmation */
    var newOnClick = oldOnClick.replace(/confirm/g, 'true || confirm');
//    console.log(oldOnClick);
//    console.log(newOnClick);
    importIconLink.attr("onclick", newOnClick);
}
