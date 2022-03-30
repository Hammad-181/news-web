<template>
    <div  class="cards m-3.5 row w-100">
        <div v-for="(type,index) in render" :key="index" class="card-main m-3 col">
            <div  class="sports-card card h-10 background-gradient-Metallic" style="width: 18rem;">    
                <div class="card-body">
                    <img class="card-img-top mb-3" width="250" height="150" :src="getImageUrl(type.image)" alt="Card image cap">
                    <h5 class="card-title">{{type.newsType}}</h5>
                    <p class="card-text"> {{`Find latest ${type.newsType} news`}} </p>
                    <button @click="OnSportsNews" class="btn btn-primary"> Find News</button>
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
                {newsType: "Sports" , image: 'download.jpeg'},
                {newsType: "Weather" , image: 'weather.jpeg'},
                {newsType: "Entertainment" , image: 'Entertainment.jpeg'},
                {newsType: "Crypto" , image: 'crypto.jpeg'},
                {newsType: "Stocks" , image: 'stocks.jpeg'},
                {newsType: "Health" , image: 'health.jpeg'},
                {newsType: "Food" , image: 'food.jpeg'},
                {newsType: "Travel" , image: 'travel.jpeg'},    
            ]
        }
    },
    methods:{
        OnSportsNews(){    
                this.$router.push("/sports")
        },
        onIndexClick(){
            let keyValue = document.getElementById("key").value ;
            this.render[keyValue] = "Zaid"
        },
        // backgroundGradient(){
        //     const gradient = Math.floor(Math.random () * (this.backgroundColor.length))
        //     console.log(gradient);
        //     return this.backgroundColor[gradient];
        // }

        getImageUrl(img) {
            let images= require.context('../../assets/', false, /\.jpeg$/)
            return images('./'+ img);
        }

    },
    computed : {
        ...mapGetters(['getArticle'])
    }
}
</script>

<style>
    .cards .sports-card{
        background-color: #1abc9c;
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);    
    }
    .cards .card:hover{
        background-color: #a4dbd2 ;
    }
  

</style>