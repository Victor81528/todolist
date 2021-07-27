<template>
  <div class="groups">
    <button id="btnDelet" @click="deleteGroup(group.id)">
      <i class="fas fa-times-circle"></i>
    </button>
    <GroupTitle :group="group"/>
    <ul>
      <GroupItem
        v-for="(item, index) of group.list"
        :key="item.id"
        :group="group"
        :item="item"
        :index="index"
      />
    </ul>
    <GroupNewItem :group="group"/>
  </div>
</template>

<script>
import GroupTitle from './GroupTitle.vue'
import GroupItem from './GroupItem.vue'
import GroupNewItem from './GroupNewItem.vue'
import { useStore } from 'vuex'

export default {
  components: {
    GroupTitle,
    GroupItem,
    GroupNewItem
  },
  props: {
    group: Object
  },
  setup () {
    const store = useStore()

    const deleteGroup = (idGroup) => {
      store.commit('deleteGroup', idGroup)
    }
    const updateTitle = (idGroup, e) => {
      const title = e.target.value
      const pak = { idGroup, title }
      store.commit('updateTitle', pak)
    }
    const deleteItem = (idGroup, idItem, e) => {
      e.target.style.pointerEvents = 'none'
      const pak = { idGroup, idItem }
      setTimeout(() => {
        store.commit('deleteItem', pak)
      }, 500)
    }
    const textareaResize = (e) => {
      e.target.style.height = 0 + 'px'
      const adjuste = e.target.scrollHeight
      if (adjuste > e.target.clientHeight) e.target.style.height = adjuste + 'px'
    }
    const updateItem = (idGroup, idItem, e) => {
      const item = e.target.value
      const pak = { idGroup, idItem, item }
      store.commit('updateItem', pak)
    }
    const updateCache = (idGroup, e) => {
      const item = e.target.value
      const pak = { idGroup, item }
      store.commit('updateCache', pak)
    }
    const addItem = (idGroup, e) => {
      e.preventDefault()
      if (e.target.value) store.commit('addItem', idGroup)
    }
    return {
      deleteGroup,
      updateTitle,
      deleteItem,
      textareaResize,
      updateItem,
      updateCache,
      addItem
    }
  }
}
</script>

<style scoped lang="scss">
.groups {
  position: relative;
  width: 360px;
  box-sizing: border-box;
  border-radius: 16px;
  background-color: #FFFFFF;
  padding: 32px;
  margin: {
    top: 25px;
    right: 25px;
  }
  @media screen and (max-width: 2560px) {
    width: 260px;
    padding: 22px;
    margin: {
      top: 16px;
      right: 16px;
    }
  }
  @media screen and (max-width: 1920px) {
    width: 200px;
    padding: 16px;
    border-radius: 12px;
    margin: {
      top: 14px;
      right: 12px;
    }
  }
  @media screen and (max-width: 1366px) {
    width: 180px;
    padding: 12px;
    border-radius: 8px;
    margin: {
      top: 10px;
      right: 9px
    };
  }
  @media screen and (max-width: 768px) {
    width: 140px;
    padding: 10px;
    border-radius: 6px;
    margin: {
      top: 8px;
      right: 7px;
    };
  }
  @media screen and (max-width: 414px) {
    width: 180px;
    padding: 12px;
    margin: {
      top: 6px;
      right: 6px;
    };
  }
  @media screen and (max-width: 375px) {
    width: 172px;
  }
  #btnDelet {
    display: none;
  }
  &:hover {
    #btnDelet {
      display: block;
      position: absolute;
      right: 8px;
      top: 14px;
      box-sizing: border-box;
      background-color: rgba(black, 0);
      border: none;
      @media screen and (max-width: 2560px) {
        top: 8px;
        right: 6px;
      }
      @media screen and(max-width: 1920px) {
        top: 6px;
        right: 2px;
      }
      @media screen and (max-width: 1366px) {
        top: 6px;
      }
      @media screen and (max-width: 768px) {
        top: 3px;
        right: 0px;
      }
      @media screen and (max-width: 414px) {
        top: 0px;
        right: -14px;
      }
      @media screen and (max-width: 375px) {
        top: 0px;
        right: -14px;
      }
      .fa-times-circle {
        font-size: 30px;
        color: $bg-gray;
        @media screen and (max-width: 2560px) {
          font-size: 24px;
        }
        @media screen and (max-width: 1920px) {
          font-size: 20px;
        }
        @media screen and (max-width: 1366px) {
          font-size: 16px;
        }
        @media screen and (max-width: 768px) {
          font-size: 12px;
        }
        @media screen and (max-width: 414px) {
          font-size: 17px;
        }
        &:hover {
          color: $bg-white;
        }
      }
    }
  }
  ul {
    li.items{
      display: flex;
      align-items: center;
      margin-bottom: 27px;
      @media screen and (max-width: 2560px) {
        margin-bottom: 24px;
      }
      @media screen and (max-width: 1920px) {
        margin-bottom: 16px;
      }
      @media screen and (max-width: 1366px) {
        margin-bottom: 15px;
      }
      @media screen and (max-width: 1366px) {
        margin-bottom: 15px;
      }
      label {
        display: flex;
        position: relative;
        height: 100%;
        flex-flow: nowrap row;
        justify-content: flex-start;
        align-items: flex-start;
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
                font-size: 26px;
                color: #FFFFFF;
                @media screen and (max-width: 2560px) {
                  font-size: 24px;
                }
                @media screen and (max-width: 1920px) {
                  font-size: 13px;
                }
                @media screen and (max-width: 1366px) {
                  font-size: 11px;
                }
                @media screen and (max-width: 768px) {
                  font-size: 10px;
                }
              }
            }
            ~ textarea.itemInput {
              text-decoration: line-through;
            }
          }
        }
        span.checkMark {
          position: relative;
          width: 38px;
          height: 38px;
          align-self: flex-start;
          top: 2px;
          box-sizing: border-box;
          border: 3px solid #B4B4B4;
          border-radius: 12px;
          margin-right: 14px;
          @media screen and (max-width: 2560px) {
            width: 32px;
            height: 32px;
            top: 0px;
            border-radius: 8px;
            margin-right: 9px;
          }
          @media screen and (max-width: 1920px) {
            width: 20px;
            height: 20px;
            top: 1px;
            border: 2px solid #B4B4B4;
            border-radius: 6px;
            margin-right: 5px;
          }
          @media screen and (max-width: 1366px) {
            width: 17px;
            height: 17px;
            top: 1px;
            border-radius: 4px;
            margin-right: 4px;
          }
          @media screen and (max-width: 768px) {
            width: 15px;
            height: 15px;
            top: 1px;
            border-radius: 3px;
            margin-right: 2px;
          }
          @media screen and (max-width: 414px) {
            width: 18px;
            height: 18px;
            top: 1px;
            margin-right: 3px;
          }
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
        textarea.itemInput {
          width: 240px;
          height: 42px;
          box-sizing: border-box;
          font-family: 'Rubik', 'Noto Sans TC';
          font-size: 28px;
          font-weight: 400;
          border: 0;
          padding: 0;
          line-height: 42px; //line-height與height同高以實現文字垂直置中
          resize: none;
          @media screen and (max-width: 2560px) {
            width: 170px;
            height: 32px;
            font-size: 22px;
            line-height: 32px;
          }
          @media screen and (max-width: 1920px) {
            width: 140px;
            height: 22px;
            font-size: 15px;
            line-height: 22px;
          }
          @media screen and (max-width: 1366px) {
            width: 130px;
            height: 19px;
            font-size: 13px;
            line-height: 19px;
          }
          @media screen and (max-width: 768px) {
            width: 100px;
            height: 17px;
            font-size: 9px;
          }
          @media screen and (max-width: 414px) {
            width: 140px;
            height: 20px;
            font-size: 14px;
            line-height: 20px;
          }
        }
      }
    }
  }
}
</style>
