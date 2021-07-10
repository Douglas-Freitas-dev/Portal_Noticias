const app = require('./config/server')
const port = 3000

<<<<<<< HEAD
// const rotaHome = require('./app/routes/home')
// rotaHome(app);

// const rotaTecnologia = require('./app/routes/tecnologia')
// rotaTecnologia(app);

// const rotaNoticia = require('./app/routes/noticias')
// rotaNoticia(app);
=======
const rotaHome = require('./app/routes/home')
rotaHome(app);

const rotaTecnologia = require('./app/routes/tecnologia')
rotaTecnologia(app);

const rotaNoticia = require('./app/routes/noticias')
rotaNoticia(app);
>>>>>>> dcc3ff9916759b3e7674797e91bde94efb1a900a

app.listen(port, () =>{
    console.log('Servidor rodando com Express')
})