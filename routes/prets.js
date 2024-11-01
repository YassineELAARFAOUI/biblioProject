//routes\prets.js
const express =  require('express');
prets= express.Router();
prets.get('/',(req, res)=>{
res.send("voutes en espace de prets");
});
module.exports = prets;