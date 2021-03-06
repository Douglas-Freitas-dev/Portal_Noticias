module.exports = function (application) {

  application.get("/noticias", (req, res) => {
    const connection = application.config.dbconnection();
    const noticiasModel = new application.app.models.noticiasDAO(connection);

    noticiasModel.getNoticias(function (error, result) {
      res.render("pages/noticias", { noticias: result });

    });
  });
};
