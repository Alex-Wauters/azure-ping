var request = require('request');

var hostName = process.env.WEBSITE_HOSTNAME;

if(!hostName){
    console.error("Could not find WEBSITE_HOSTNAME");
}

request.get("http://" + hostName + '/', function(err, httpResponse, body){
   if(err){
       console.error("Ping failed: " + err);
   }else{
       console.info("Ping success: " + JSON.stringify(body));
   }
});