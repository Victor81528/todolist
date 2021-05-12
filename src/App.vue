<template>
  <div id="app" :class="bgMode">
    <NavBar/>
    <Content/>
  </div>
</template>

<script>
import '@/_reset.css'
import NavBar from './components/NavBar.vue'
import Content from './components/Content.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    NavBar,
    Content
  },
  computed: {
    ...mapState([
      'bgMode'
    ])
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: Rubik-Medium;
  src: url('./assets/fonts/Rubik-Medium.ttf');
}
@font-face {
  font-family: Rubik-Regular;
  src: url('./assets/fonts/Rubik-Regular.ttf');
}
body {
  background-color: rgba(229,229,229,1);
}
#app {
  width: 100vw;
  min-height: 100vh;
  background: rgb(51,51,51);
  background: linear-gradient(120deg, rgba(51,51,51,1) 50%, rgba(229,229,229,1) 50%);
  &.dark {
    background: rgb(51,51,51);
  }
  &.light {
    background: rgba(229,229,229,1);
  }
}
</style>
