const db =require('../models')
module.exports = {
    findAllArticle:function(req,res){
        db.Article.find({})
        .then((result) =>{
            console.log("DB")
            console.log(result)
             res.json(result)
        }).catch((err )=>{
            res.status(422).json(err);
        });
    },
    findById: function(req, res) {
        db.Article
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      saveData: function(req, res) {
          console.log(req.body)
        db.Article
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => { console.log(err) ;
            return res.status(422).json(err)});
      },
      remove: function(req, res) {
        db.Article
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }

}