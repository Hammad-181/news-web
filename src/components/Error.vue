<template>
<div class="page">
   <div class= "card error font-dark d-flex" style=" height: 20rem; font-size: 30px; margin-top:10rem;" id="hide-error">
      <div class="message p-2">Error {{error.statusCode}} Not Found 
        <div class="error-text m-4">{{error.message}}</div> 
      </div>
      <div class="home-button">
        <button @click="onHome" class="btn w-25">Home</button>    
      </div>
      
  </div>
</div>
 
</template>

<script>

export default {
    name: 'Error',
    props : ['error'],
    methods:{
      onHome(){
        this.$router.push('/')
      }
    }
}
</script>

<style>
  .error{
    margin: auto;
    width: 50%;
    box-shadow: 0 , 0 , 0, 216;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    height:75%
    }
    .message{
      color: white;
      text-shadow: 2px 2px 4px #000000;
    }
    .home-button .btn:hover{
      background: rgb(172, 170, 170);
    }
</style>