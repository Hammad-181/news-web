<template>
  <div class= "error font-dark" id="hide-error" :style="errorClass">
      {{error}}
  </div>
</template>

<script>

export default {
    name: 'Error',
    props : ['errMsg'],
    data(){
      return{
        error : '',
        errorClass : 'display: none;',
      }
    },
    methods:{
      showError(error){
        this.error = error;
        this.errorClass = 'display: block';
        setTimeout(() => {
          this.errorClass = 'display: none;';
          console.log('ok')
        }, 3000)
      }
    }
}
</script>

<style>
  .error{
    display: none,
  }
</style>