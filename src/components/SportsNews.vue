<template>
    <div class="sports-news">
      <h2>Sports News</h2>  
      <div v-for="art in getArticle" :key="art.id"  class="data-render">
          <h2 class="fw-bold p-2 d-block">{{art.author}}</h2>
          <p class="description m-2">{{art.description}}</p>
          
      </div>
    </div>
    
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
export default {
  
    name:"SportsNews",
    data(){
        return{
            
        }
    },
    created (){
        this.getNews();
        
    },
    methods :{
        ...mapActions(['getNews'])
    }
    ,
    computed : {
        ...mapGetters(['getApiKey', 'getArticle'])
    }
}
</script>

<style>
    .sports-news{
        background: #eaeaea;
    }
</style>