//routes\livres.js
const express =  require('express');
livres= express.Router();
// Initialisation d'un tableau de livres
let books = [
    { id: 1, title: 'Node.js Design Patterns', author: 'Mario Casciaro', genre: 'Programming' },
    { id: 2, title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', genre: 'Programming' },
    { id: 3, title: 'Clean Code', author: 'Robert C. Martin', genre: 'Software Engineering' },
    { id: 4, title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', genre: 'Programming' }
];

livres.get('/',(req, res)=>{
res.send("voutes en espace de livres")
});
//recupere les livres dans biblio
livres.get('/ourbooks',(req, res)=>{
    res.json(books);
});
//renvoie le nombre totale des livres dans biblio
livres.get('/nbrofbooks',(req, res)=>{
    let nombreOfBooks = books.length;
    res.json(nombreOfBooks);
});
//add new book
livres.post('/addbook',(req, res)=>{
  const {title,author,genre}= req.body;  
  const newLIvre={
    id:books.length+1,
    author,
    genre
  }
  books.push(newLIvre);
  res.status(201).json(newLIvre);
});
//delete a books from biblio
livres.delete('/delete/:id',(req, res)=>{
const {id}=req.params;
const livreIndex = books.findIndex(u=>u.id==parseInt(id));
if(livreIndex>=0){
    books.splice(livreIndex, 1);
    res.status(200).send(`le livre avec id : ${id} est supprime`);
}else{
    res.status(404).send(`le livre n'est pas trouvee`);
}
});
//faire une upadte dans un student
livres.put('/updateBook/:id',(req, res)=>{
const {id}= req.params;
const {title,author,genre} = req.body;
const bookIndex = books.findIndex(book => book.id === parseInt(id));
if(bookIndex>=0){
    books[bookIndex] = {
        id :parseInt(id),
        title,
        author,
        genre
    };
    res.json(books[bookIndex]);
}else{
    res.status(404).send(`le livre n'est pas trouvee`);
}
});
module.exports = livres;