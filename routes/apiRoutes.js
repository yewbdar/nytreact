// const axios = require("axios");
const router = require("express").Router();
const request = require("request");
// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
const dbController=require("../controllers/nytController")

router.get("/article", (req, res) => {
    request.get({ url: "https://api.nytimes.com/svc/search/v2/articlesearch.json", 
    qs: { 'api-key': "e33c61265c6e46a09cef99429427d1b8", 'q':req.query }, },
     function(err, response, body) { 
         body = JSON.parse(body); 
       let allArticles=[];
         body.response.docs.forEach(element => {
            let oneArticle = {
                articleId : element._id,
                headline : element.headline.main,
                snippet : element.snippet.substring(0, 150) + "...",
                url : element.web_url,
               date:element.pub_date
            }
            allArticles.push(oneArticle);
        });
        // console.log(body.response.docs[0].pub_date)
         res.status(200).json(allArticles);
    });

    router.post("/articles", (req,res) =>{
       dbController.saveData(req,res);
    })

    router.get("/saved1" , (req,res)=>{
        console.log("api reached");
        // res.status(200).json();
         dbController.findAllArticle(req,res);
    })


});
module.exports = router;