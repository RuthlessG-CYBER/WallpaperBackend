const express = require("express");
const data = require("./data");

app = express();


app.get("/", (req, res) => {
    res.send("Hello World!");
});



app.get("/images", (req, res) => {
    const image = data;
    res.send(image);
});

app.get("/image/:id", (req, res) => {
    const id = req.params.id;
    
    try {
        const image = data.find(image => image.id == id);
        res.send(image);
    } catch (error) {
        console.log(error);
    }
});

app.listen(4040, () => {
    console.log("Wallpaper app listening on port 3000! Go to http://localhost:4040");
});