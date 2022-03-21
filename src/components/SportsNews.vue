<template>
    <div>
      <h2>Okay great Route is working</h2>  
      <div v-for="art in article" :key="art.id"  class="data-render">
          {{art}}
      </div>
    </div>
    
</template>

<script>
export default {
    name:"SportsNews",
    data(){
        return{
            apiKey : "1889426e916a441c97e27565bb4c753b",
            article : {}, 
        }
    },
    created (){
        fetch(`https://newsapi.org/v2/everything?q=Apple&from=2022-03-20&sortBy=popularity&apiKey=${this.apiKey}`)
        .then(res => res.json()).then(data => {
            console.log(data);
            this.article = data.articles;
            console.log(this.article);
            
        })
        
    },
    methods :{
        
    }
}
</script>