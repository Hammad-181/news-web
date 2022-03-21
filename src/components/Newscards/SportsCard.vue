<template>
    <div  class="cards m-3.5 row w-100">
        <div v-for="(str,index) in render" :key="index" class="card-main m-3 col">
            <div  class="sports-card card h-10 background-gradient-Metallic" style="width: 18rem;">    
                <div class="card-body">
                    <img class="card-img-top mb-3" src="../../assets/download.jpeg" alt="Card image cap">
                    <h5 class="card-title">{{str || "Sports"}}</h5>
                    <p class="card-text">{{`Find latest ${str} news`}}</p>
                    <button @click="OnSportsNews" class="btn btn-primary"> Find News</button>
                </div>
            </div>
        </div>
        <router-view/>
    </div>
</template>
<script>


export default {
    name:"SportsCard",
    data(){
        return{
            render: ["Sports","Weather","Entertainment","Crypto","Stocks","Health","Food","Travel"],
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