let http = require('http');
// http 모듈을 가져옴

let url = require('url'); 
// const { URL } = require('url');

function start(route, handle) {
    function onRequest(request, response) {
    let pathname = url.parse(request.url).pathname;
    let queryData = url.parse(request.url, true).query;
     // let pathname = new URL(
    //         request.url,
    //         'http://localhost:8888'
    //     ).pathname;
    route(pathname, handle, response, queryData.productId);

    }

    http.createServer(onRequest).listen(8888);
    //localhost:8888
}

exports.start = start;
