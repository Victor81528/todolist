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
  src: url('/src/assets/fonts/Rubik-Medium.ttf');
}
@font-face {
  font-family: Rubik-Regular;
  src: url('./assets/fonts/Rubik-Regular.ttf');
}
body {
  background-color: $bg-white;
}
#app {
  width: 100vw;
  min-height: 100vh;
  background: $bg-black;
  background: linear-gradient(120deg, $bg-black 50%, $bg-white 50%);
  color: $p-color;
  &.dark {
    background: $bg-black;
  }
  &.light {
    background: $bg-white;
  }
}
</style>
