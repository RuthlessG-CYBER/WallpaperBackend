const express = require("express");

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
    const image = data.find(image => image.id == id);
    res.send(image);
});

app.listen(3000, () => {
    console.log("Example app listening on port 3000! Go to http://localhost:3000");
});