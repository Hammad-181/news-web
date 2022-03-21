<template>
 <div class="header p-3 mt-10  border-rounded-top header-background">
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
  color: white;
  font-size: 15px;
}
.header-background{
  background: #616161;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #9bc5c3, #616161);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #9bc5c3, #616161); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->

