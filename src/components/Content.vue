<template>
  <div id="content">
    <div class="groups" v-for="group of groups" :key="group.id">
      <button id="btnDelet" @click="deleteGroup(group.id)">
        <i class="fas fa-times-circle"></i>
      </button>
      <div class="title">
        <input type="text" :value="group.title" @input="updateTitle(group.id, $event)">
      </div>
      <ul>
        <li class="items" v-for="item of group.list" :key="item.id">
          <label>
            <input type="checkbox" class="itemCheckbox" :class="item.id" @input="deleteItem(group.id, item.id)">
            <span class="checkMark"><i class="fas fa-check"></i></span>
            <input type="text" class="itemInput" :class="item.id" :value="item.item" @input="updateItem(group.id, item.id, $event)">
          </label>
        </li>
        <li class="newItem">
          <label>
            <input type="textarea" :value="group.itemCache" @input="updateCache(group.id, $event)" @keypress.enter="addItem(group.id, $event)" @blur="addItem(group.id, $event)">
          </label>
        </li>
      </ul>
    </div>
    <!-- <textarea @input="this.rows=this.value.split('\n').length-1"></textarea> -->
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
      width: 549px;
      min-height: 250px;
      box-sizing: border-box;
      border-radius: 16px;
      background-color: #FFFFFF;
      margin-right: 30px;
      padding: 48px;
      #btnDelet {
        display: none;
      }
      &:hover {
        #btnDelet {
          display: block;
          position: absolute;
          right: 18px;
          top: 18px;
          box-sizing: border-box;
          background-color: inherit;
          border: none;
          .fa-times-circle {
            font-size: 30px;
            color: $bg-black;
          }
        }
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
        li.items{
          display: flex;
          align-items: center;
          height: 80px;
          label {
            display: flex;
            position: relative;
            flex-flow: nowrap row;
            justify-content: flex-start;
            align-items: center;
            input.itemCheckbox {
              position: absolute;
              opacity: 0;
              cursor: pointer;
              height: 0;
              width: 0;
              &:checked {
                ~ span.checkMark{
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  border: 0;
                  background-color: #29ABE2;
                  i.fa-check {
                    display: inline;
                    font-size: 32px;
                    color: #FFFFFF;
                  }
                }
                ~ span.checkMark:after{
                  // display: block;
                  // left: calc((48px - 27px) / 2);
                  // top: calc((48px - 23px) / 2);
                  // width: 12.5px;
                  // height: 23px;
                  // border: solid #FFFFFF;
                  // border-width: 0 6px 6px 0;
                  // transform: rotate(45deg);
                }
                ~ input.itemInput {
                  text-decoration: line-through;
                }
              }
            }
            span.checkMark {
              width: 48px;
              height: 48px;
              box-sizing: border-box;
              border: 3px solid #B4B4B4;
              border-radius: 12px;
              margin-right: 24px;
              &:hover {
                background-color: #B4B4B4;
              }
              &:after {
                display: none;
                position: absolute;
                content: "";
              }
              i.fa-check {
                display: none;
              }
            }
            input.itemInput {
              font-family: 'Rubik', sans-serif;
              font-size: 32px;
              font-weight: 400;
              border: 0;
            }
          }
        }
        .newItem {
          display: flex;
          height: 80px;
          justify-content: center;
          align-items: center;
          label {
            display: flex;
            height: 48px;
            width: 100%;
            align-items: center;
            input {
              width: 100%;
              font-size: 32px;
              background-color: $bg-white;
              border: 0;
              border-radius: 16px;
              padding: {
                left: 20px;
                top: 7px;
                bottom: 7px;
              }
            }
          }
        }
      }
    }
  }
</style>
