<template>
  <div id="content">
    <div class="groups" v-for="group of groups" :key="group.id">
      <div class="title">
        <input type="text" :value="group.title" @input="updateTitle(group.id, $event)">
      </div>
      <ul v-for="item of group.list" :key="item.id">
        <li><label>
          <input type="checkbox" :class="item.id" @input="deleteItem(group.id, item.id, $event)">
          <input type="text" :class="item.id" :value="item.item" @input="updateItem(group.id, item.id, $event)">
        </label></li>
      </ul>
    </div>
    {{groups[2]}}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'content',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'groups'
    ])
  },
  methods: {
    updateTitle (id, e) {
      const title = e.target.value
      const pak = { id, title }
      this.$store.commit('updateTitle', pak)
    },
    deleteItem (idGroup, idItem, e) {
      const pak = { idGroup, idItem }
      setTimeout(() => {
        this.$store.commit('deleteItem', pak)
      }, 1500)
      // const _item = document.getElementsByClassName('')
    },
    updateItem (idGroup, idItem, e) {
      const item = e.target.value
      const pak = { idGroup, idItem, item }
      this.$store.commit('updateItem', pak)
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
    flex-flow: nowrap row;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 150px;
    color: #161717;
    .groups {
      width: 25%;
      min-height: 250px;
      box-sizing: border-box;
      border-radius: 16px;
      background-color: #FFFFFF;
      margin-right: 30px;
      padding: 48px;
      .title {
        display: flex;
        align-items: center;
        height: 80px;
        font-family: Rubik-Medium;
        label {
          width: 100%;
          input {
            width: 100%;
            border: 0;
            font-size: 36px;
            line-height: 48px;
          }
        }
      }
      ul {
        font-family: Rubik-Regular;
        li {
          display: flex;
          align-items: center;
          height: 80px;
          label {
            display: flex;
            flex-flow: nowrap row;
            justify-content: flex-start;
            align-items: center;
            input {
              width: 48px;
              height: 48px;
              border: 3px solid #B4B4B4;
              border-radius: 12px;
              margin-right: 24px;
            }
            label {
              input {
                border: 0;
              }
            }
          }
        }
      }
    }
  }
</style>
