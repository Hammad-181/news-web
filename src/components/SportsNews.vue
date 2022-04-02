<template>
    <h1 class="card p-2 h-10 fw-bold">{{$route.params.id}} News</h1> 
    <div  class="sports-news"> 
      <div v-for="art in articles" :key="art.id"  class="data-render d-flex card m-2 ">
          
                <img class="image-render border-top p-2 " :src="art.urlToImage ? art.urlToImage :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU'" alt="">
                <div class="render-body d-flex">
                    <span><h2 class="title h-100 m-2 text-dark d-block w-2">{{art.title}}</h2></span>
                    <span class="description "> {{art.description}} </span>
                    <span class="source m-2">Read more at <a :href ="art.url" >{{art.source.name}}</a></span>
                </div>            

      </div>
      <div class="loader-buttons">
           <button @click="onLoadClick" v-if="totalResults >= getTotal" class="btn m-2" style="align-items:center">Next Page</button>
          <button class="page-btn">{{PageNo}}</button>
          <button @click="onPrevious" class="previous-btn"> {{pageIcon}} </button>

      </div>
     
      <router-view/>
    </div>
    <div v-if="error" class="error">
        <Error :error="error"/>
    </div> 
</template>

<script>
import Error from '@/components/Error.vue'
  import {mapGetters,mapActions } from "vuex";
export default {
  
    name:"SportsNews",
    data(){
        return{
            articles : [],
            error : null,
            imgUrl : '',
            totalResults : 0,
            PageNo : 1,
            pageIcon : '<<'
        }
    },
    components : {
        Error,
    },
    created (){
        this.getNews(this.$route.params.id).then(res=>{
            this.articles = res.articles;
            this.totalResults = res.totalResults;
            })
            .catch(err => {
                this.error = err;
            });
        
    },
    methods :{
        ...mapActions(['getNews']),
        onLoadClick(){
            this.$store.commit('setTotal', 10);
            this.PageNo ++;
            this.getNews(this.$route.params.id).then(res => this.articles = res.articles).catch(err => this.$refs.errorMessage.showError(err))
        },
        onPrevious(){
            this.$store.commit('setTotal', -5)
            this.PageNo -- ;
        }

    }
    ,
    computed : {
        ...mapGetters(['getTotal'])
    }
}
</script>

<style>
    a{
        text-decoration: none;
        color : black; 
        font-style: italic;       
    }
    .card{
        /* align-items: center; */
        background:rgb(202, 202, 214);
        text-align:center;
    }
    .sports-news{
        background: #eaeaea;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .title{
        font-size: 25px;
    }
    .render-body .description{
        margin-left: 10px;
        margin-bottom: 50px;
    }
    .sports-news .data-render{
        background:rgb(202, 202, 214);
        width:50rem;
        flex-direction: initial;
        
    }
    .render-body{
        flex-direction: column;
    }
    .sports-news .image-render{
        width: 300px;
        height : 270px;
        object-fit: cover;
    }
    .btn{
        align-content: center;
        border: none;
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16);
        margin-left: 20px;
        width:auto;
    }
    .btn:hover{
        background: rgb(202, 202, 214);
    }
    .page-btn {
        align-content: center;
        border: none;
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16);
        height: 35px;
        width:40px;
    }
    .previous-btn{
        position: absolute;
        left: 38rem;
        margin-top: 10px;
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16);
        border: none;
        height: 35px;
        width:auto;
        border: none;
        align-content: center;
    }

</style>