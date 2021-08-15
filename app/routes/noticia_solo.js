module.exports = function (application) {
  
  application.get("/noticia_solo", (req, res) => {
    const connection = application.config.dbconnection();
    const noticiasModel = new application.app.models.noticiasDAO(connection);

    noticiasModel.getNoticia(function (error, result) {
      res.render("pages/noticias", { noticias: result });

    });
  });
};
