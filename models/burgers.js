var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.all("burger", function(res) {
        cb(res);
      });
    },
    // create: function(cols, vals, cb) {
    //     orm.create("cats", cols, vals, function(res) {
    //       cb(res);
    //     });
    //   },
    };

    module.exports = burger;