const express = require('express');
const app = express();
const port = 3000;
//importations de module des routes 
const livres = require('./routes/livres');
const abones = require('./routes/abones');
const prets = require('./routes/prets');
//faire un interception en json un mislware et pour compredre le text brute qui transmet 
app.use(express.json());
//simplification des routes
app.get('/',(req,res)=>{
    res.send('welcome to home page');
});
app.use('/livres',livres);
app.use('/abones',abones);
app.use('/prets',prets);



    


app.listen(port,()=>{
    console.log(`app listening on port http://localhost:${port}`);
    
});