const db =require('../models')
module.exports={
    findAllArticle:function(req,res){
        db.Articles.find(req.query)
        .then((result) =>{
            res.json(result)
        }).catch((err )=>{
            res.status(422).json(err);
        });
    }

}