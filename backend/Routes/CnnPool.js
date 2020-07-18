const mysql = require('mysql');

const CnnPool = function () {
  // eslint-disable-next-line global-require
  const poolCfg = require('./connection.json');

  poolCfg.connectionLimit = CnnPool.PoolSize;
  this.pool = mysql.createPool(poolCfg);
};

CnnPool.PoolSize = 1;

CnnPool.singleton = new CnnPool();

CnnPool.prototype.getConnection = function (cb) {
  this.pool.getConnection(cb);
};

CnnPool.router = function (req, res, next) {
  CnnPool.singleton.getConnection((err, cnn) => {
    if (err) res.status(500).json(`Failed to get connection ${err}`);
    else {
      // eslint-disable-next-line no-param-reassign
      cnn.chkQry = function (qry, prms, cb) {
        const result = res;
        this.query(qry, prms, (error, response, fields) => {
          if (error) {
            result.status(500).json(`Failed query ${qry}`);
          }
          cb(error, response, fields);
        });
      };
      req.cnn = cnn;
      next();
    }
  });
};

module.exports = CnnPool;
