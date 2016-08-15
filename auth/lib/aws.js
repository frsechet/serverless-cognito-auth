var AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

var proxy = process.env.https_proxy 
|| process.env.HTTPS_PROXY 
|| process.env.http_proxy 
|| process.env.HTTP_PROXY;

if(proxy) {
    var HttpProxyAgent = require('https-proxy-agent');
    AWS.config.update({
        httpOptions: {agent: new HttpProxyAgent(proxy)}
    });
    console.log('aws is using https-proxy-agent for proxy ' + proxy);
}

module.exports = AWS;
