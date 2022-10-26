const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const port = process.env.port || 5000;

const productCollection = require("./Data/product.json");

const productLength = productCollection.length


app.get("/", (req, res) => {
    res.send("Product Found :"+ productLength);
});
app.get("/products", (req, res) => {
    res.send(productCollection);
});

app.get("/products/:id", (req, res) => {
    const id = req.params.id;
    const getSingleItem = productCollection?.find((p) => p.id == id);
    if(!getSingleItem){
        res.send("Product Not Found");
    }
    res.send(getSingleItem);
});

app.listen(port, () => {
    console.log('server is running', port)
});


module.exports = app;