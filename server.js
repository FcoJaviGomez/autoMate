const expres = require('express');
const app = expres();

app.use(expres.static(__dirname + '/dist/autoMate'));
app.get('/*',function(req,res){
    res.sendFile("index.html", {root: __dirname + '/dist/autoMate/'});
});

app.listen(process.env.PORT || 3000);