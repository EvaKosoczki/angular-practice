const DB = require('./db');

module.exports = class GetHandler {
  constructor(req, res) {

    const ordersDB = new DB(req.url);
    ordersDB.find().then(
      data => res.end(JSON.stringify(data)),
      err => {
        res.statusCode = 404;
        res.end(JSON.stringify(err))
      }
    );
  }
};
