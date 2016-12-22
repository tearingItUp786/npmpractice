(function() {
    // CHALLENE BABY STEPS
    // 'use strict';
    // var args = process.argv;
    // var value = 0;
    // args.forEach(function(el) {
    //     if (+el) {
    //         value += +el;
    //     }
    // });
    // console.log(value);

    // CHALLENGE READ FILE SYNC
    // var fs = require('fs');

    // var file = fs.readFileSync(process.argv[2]);
    // file = file.toString();
    // file = file.split('\n');

    // function testForEmpty(el) {
    //    if (el !== '' || el !== undefined) {
    //        return el;
    //    }
    // }
    // file = file.filter(testForEmpty);
    // console.log(file.length -1);

    // CHALLENGE ASYNC
    // var fs = require('fs');

    // I decided to try and use the new javascript arrow function. It's pretty much the same as passing in an anonymous function
    // except that it sets the this keyword to be bound to its lexical scope (the parents).
    //fs.readFile(process.argv[2], 'utf8', (err, data) => {
    //    if (err) {
    //        return console.log(err);
    //    }

    //    let myData = data.split('\n');
    //    console.log(myData.length - 1);
    // });

    // MY SOLUTION FOR FILE SYSTEM READING
    // var fs = require('fs');
    // var term = '.'+process.argv[3];
    // fs.readdir(process.argv[2], (err, data) => {
    //    if (err) {
    //        return console.log(err);
    //    }
    //		data.forEach((elem) => {
    //			if(elem.includes(term)){
    //				console.log(elem);
    //			}
    //		});
    // });

    // THEIR SOLUTION TO READING A FILE
    // var fs = require('fs')
    // var path = require('path')

    // var folder = process.argv[2]
    // var ext = '.' + process.argv[3]

    // fs.readdir(folder, function(err, files) {
    //    if (err) return console.error(err)
    //    files.forEach(function(file) {
    //        if (path.extname(file) === ext) {
    //            console.log(file)
    //        }
    //    })
    // })

    // MODULE PRACTICE
    // var mymodule = require('./program1');
    // mymodule(process.argv[2], process.argv[3], myPrint);
    //
    // function myPrint(err, data) {
    //     if (!err) {
    //         data.forEach(function(elem) {
    //             console.log(elem);
    //         });
    //     }
    // }

    // HTTP REQUESTS
    // const firstArg = process.argv[2]; // the first command line argument
    // const myHTTP = require('http');
    //
    // function cb(response) {
    //
    //     response.setEncoding("utf8");
    //     response.on('error', function(error) {
    //         return console.log("The erorr was " + error);
    //     });
    //
    //     response.on("data", function(data) {
    //         return console.log(data);
    //     });
    // }
    //
    // myHTTP.get(firstArg, cb).on('error', console.error);

    /* INSTRUCTIONS
    Write a program that performs an HTTP GET request to a URL provided to you
     as the first command-line argument. Collect all data from the server (not
     just the first "data" event) and then write two lines to the console
     (stdout).

     The first line you write should just be an integer representing the number
     of characters received from the server. The second line should contain the
    complete String of characters sent by the server.
    */

    // const bl = require('bl');
    // const myHTTP = require('http');
    //
    // var firstArg = process.argv[2];
    //
    // function callbackForHTTP(response) {
    //     response.pipe(bl((err, data) => {
    //         if (err) return console.log(err);
    //
    //         console.log(data.toString().length);
    //         console.log(data.toString());
    //     }));
    // }
    //
    // myHTTP.get(firstArg, callbackForHTTP).on('error', console.error);

    // Their solution
    // var http = require('http');
    // var bl = require('bl');
    //
    // http.get(process.argv[2], function(response) {
    //     response.pipe(bl(function(err, data) {
    //         if (err) {
    //             return console.error(err);
    //         }
    //         data = data.toString();
    //         console.log(data.length);
    //         console.log(data);
    //     }));
    // });
    /*
        This problem is the same as the previous problem (HTTP COLLECT) in that
        you need to use http.get(). However, this time you will be provided with
        three URLs as the first three command-line arguments.

        You must collect the complete content provided to you by each of the URLs
        and print it to the console (stdout). You don't need to print out the
        length, just the data as a String; one line per URL. The catch is that you
        must print them out in the same order as the URLs are provided to you as
        command-line arguments.
      */

    /*
      The right way to do async and keep the order we want
    */
    // var http = require('http');
    // var bl = require('bl');
    // var results = [];
    // var count = 0;
    //
    // function printResults() {
    //     for (var i = 0; i < 3; i++) {
    //         console.log(results[i]);
    //
    //     }
    // }
    //
    // function httpGet(index) {
    //     http.get(process.argv[2 + index], function(response) {
    //         response.pipe(bl(function(err, data) {
    //             if (err) {
    //                 return console.error(err);
    //             }
    //
    //             results[index] = data.toString();
    //             count++;
    //
    //             if (count === 3) {
    //                 printResults();
    //             }
    //         }));
    //     });
    // }
    //
    // for (var i = 0; i < 3; i++) {
    //     httpGet(i);
    // }
    /*
    Write a TCP time server!

     Your server should listen to TCP connections on the port provided by the
     first argument to your program. For each connection you must write the
     current date & 24 hour time in the format:

        "YYYY-MM-DD hh:mm"

     followed by a newline character. Month, day, hour and minute must be
     zero-filled to 2 integers. For example:


        "2013-07-06 17:42"

     After sending the string, close the connection.
    */
    // const net = require('net');
    // var server = net.createServer(function listener(socket) {
    //     // some stuff to handle logic
    //     var date = new Date();
    //     var min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    //     var data = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${min}\n`;
    //     socket.end(data);
    // });
    //
    // server.listen(process.argv[2]);
    /*
    ## HTTP FILE SERVER (Exercise 11 of 13)

     Write an HTTP server that serves the same text file for each request it
     receives.

     Your server should listen on the port provided by the first argument to
     your program.

     You will be provided with the location of the file to serve as the second
     command-line argument. You must use the fs.createReadStream() method to
     stream the file contents to the response
    */
    // const fs = require('fs');
    // const http = require('http');
    //
    // var portArg = +process.argv[2];
    // var file = process.argv[3];
    //
    // var server = http.createServer((request, response) => {
    //     // Define the Header for the response it's just good practice dude.
    //     response.writeHead(200, {
    //         'content-type': 'text/plain'
    //     });
    //     var stream = fs.createReadStream(file);
    //     stream.pipe(response);
    // });
    //
    // server.listen(portArg);

    /*
      Write an HTTP server that receives only POST requests and converts
      incoming POST body characters to upper-case and returns it to the client.

      Your server should listen on the port provided by the first argument to
      your program.
    */

    // const http = require('http');
    // const map = require('through2-map');
    //
    // var server = http.createServer((request, response) => {
    //     if (request.method === 'POST') {
    //         request.pipe(map(function(chunk) {
    //             return chunk.toString().toUpperCase();
    //         })).pipe(response);
    //     }else {
    //       return response.end("Send me a post\n");
    //     }
    // });
    //
    // server.listen(+process.argv[2]);
    /*
      Write an HTTP server that serves JSON data when it receives a GET request
      to the path '/api/parsetime'. Expect the request to contain a query string
      with a key 'iso' and an ISO-format time as the value.

      For example:

      /api/parsetime?iso=2013-08-10T12:10:15.474Z

      The JSON response should contain only 'hour', 'minute' and 'second'
      properties. For example:


       {
         "hour": 14,
         "minute": 23,
         "second": 15
       }

      Add second endpoint for the path '/api/unixtime' which accepts the same
      query string but returns UNIX epoch time in milliseconds (the number of
      milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
      For example:

     { "unixtime": 1376136615474 }

      Your server should listen on the port provided by the first argument to
      your program.
    */
    const http = require('http');
    const fs = require('fs');
    const url = require('url');

    var server = http.createServer(function cb(request, response) {
        if (request.method === 'GET') {

            var thingToReturn;
            var parsedRequest = url.parse(request.url);
            var arrayOfQuery = parsedRequest.query.split('=');
            var date = new Date(arrayOfQuery[1]);

            if ((/^\/api\/parsetime/).test(request.url)) {
                thingToReturn = {
                    "hour": date.getHours(),
                    "minute": date.getMinutes(),
                    "second": date.getSeconds()
                };
                response.writeHead(200, {
                    'Content-Type': 'application/json'
                });
                return response.end(JSON.stringify(thingToReturn));
            }

            if ((/^\/api\/unixtime/).test(request.url)) {
                thingToReturn = {
                    "unixtime": +date
                };
                response.writeHead(200, {
                    'Content-Type': 'application/json'
                });
                return response.end(JSON.stringify(thingToReturn));
            } else {
                response.writeHead(404);
                return response.end("Send me a get please\n");
            }
        }
    });

    server.listen(+process.argv[2]);
}());
