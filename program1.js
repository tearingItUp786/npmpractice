    var fs = require('fs');
    var path = require('path');

    module.exports = function(dirName, extensionName, cb) {
        fs.readdir(dirName, function(err, files) {
            if (err) {
                return cb(err);
            }
            // this is my solution
            let myArray = [];
            files.forEach(function(file) {
                if (path.extname(file) === ('.' + extensionName)) {
                    myArray.push(file);
                }
            });

            // their solution entails using filter (built in array prototype function)
            // files = files.filter(function(file) {
            //     return path.extname(file) === '.' + extensionName;
            // });

            return cb(null, myArray);
        });
    };
