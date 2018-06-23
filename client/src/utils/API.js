import axios from "axios";

export default {
    getArticle: function (query) {
        console.log(query)
        return axios.get("/api/article",
            { params: { q: query } });
        //  ,begin_date:startDate ,end_date:endDate,sort:'newest'
    },
    
    getSavedArticle: function () {
        console.log("api get saved articles")
        return axios.get("/api/saved1")
    },
    SaveArticle: function (json) {
        return axios.post("/api/articles" , json)
    },
    deleteArticle: function (id) {
        return axios.delete("/api/articles" + id)
    },
    loadeHtml: function () {
        return axios.get("*")
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