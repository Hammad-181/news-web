import Axios from "axios";
import {createStore} from 'vuex';



export default createStore ({
    state: {
        // apiKey : "1889426e916a441c97e27565bb4c753b",
        apiKey : "1889426e916a441c97e27565bb4c753a",
    },
    
    mutations: {
    
    },
    
    actions: {
        getNews (context){
          return new Promise((resolve, reject) => {
            Axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${context.getters.getApiKey}`)
            .then(res => { 
                resolve(res.data.articles) 
            }).catch(err => {
                reject(err.response.data.message);    
            })
          })
        }       
    },

    getters: {
        getApiKey (state){
            return state.apiKey;
        },
    }
})
