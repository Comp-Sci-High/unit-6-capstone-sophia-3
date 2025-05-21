const mongoose = require("mongoose");
const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

app.use(express.json());

app.set("view engine", "ejs");

app.use((req, res, next) => {
    console.log(`${req.method}: ${req.path}`);
    next();
});
//Items Schema and routes 
const itemSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        image: {type: String, required: true},
        price: {type: Number, required: true, default: 20},
        size: {type: String,},
        description: {type: String,}
    }
);
const Item = mongoose.model("Item", itemSchema, "Items");

app.post("/addItem", async (req, res) => {
const addItem = await new Item({
    name: req.body.name,
    image: req.body.image,
    price: req.body.price, 
    size: req.body.size,
    description: req.body.description,
}).save()
console.log(addItem)
res.json(addItem)
})

app.get("/items", async (req, res) => {
    const items = await Item.find({})
    res.render("marketplace.ejs", {items})
    
})
app.get("/items", async (req, res) => {
    const items = await Item.find({})
    
    res.render("items.ejs", {items})
})
//After this route go to items.ejs and input the values

app.patch("/items/update/:name", async ( req, res) => {
    const response = await Item.findOneAndUpdate({
        name: req.params.name,
        
    },{
        image: req.body.image,
        price: req.body.price,
        size: req.body.size,
    })
    res.json(response)
})

app.delete("/delete/:name", async (req, res) => {
    const name = req.params.name
    const response = await Item.findOneAndDelete({
        name: req.params.name,
    })
    res.json(response)
})


async function startServer() {
    // Add your SRV string, make sure that the database is called SE12
    await mongoose.connect("mongodb+srv://SE12:CSH2025@cluster0.u9yhg.mongodb.net/CSHpets?retryWrites=true&w=majority&appName=Cluster0");
app.listen(3000, () => {
        console.log(`Server running.`);
    });
}


startServer();
