<template>
  <div id="navBar">
    <header>
      <nav>
        <div class="bgMode">
          <button id="optionSwitch" @click="openOption">{{bgMode}} <i class="fas fa-caret-down" :class="{'rotate': open}"></i></button>
          <div class="options" :class="{'isOpen': open}">
            <button class="option" @click="updateBgMode('mixed')">Mixed</button>
            <button class="option" @click="updateBgMode('dark')">Dark Mode</button>
            <button class="option" @click="updateBgMode('light')">Light Mode</button>
          </div>
        </div>
        <button id="addGroup" @click="addGroup"><i class="fas fa-plus"></i></button>
      </nav>
    </header>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'NavBar',
  setup () {
    const store = useStore()
    const open = ref(false)
    const addGroup = () => {
      store.commit('addGroup')
    }
    const openOption = () => {
      open.value = !open.value
    }
    const updateBgMode = (mode) => {
      store.commit('updateBgMode', mode)
      openOption()
    }
    return {
      bgMode: computed(() => store.state.bgMode),
      open,
      addGroup,
      openOption,
      updateBgMode
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
  @media screen and (max-width: 1920px) {
    height: 30px;
  }
  @media screen and (max-width: 1366px) {
    height: 24px;
  }
  @media screen and (max-width: 768px) {
    height: 30px;
  }
  @media screen and (max-width: 414px) {
    height: 45px;
  }
  header {
    width: 100%;
    height: 100%;
    nav {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: flex-start;
      align-items: center;
      background-color: $bg-gray;
      .bgMode {
        display: flex;
        position: relative;
        height: 100%;
        width: 180px;
        flex-flow: nowrap column;
        justify-content: flex-start;
        align-items: center;
        padding: 0;
        font-size: 32px;
        @media screen and (max-width: 1920px) {
          width: 100px;
          font-size: 16px;
        }
        @media screen and (max-width: 1366px) {
          width: 90px;
          font-size: 14px;
        }
        @media screen and (max-width: 768px) {
          width: 100px;
          font-size: 17px;
        }
        @media screen and (max-width: 414px) {
          width: 110px;
        }
        button#optionSwitch {
          width: 100%;
          height: 100%;
          padding: 0;
          border: 0;
          border-radius: 0;
          color: $bg-white;
          background-color: initial;
          .rotate {
            transform: rotate(-180deg)
          }
        }
        .options {
          display: none;
        }
        .isOpen {
          display: flex;
          position: absolute;
          width: 100%;
          flex-flow: nowrap column;
          justify-content: flex-start;
          top: 50px;
          border-top: 1px solid #161717;
          @media screen and (max-width: 1920px) {
            top: 30px
          }
          @media screen and (max-width: 1366px) {
            top: 24px;
          }
          @media screen and (max-width: 768px) {
            top: 30px;
          }
          @media screen and (max-width: 414px) {
            top: 45px;
          }
          button.option {
            height: 50px;
            padding: 0;
            border: 0;
            border-radius: 0;
            border-bottom: 1px solid #161717;
            background-color: rgb(97, 97, 97);
            color: $bg-white;
            @media screen and (max-width: 1920px) {
              height: 30px;
            }
            @media screen and (max-width: 1366px) {
              height: 24px;
            }
            @media screen and (max-width: 768px) {
              height: 30px;
            }
            @media screen and (max-width: 414px) {
              height: 45px;
            }
          }
        }
      }
      button#addGroup {
        display: flex;
        position: absolute;
        width: 60px;
        height: 60px;
        right: 10px;
        bottom: -40px;
        justify-content: center;
        align-items: center;
        font-family: 'Rubik', sans-serif;
        background-color: rgb(97, 97, 97);
        border: 3px solid $bg-white;
        border-radius: 50%;
        @media screen and (max-width: 1920px) {
          width: 32px;
          height: 32px;
          bottom: -22px;
          border: 2px solid $bg-white;
        }
        @media screen and (max-width: 1366px) {
          width: 28px;
          height: 28px;
          bottom: -18px;
          right: 8px;
          border: 2px solid $bg-white;
        }
        @media screen and (max-width: 768px) {
          width: 35px;
          height: 35px;
          bottom: -23px;
          right: 8px;
          border: 2px solid $bg-white;
        }
        @media screen and (max-width: 414px) {
          width: 42px;
          height: 42px;
          bottom: -25px;
          right: 8px;
          border: 2px solid $bg-white;
        }
        .fa-plus {
          font-size: 28px;
          font-weight: 1200;
          color: $bg-white;
          @media screen and (max-width: 1920px) {
            font-size: 15px;
            font-weight: 700;
          }
          @media screen and (max-width: 1366px) {
            font-size: 13px;
            font-weight: 600;
          }
          @media screen and (max-width: 414px) {
            font-size: 15px;
          }
        }
      }
    }
  }
}
</style>
