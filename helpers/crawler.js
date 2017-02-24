'use strict';

module.exports = function crawler(url, callback) {
    // Make the request
    console.log("Visiting page " + url);
    request
        .get(url)
        .on('error', function(err) {
            console.log(err);
        })
}