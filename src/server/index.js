import path from 'path';
import express from 'express';
import routes from './routes';
import http from 'http';
import * as httpServer from './server';

let app = express();

// middleware connect to react
if (process.env.NODE_ENV !== 'production') {
  console.log('Webpack is running')
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('../../webpack.dev.config.js')
  const compiler = webpack(config)
  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))
}

// serving static folder and files
app.use(express.static(path.join(__dirname, 'public')));
let assetsDir = 'assets';
if (process.env.NODE_ENV !== 'production') {
  assetsDir = '../../assets';
}

app.use('/assets', express.static(path.join(__dirname, assetsDir)));

// API router
app.use('/api', routes);
// home page
app.get('*', function(req, res) {
  if (process.env.NODE_ENV !== 'production') {
    res.sendFile(path.resolve(__dirname, '..', '..', 'index.html'))
  } else {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
  }
});
// Handle 404
app.use(function(req, res) {
   res.send('404: Page not Found', 404);
});

// Handle 500
app.use(function(error, req, res, next) {
   res.send('500: Internal Server Error', 500);
});


// Get port from environment and store in Express.
const port = httpServer.normalizePort(process.env.PORT || '3000');
app.set('port', port);

// Create HTTP server.
const server = http.createServer(app);

// Listen on provided port, on all network interfaces.
server.listen(port);
server.on('error', httpServer.onError);
server.on('listening', httpServer.onListening);



