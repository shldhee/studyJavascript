module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('index.html')
     });
     app.get('/table',function(req,res){
        res.render('table.html');
    });
}