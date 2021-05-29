<template>
  <div id="content">
    <div class="groups" v-for="group of groups" :key="group.id">
      <button @click="deleteGroup(group.id)"><i class="fas fa-times-circle"></i></button>
      <div class="title">
        <input type="text" :value="group.title" @input="updateTitle(group.id, $event)">
      </div>
      <ul>
        <li v-for="item of group.list" :key="item.id"><label>
          <input type="checkbox" :class="item.id" @input="deleteItem(group.id, item.id)">
          <input type="text" :class="item.id" :value="item.item" @input="updateItem(group.id, item.id, $event)">
        </label></li>
        <li><label>
          <input type="text" :value="group.itemCache" @blur="addItem(group.id, $event)" @input="updateCache(group.id, $event)" @keypress.enter="addItem(group.id, $event)">
        </label></li>
      </ul>
    </div>
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
    deleteGroup (idGroup) {
      this.$store.commit('deleteGroup', idGroup)
    },
    updateTitle (idGroup, e) {
      const title = e.target.value
      const pak = { idGroup, title }
      this.$store.commit('updateTitle', pak)
    },
    deleteItem (idGroup, idItem) {
      const pak = { idGroup, idItem }
      setTimeout(() => {
        this.$store.commit('deleteItem', pak)
      }, 500)
    },
    updateItem (idGroup, idItem, e) {
      const item = e.target.value
      const pak = { idGroup, idItem, item }
      this.$store.commit('updateItem', pak)
    },
    updateCache (idGroup, e) {
      const item = e.target.value
      const pak = { idGroup, item }
      this.$store.commit('updateCache', pak)
    },
    addItem (idGroup, e) {
      if (e.target.value) this.$store.commit('addItem', idGroup)
      blur()
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
    .groups {
      position: relative;
      width: 25%;
      min-height: 250px;
      box-sizing: border-box;
      border-radius: 16px;
      background-color: #FFFFFF;
      margin-right: 30px;
      padding: 48px;
      &:hover {
        button {
          display: block;
          position: absolute;
          right: 0;
          top: 0;
          background-color: inherit;
          border: none;
        }
      }
      button {
        display: none;
      }
      .title {
        display: flex;
        align-items: center;
        height: 80px;
        input {
          font-family: 'Rubik', sans-serif;
          font-weight: 500;
          width: 100%;
          border: 0;
          font-size: 36px;
          line-height: 48px;
        }
      }
      ul {
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
            input {
              font-family: 'Rubik', sans-serif;
              font-weight: 400;
              border: 0;
            }
          }
        }
      }
    }
  }
</style>
