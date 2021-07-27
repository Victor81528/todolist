<template>
  <div id="content">
    <Group v-for="group of groups" :key="group.id" :group="group"/>
  </div>
</template>

<script>
import Group from './Group.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'content',
  components: {
    Group
  },
  setup () {
    const store = useStore()
    return {
      groups: computed(() => store.state.groups)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #content {
    display: flex;
    width: 100vw;
    min-height: 100vh;
    flex-flow: wrap row;
    justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;
    padding: {
      top: 150px;
      right: 50px;
      bottom: 150px;
      left: 50px;
    }
    @media screen and (max-width: 2560px) {
      padding: {
        top: 140px;
        right: 45px;
        bottom: 140px;
        left: 45px;
      }
    }
    @media screen and (max-width: 1920px) {
      padding: {
        top: 120px
      }
    }
    @media screen and (max-width: 1366px) {
      padding: {
        top: 100px;
        right: 40px;
        bottom: 100px;
        left: 40px;
      }
    }
    @media screen and (max-width: 768px) {
      padding: {
        top: 80px;
        right: 30px;
        bottom: 30px;
        left: 30px;
      }
    }
    @media screen and (max-width: 414px) {
      padding: {
        top: 100px;
        right: 7px;
        left: 10px
      }
    }
  }
</style>
