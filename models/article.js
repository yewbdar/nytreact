const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  articleId:{type: String,required:true},
  title: { type: String, required: true },
  date: { type: Date, required: true },
  url: { type: String, required: true },
  snippet: { type: String },
  
});

const Article = mongoose.model("Article", articleSchema);
module.exports = Article;