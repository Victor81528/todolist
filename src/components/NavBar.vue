<template>
  <div id="navBar">
    <header>
      <nav>
        <button @click="addGroup">+ new group</button>
          <select @input="updateBgMode">
            <option value="mixed">mixed mode</option>
            <option value="dark">dark mode</option>
            <option value="light">light mode</option>
          </select>
      </nav>
    </header>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NavBar',
  data () {
    return {
      aaa: 'mixed mode'
    }
  },
  computed: {
    ...mapState([
      'bgMode'
    ])
  },
  methods: {
    addGroup () {
      this.$store.commit('addGroup')
    },
    updateBgMode (e) {
      this.$store.commit('updateBgMode', e.target.value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#navBar {
  position: fixed;
}
button {
  font-family: 'Rubik', sans-serif;
}
</style>
