const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const request = require('request');
const bodyParser = require('body-parser')

const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;
const apiDomain = 'https://sandbox-reporting.rpdpymnt.com';


// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  const app = express();

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../client/build')));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // Answer API requests.
  app.post('*', (req, res, next) => {
    
    var options = {                 
      method: 'POST',             
      uri: `${apiDomain}${req.originalUrl}`,
      form: req.body,
      headers: {}
    };   
    if (req.headers.authorization) {
        options.headers = {
          'Authorization': req.headers['authorization']
        }
    }
    // console.log(options);
  
    request.post(options, function (error, response, body) {
      let statusCode = response && response.statusCode; 
      console.log('status code', statusCode);
      if(statusCode)
        res.status(statusCode).json(JSON.parse(body));
      else 
        res.status(404);  
    });
  
  });

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

  app.listen(PORT, function () {
    console.error(`Node ${isDev ? 'dev server' : 'cluster worker '+process.pid}: listening on port ${PORT}`);
  });
}

