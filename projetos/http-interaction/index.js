var request = require('request');
/* 
request({
  url : 'http://192.168.2.185:8080/api/Sensor',
  method: "POST",
  json: {
    "valor": 25025,
    "lat": 25.25,
    "lng": 25.25,
    "veiculoId": 25025,
    "tipo": 2,
    "acao": 5
  }
}, function(a,b,c){
  console.log('body:', c);
}); */

 request.get({
    url : 'http://192.168.2.185:8080/api/Sensor/1037',
    json: true
}, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body['id']); // Print the HTML for the Google homepage.
}); 

/* request.get({
    url : 'http://192.168.2.185:8080/api/Sensor/1030',
    json: true
}, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
 */
/* 
 
request.post({
  url : 'http://192.168.2.185:8080/api/Sensor',
  json: 
    {
      "valor": 25052,
      "lat": 25.52,
      "lng": 25.52,
      "veiculoId": 2552,
      "tipo": 25,
      "acao": 52
    }
}, function (error, response, body) {
console.log('error:', error); // Print the error if one occurred
console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
console.log('body:', body); // Print the HTML for the Google homepage.
});
 */

/* request.put({
  url : 'http://192.168.2.185:8080/api/Sensor/1037',
  json: 
    {
      "valor": 99999,
      "lat": 11111,
      "lng": 00000
    }
}, function (error, response, body) {
console.log('error:', error); // Print the error if one occurred
console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
console.log('body:', body); // Print the HTML for the Google homepage.
});  */

/* request.get({
  url : 'http://192.168.2.185:8080/api/Sensor/1037',
  json: true
}, function (error, response, body) {
console.log('error:', error); // Print the error if one occurred
console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
console.log('body:', body); // Print the HTML for the Google homepage.
}); */