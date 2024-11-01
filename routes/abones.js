//routes\abones.js
const express =  require('express');
abones= express.Router();
abones.get('/',(req, res)=>{
res.send("voutes en espace de abones")
});
// Initialisation du tableau d'abonnés
let subscribers = [
    { id: 1, firstName: 'yassine', lastName: 'elaarfaoui', subscriptionType: 'premium' },
    { id: 2, firstName: 'salma', lastName: 'bennani', subscriptionType: 'basic' },
    { id: 3, firstName: 'ahmed', lastName: 'hamzaoui', subscriptionType: 'premium' },
    { id: 4, firstName: 'fatima', lastName: 'elalaoui', subscriptionType: 'standard' },
    { id: 5, firstName: 'mohamed', lastName: 'amine', subscriptionType: 'premium' }
];
//recupere les livres dans biblio
abones.get('/subscribers',(req, res)=>{
    res.json(subscribers);
});
//renvoie le nombre totale des abones dans biblio
abones.get('/nbrsubscribers',(req, res)=>{
    let nbrofsubscribers = subscribers.length;
    res.json(nbrofsubscribers);
});
//add new book
abones.post('/addabone',(req, res)=>{
    const {firstName,lastName,subscriptionType}= req.body;  
    const newAbones={
      id:subscribers.length+1,
      firstName,
      lastName,
      subscriptionType
    }
    subscribers.push(newAbones);
    res.status(201).json(newAbones);
  });
  ///////////////////////////////////////////////////////////
  //delete a books from biblio
abones.delete('/delete/:id',(req, res)=>{
    const {id}=req.params;
    const abonesIndex = subscribers.findIndex(u=>u.id==parseInt(id));
    if(abonesIndex>=0){
        subscribers.splice(abonesIndex, 1);
        res.status(200).send(`anones  avec id : ${id} est supprime`);
    }else{
        res.status(404).send(`le livre n'est pas trouvee`);
    }
    });
    // Mettre à jour un abonné
abones.put('/updateabone/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, subscriptionType } = req.body;
    const aboneIndex = subscribers.findIndex(subscriber => subscriber.id === parseInt(id));
    if (aboneIndex >= 0) {
        subscribers[aboneIndex] = {
            id: parseInt(id),
            firstName,
            lastName,
            subscriptionType
        };
        res.json(subscribers[aboneIndex]);
    } else {
        res.status(404).send("Abonné non trouvé");
    }
});


module.exports = abones;