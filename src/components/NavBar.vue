<template>
  <div id="navBar">
    <header>
      <nav>
        <select @input="updateBgMode">
          <option value="mixed mode">mixed mode</option>
          <option value="dark">dark mode</option>
          <option value="light">light mode</option>
        </select>
        <button @click="addGroup"><i class="fas fa-plus"></i></button>
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
  width: 100%;
  height: 50px;
  z-index: 5;
  background-color: rgb(97, 97, 97);
  header {
    width: 100%;
    height: 100%;
    nav {
      width: 100%;
      height: 100%;
      select {
      }
      button {
        position: absolute;
        right: 10px;
        bottom: -40px;
        width: 60px;
        height: 60px;
        font-family: 'Rubik', sans-serif;
        background-color: rgb(97, 97, 97);
        border: 3px solid $bg-white;
        border-radius: 50%;
        &:hover {

        }
        .fa-plus {
          font-size: 28px;
          font-weight: 1200;
          color: $bg-white;
          &:hover {
          }
        }
      }
    }
  }
}
</style>
