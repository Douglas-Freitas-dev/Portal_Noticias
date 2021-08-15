const mysql = require("mysql");

const connMySQL = function() {
  console.log('Conexão com o BD foi estabelecida')
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "portal_noticias",
  });
  }
  module.exports = function() {
    console.log('O autoload carregou os modulos de conexão com o BD')
    return connMySQL;
};
