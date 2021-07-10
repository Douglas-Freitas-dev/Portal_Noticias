const dbconnection = require("../../config/dbconnection");

module.exports = function (app) {

  const connection = dbconnection();

  app.get("/noticias", (req, res) => {

      connection.query("SELECT * FROM noticias", function (error, result) {
        res.render("pages/noticias", { noticias: result });

    });
  });
};
