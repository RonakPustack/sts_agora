// // changed the name of the procfile
// var express = require('express');
// var STS = require('ali-oss').STS;
// var co = require('co');
// var fs = require('fs');
// var app = express();

// app.get('/', function (req, res) {
//   var conf = JSON.parse(fs.readFileSync('./config.json'));
//   var policy;
//   if (conf.PolicyFile) {
//     policy = fs.readFileSync(conf.PolicyFile).toString('utf-8');
//   }

//   const stsOptions = {
//     accessKeyId: conf.AccessKeyID,
//     accessKeySecret: conf.AccessKeySecret,
//   };

//   console.log("STS Options", stsOptions);

//   var client = new STS(stsOptions);

//   co(function* () {
//     var result = yield client.assumeRole(conf.RoleArn, policy, conf.TokenExpireTime);
//     console.log(result);

//     res.set('Access-Control-Allow-Origin', '*');
//     res.set('Access-Control-Allow-METHOD', 'GET');
//     res.json({
//       StatusCode: 200,
//       AccessKeyId: result.credentials.AccessKeyId,
//       AccessKeySecret: result.credentials.AccessKeySecret,
//       SecurityToken: result.credentials.SecurityToken,
//       Expiration: result.credentials.Expiration
//     });
//   }).then(function () {
//     // pass
//   }).catch(function (err) {
//     console.log(err);
//     res.status(err.statusCode);
//     res.json({
//         StatusCode: 500,
//         ErrorCode: err.code,
//         ErrorMessage: err.message
//     });
//   });
// });

// const PORT = process.env.PORT || 5000

// app.listen(PORT, function () {
//   console.log('App started.');
// });


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})