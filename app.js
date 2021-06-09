const app = require('./config/server')
const port = 3000

const rotaHome = require('./app/routes/home')
rotaHome(app);

const rotaTecnologia = require('./app/routes/tecnologia')
rotaTecnologia(app);

const rotaNoticia = require('./app/routes/noticias')
rotaNoticia(app);

app.listen(port, () =>{
    console.log('Servidor rodando com Express')
})