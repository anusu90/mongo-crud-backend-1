const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json());
app.listen(1234)


app.get("/users", async function(req,res){

    try {
        
        const MongoClient = require('mongodb').MongoClient;
        const uri = "mongodb+srv://dBanusu90:Anunay0610@Cluster0.xudfg.mongodb.net/<dbname>?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect()
        let userDB = client.db('myFirstDB').collection("user")
        let findAll = await userDB.find().toArray();
        await client.close();
        res.json(findAll);
    } catch (error) {

        res.status(404).json({
            'message': "Error"
        })
        console.log(error);
        
    }

})

app.get("/user/:user_id", async function(req,res){

    try {
        const MongoClient = require('mongodb').MongoClient;
        const uri = "mongodb+srv://dBanusu90:Anunay0610@Cluster0.xudfg.mongodb.net/<dbname>?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect()
        let userDB = client.db('myFirstDB').collection("user")
        let findAll = await userDB.find().toArray();
        foundQ = findAll.find(user => user._id = req.params.user_id)
        res.json(foundQ);
        
    } catch (error) {

        console.log(error);
        
    }

})


