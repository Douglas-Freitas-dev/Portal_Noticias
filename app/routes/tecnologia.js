module.exports = function(application){
  application.get('/tecnologia', (req, res) =>{
  res.render('pages/tecnologia')
})
}
