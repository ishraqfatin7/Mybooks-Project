const express = require('express');
const dotenv =  require('dotenv');
dotenv.config();
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());
const port = 5000;

const  ObjectId  = require('mongodb').ObjectId;

const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.j1wjl.mongodb.net/mybooks?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    const booksCollection = client.db("mybooks").collection("books");
    // perform actions on the collection object


    app.get('/books',(req,res)=>{
        booksCollection.find().toArray((err,items) => {
           console.log('from database ',items)
           res.send(items)
        })
      })
    
    
      app.post("/addBooks",(req,res)=>{
        const newBook = req.body;
        console.log('Adding New Book ',newBook)
        booksCollection.insertOne(newBook)
        .then(result => {
          console.log('inserted count', result.insertedCount)
          res.send(result.insertedCount>0)
        })
      })
    console.log('Database Connected');;
  });

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  
  app.listen(process.env.PORT || port, () => {
    console.log(`listening at http://localhost:${port}`);
  });
  