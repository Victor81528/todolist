<template>
  <div class="title">
    <textarea :value="group.title" @input="updateTitle(group.id, $event), textareaResize($event)"></textarea>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  props: {
    group: Object
  },
  setup () {
    const store = useStore()
    const updateTitle = (idGroup, e) => {
      const title = e.target.value
      const pak = { idGroup, title }
      store.commit('updateTitle', pak)
    }
    const textareaResize = (e) => {
      e.target.style.height = 0 + 'px'
      const adjuste = e.target.scrollHeight
      if (adjuste > e.target.clientHeight) e.target.style.height = adjuste + 'px'
    }
    return {
      updateTitle,
      textareaResize
    }
  }
}
</script>

<style scoped lang="scss">
.title {
  display: flex;
  align-items: center;
  margin: {
    top: 13.5px;
    bottom: 27px;
  };
  @media screen and (max-width: 2560px) {
    margin: {
      top: 9px;
      bottom: 18px;
    };
  }
  @media screen and (max-width: 1920px) {
    margin: {
      top: 6px;
      bottom: 12px;
    };
  }
  @media screen and (max-width: 1366px) {
    margin: {
      top: 5px;
      bottom: 10px;
    };
  }
  textarea {
    width: 100%;
    height: 49px;
    padding: 0;
    padding-right: 6px;
    border: 0;
    font-family: 'Rubik', 'Noto Sans TC';
    font-weight: 500;
    font-size: 34px;
    line-height: 49px;
    resize: none;
    @media screen and (max-width: 2560px) {
      height: 45px;
      font-size: 30px;
      line-height: 45px;
    }
    @media screen and (max-width: 1920px) {
      height: 28px;
      font-size: 18px;
      line-height: 28px;
    }
    @media screen and (max-width: 1366px) {
      height: 25px;
      font-size: 17px;
      line-height: 25px;
    }
    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
    @media screen and (max-width: 414px) {
      font-size: 20px;
    }
  }
}
</style>
