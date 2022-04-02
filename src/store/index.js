import Axios from "axios";
import {createStore, storeKey} from 'vuex';



export default createStore ({
    state: {
        apiKey : "1889426e916a441c97e27565bb4c753b",
        total : 10,
    },
    
    mutations: {

        setTotal(state, num){
            state.total += num;
        }
    },
    
    actions: {
        getNews (context, val){
          return new Promise((resolve, reject) => {
              let url = val === 'Crypto' ? `https://newsapi.org/v2/everything?q=bitcoin&apiKey=1889426e916a441c97e27565bb4c753b` : `https://newsapi.org/v2/top-headlines?country=in&category=${val.toLowerCase()}&apiKey=${context.getters.getApiKey}&pageSize=${context.getters.getTotal}`
                Axios.get(url, {headers:{origin : 'http://localhost:8080', referer :'http://localhost:8080'}})
                .then(res => {
                    console.log(res);
                    resolve(res.data) 
                }).catch(err => {
                    reject({
                        message:err.response.data.message,
                        statusCode : err.response.status,
                    });    
                })
            }) 
        }       
    },

    getters: {
        getApiKey (state){
            return state.apiKey;
        },
        getTotal(state){
            return state.total;
        }
    }
})
