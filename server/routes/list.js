var express = require('express');
var router = express.Router();

var items = [];

router.get("/items", (req, res) => {
    res.json({items: items});
});

router.post("/save", (req, res) => {
    items = req.body.items;

    res.json({"successful": true});
})

router.get("/item/:idx", (req, res) => {
    res.json({item: items[req.params.idx]});
})

module.exports = router;