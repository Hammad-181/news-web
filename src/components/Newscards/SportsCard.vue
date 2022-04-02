<template>
    <div  class="cards m-3.5 row w-100">
        <div v-for="(type,index) in render" :key="index" class="card-main m-3 col">
            <div  class="sports-card card h-10" style="width: 18rem;">    
                <div class="card-body">
                    <img class="card-img-top mb-3" width="250" height="150" :src="getImageUrl(type.image)" alt="Card image cap">
                    <h5 class="card-title">{{type.newsType}}</h5>
                    <p class="card-text"> {{`Find latest ${type.newsType} news`}} </p>
                    <button @click="OnNews(type.newsType)" class="btn"> {{type.newsType + ' ' + type.button}}</button>
                </div>
            </div>
        </div>
        <router-view/>
    </div>
</template>
<script>

import {mapGetters} from 'vuex';
export default {
    name:"SportsCard",
    data(){
        return{
             render : [
            {newsType: "Sports" , image: 'download.jpeg', button : 'News' },
            {newsType: "Business" , image: 'weather.jpeg' , button : 'News'},
            {newsType: "Entertainment" , image: 'Entertainment.jpeg', button : 'News'},
            {newsType: "Crypto" , image: 'crypto.jpeg', button : 'News'},
            {newsType: "Technology" , image: 'stocks.jpeg' , button : 'News'},
            {newsType: "Health" , image: 'health.jpeg', button : 'News'},
            {newsType: "Science" , image: 'Science.jpeg', button : 'News'},
            {newsType: "General" , image: 'travel.jpeg', button : 'News'},    
        ],
        }
    },
    methods:{
        OnNews(type){    
                this.$router.push(`/news/${type}`);          
        },

        getImageUrl(img) {
            let images= require.context('../../assets/', false, /\.jpeg$/)
            return images('./'+ img);
        }

    },
    computed : {
        ...mapGetters(['getArticle', 'getRender'])
    }
}
</script>

<style>
    .cards .sports-card{
        background-color: rgb(232, 232, 240);
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);    
    }
    .btn{
        align-content: center;
        border: none;
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16);
        box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.16);
    }
    .btn:hover{
        background-color:  rgb(202, 202, 214);
    }
  

</style>