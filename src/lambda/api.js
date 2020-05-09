const https = require('https');
const url = require('url');

function getData(callback, path, type) {
  const clientReq = https.request(
    {
      ...url.parse(path),
      headers: {
        'Content-Type': 'application/json',
      },
    },
    clientRes => {
      clientRes.setEncoding('utf8');
      let rawData = '';
      clientRes.on('data', chunk => {
        rawData += chunk;
      });
      clientRes.on('error', err => {
        console.log('error here line 140', err);
        callback(err.message);
      });
      clientRes.on('end', () => {
        callback(null, {
          statusCode: 200,
          headers: {
            'content-type': type || 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body: rawData,
        });
      });
    }
  );
  clientReq.end();
}

exports.handler = async (event, context, callback) => {
  const path = event.queryStringParameters.query;
  const type = event.queryStringParameters.type;
  getData(callback, path, type);
}