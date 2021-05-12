<template>
  <div id="content">
    <div class="groups" v-for="(group, index) of groups" :key="index">
      <div class="title">
        <input type="text" :value="group.title" @keyup="updateTitle(index, $event)">
      </div>
      <ul v-for="(item, index) of group.list" :key="item.index">
        <li><label>
          <input type="checkbox" @input="deleteItem(index, $event)">
          <input type="text" :value="item">
        </label></li>
      </ul>
    </div>
    {{groups[3]}}
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
    updateTitle (index, e) {
      const title = e.target.value
      const pak = { index, title }
      this.$store.commit('updateTitle', pak)
      e.target.blur()
    },
    updateItem (e) {
      this.$store.commit('updateItem', e.target.value)
      e.target.blur()
    },
    deleteItem () {
      console.log('aaa')
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
