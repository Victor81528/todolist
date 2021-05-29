<template>
  <div id="navBar">
    <header>
      <nav>
        <button @click="addGroup">+ new group</button>
          <select @input="updateBgMode">
            <option value="mixed mode">mixed mode</option>
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
    }
  },
  computed: {
    ...mapState([
      'bgMode'
    ])
  },
  methods: {
    addGroup () {
      if (this.$store.state.groups.length >= 3) {
        alert('付費升級Pro版，以解鎖更多項目群組。')
      } else {
        this.$store.commit('addGroup')
      }
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
