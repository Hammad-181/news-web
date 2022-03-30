<template>
    <div  class="sports-news">
      <h2 class="card p-2 h-10 fw-bold">Sports News</h2>  
      <div v-for="art in articles" :key="art.id"  class="data-render card m-2 ">
          <h2 class="fw-bold p-2 text-dark d-block w-2">{{art.author}}
          </h2>
          <p class="description m-2"> {{art.description}} </p>

      </div>
      <router-view/>
    </div>
    <div  class="error-">
        <Error  ref="errorMessage"/>
    </div>
     
</template>

<script>
import Error from '@/components/Error.vue'
  import {mapActions } from "vuex";
export default {
  
    name:"SportsNews",
    data(){
        return{
            articles : [],
            error : '',
        }
    },
    components : {
        Error,
    },
    created (){
        this.getNews().then(res=>this.articles = res).catch(err => this.$refs.errorMessage.showError(err));
        
    },
    methods :{
        ...mapActions(['getNews']),
    }
    ,
    computed : {
        
    }
}
</script>

<style>
    .sports-news{
        background: #eaeaea;
    }
    .sports-news .data-render{
        background:rgb(202, 202, 214);
    }
</style>