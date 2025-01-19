const doacaoRouter = require('./doacaoView');
const doadorRouter = require('./doadorView');

module.exports = (express, app) => {
  app.use(express.json(), doacaoRouter, doadorRouter);
}
