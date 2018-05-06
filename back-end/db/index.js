var pgp = require("pg-promise")({});
var connectionString = "postgres://localhost/chatterbox";
var db = pgp(connectionString);

module.exports = db;