<template>
  <div class="wrapper" v-if="isLoaded" id="app">
    <LandingPage :user="user"/>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue'

export default {
  name: 'App',
  components: {
    LandingPage
  },
  data: () => ({
    isLoaded: false,
    user: {"name":"Hugo Bollon", "description":"Full-Stack Developer"},
  }),
  methods: {
    
  },
  created() {
    document.body.classList.add('loading')
    Promise.all([

    ]).then(() => {
      this.isLoaded = true
      this.$nextTick(() => document.body.classList.remove('loading'))
    })
  },
}
</script>

<style lang="scss">
  @import '@/styles/constants.scss';

  #app {
    font-family: Montserrat-Regular, serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .wrapper {
    height: 100%;
    width: 100%;
  }
</style>
