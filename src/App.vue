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
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'bgMode'
    ])
  }
}
</script>

<style lang="scss">
body {
  background-color: $bg-white;
}
#app {
  width: 100vw;
  min-height: 100vh;
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
