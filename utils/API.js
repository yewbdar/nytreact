import axios from 'axios';

export default {
    
    getArticle: function(){
        return axios.get("*")
    },
    getSavedArticle: function(){
        return axios.get("/api/articles")
    },
    postArticle:function(){
        return axios.post("/api/articles" + id)
    },
    deleteArticle: function(){
        return axios.delete("/api/articles" + id)
    }

}