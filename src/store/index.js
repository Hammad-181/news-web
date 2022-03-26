import Axios from "axios";
import {createStore} from 'vuex';

export default createStore ({
    state: {
        apiKey : "1889426e916a441c97e27565bb4c753b",
        article :[], 
    },
    
    mutations: {
        setArticle(state, data){
           state.article = data;
        }
    
    },
    
    actions: {
        getNews (context){
            Axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${context.getters.getApiKey}`)
                .then(res => { 
                context.commit('setArticle', res.data.articles)
                console.log(context.state.article);  
            })
        }       
    },
    
    getters: {
        getApiKey (state){
            return state.apiKey;
        },
        getArticle (state){
            return state.article;
        }
    }
})

const obj = {
    userName : "Hammad",
    password : 12345
}

let {password} = obj;

console.log(password);