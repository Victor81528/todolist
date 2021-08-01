<template>
  <li class="items">
    <label>
      <input
        type="checkbox"
        class="itemCheckbox"
        :class="item.id"
        @input="deleteItem(group.id, item.id, $event)"
      >
      <span class="checkMark">
        <i class="fas fa-check"></i>
      </span>
      <textarea ref="TheTextarea"
        class="itemInput"
        :class="item.id"
        :value="item.item"
        @input="updateItem(group.id, item.id, $event), textareaResize($event)">
      </textarea>
    </label>
  </li>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  props: {
    group: Object,
    item: Object,
    index: Number
  },
  setup (props) {
    const store = useStore()
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
    const TheTextarea = ref(null)
    onMounted(() => {
      TheTextarea.value.style.height = 0 + 'px'
      const adjuste = TheTextarea.value.scrollHeight
      if (adjuste > TheTextarea.value.clientHeight) TheTextarea.value.style.height = adjuste + 'px'
    })
    return {
      deleteItem,
      textareaResize,
      updateItem,
      TheTextarea
    }
  }
}
</script>

<style scoped lang="scss">
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
</style>
