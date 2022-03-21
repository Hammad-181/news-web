<template>
  <div class="">
    <Header />
    <SportsCard/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import SportsCard from '@/components/Newscards/SportsCard.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    SportsCard,
    
  }
}
</script>
