<template>
  <div class="newItem">
    <textarea ref="TheTextarea"
      :value="group.itemCache"
      @input="updateCache(group.id, $event), textareaResize($event)"
      @keypress.enter="addItem(group.id, $event), textareaResize($event)"
      @blur="addItem(group.id, $event)">
    </textarea>
  </div>
</template>

<script>
import { onUpdated, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  props: {
    group: Object
  },
  setup () {
    const store = useStore()

    const textareaResize = (e) => {
      e.target.style.height = 0 + 'px'
      const adjuste = e.target.scrollHeight
      if (adjuste > e.target.clientHeight) e.target.style.height = adjuste + 'px'
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
    const TheTextarea = ref(null)
    onUpdated(() => {
      TheTextarea.value.style.height = 0 + 'px'
      const adjuste = TheTextarea.value.scrollHeight
      if (adjuste > TheTextarea.value.clientHeight) TheTextarea.value.style.height = adjuste + 'px'
    })
    return {
      textareaResize,
      updateCache,
      addItem,
      TheTextarea
    }
  }
}
</script>

<style scoped lang="scss">
.newItem {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Rubik', 'Noto Sans TC';
  font-weight: 400;
  textarea {
    width: 100%;
    height: 40px;
    font-size: 28px;
    background-color: $bg-white;
    border: 0;
    border-radius: 10px;
    padding: 0;
    padding: {
      right: 15px;
      left: 15px;
    }
    line-height: 40px;
    resize: none;
    @media screen and (max-width: 2560px) {
      height: 32px;
      font-size: 22px;
      line-height: 32px;
    }
    @media screen and (max-width: 1920px) {
      height: 22px;
      padding: {
        left: 16px;
      };
      font-size: 15px;
      line-height: 22px;
      border-radius: 6px;
    }
    @media screen and (max-width: 1366px) {
      height: 19px;
      font-size: 13px;
      border-radius: 4px;
      line-height: 19px;
    }
    @media screen and (max-width: 768px) {
      height: 16px;
      font-size: 3px;
      padding: {
        left: 10px;
      };
      line-height: 16px;
    }
    @media screen and (max-width: 414px) {
      height: 19px;
      font-size: 13px;
      line-height: 19px;
    }
  }
}
</style>
