const express = require("express");

app = express();


app.get("/", (req, res) => {
    res.send("Hello World!");
});

const data = [
    {
        id: 1,
        name: "image1",
        url: "https://i.pinimg.com/736x/e5/70/03/e570030dc8283cd63e81dcb1b4bf3811.jpg",
        description: "Logo"
    },
    {
        id: 2,
        name: "image2",
        url: "https://i.pinimg.com/736x/a2/76/7c/a2767cbf1040147eedb6a52be00c77b1.jpg",
        description: "Logo"
    },
    {
        id: 3,
        name: "image3",
        url: "https://i.pinimg.com/736x/26/f0/9c/26f09c11b39701cedd1160f3ab3fb159.jpg",
        description: "Logo"
    },
    {
        id: 4,
        name: "image4",
        url: "https://i.pinimg.com/736x/10/e4/a7/10e4a7c56dc60f28331e1a105c77a5c4.jpg",
        description: "Logo"
    }
]

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