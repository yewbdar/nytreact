const axios = require("axios");
const router = require("express").Router();
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&";


router.get("/article", (req, res) => {
    console.log("am here ")
  axios
    .get(url + { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;