<template>
 <div class="header p-3 mt-10  header-background">
  <h1>News World</h1>
</div>
</template>
<script>
export default {
  name: 'Header',
  props:["msg"]
}
</script>
<style>

.header {
  text-align: center;
  color:black;
  font-size: 15px;
  
  
}
.header-background{
  background-color:rgb(232, 232, 240);  /* fallback for old browsers */
  /* background: -webkit-linear-gradient(to right, #9bc5c3, #616161); 
  background: linear-gradient(to right, #9bc5c3, #616161);  */
}

</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->

