import axios from "axios";
export default {
    getArticle: function(query) {
    return axios.get("/api/article" ,  { params: { q: query } }  );
  }
};





// import axios from 'axios';

// export default {
    
//     getArticle: function(query){
//         return axios.get("/api/articles",{params: { q: query } })
//     },
//     getSavedArticle: function(id){
//         return axios.get("/api/articles")
//     },
//     postArticle:function(id){
//         return axios.post("/api/articles" + id)
//     },
//     deleteArticle: function(id){
//         return axios.delete("/api/articles" + id)
//     }

// }