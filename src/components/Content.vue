<template>
  <div id="content">
    <div class="groups" v-for="group of groups" :key="group.id">
      <button id="btnDelet" @click="deleteGroup(group.id)">
        <i class="fas fa-times-circle"></i>
      </button>
      <div class="title">
        <textarea :value="group.title" @input="updateTitle(group.id, $event), textareaResize($event)"></textarea>
      </div>
      <ul>
        <li class="items" v-for="item of group.list" :key="item.id">
          <label>
            <input type="checkbox" class="itemCheckbox" :class="item.id" @input="deleteItem(group.id, item.id, $event)">
            <span class="checkMark"><i class="fas fa-check"></i></span>
            <textarea class="itemInput" :class="item.id" :value="item.item"
              @input="updateItem(group.id, item.id, $event),  textareaResize($event)">
            </textarea>
          </label>
        </li>
        <div class="newItem">
          <textarea :value="group.itemCache"
            @input="updateCache(group.id, $event), textareaResize($event)"
            @keypress.enter="addItem(group.id, $event)"
            @blur="addItem(group.id, $event)">
          </textarea>
        </div>
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
    aaa (q) {
      console.log(q)
    },
    deleteGroup (idGroup) {
      this.$store.commit('deleteGroup', idGroup)
    },
    updateTitle (idGroup, e) {
      const title = e.target.value
      const pak = { idGroup, title }
      this.$store.commit('updateTitle', pak)
    },
    deleteItem (idGroup, idItem, e) {
      e.target.style.pointerEvents = 'none'
      const pak = { idGroup, idItem }
      setTimeout(() => {
        this.$store.commit('deleteItem', pak)
      }, 500)
    },
    textareaResize (e) {
      const adjuste = e.target.scrollHeight
      if (adjuste > e.target.clientHeight) e.target.style.height = adjuste + 'px'
      // console.log('scrollHeight:' + e.target.scrollHeight)
      // console.log('clientHeight' + e.target.clientHeight)
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
      console.log(item)
    },
    addItem (idGroup, e) {
      if (e.target.value) this.$store.commit('addItem', idGroup)
      e.preventDefault()
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
      };
    }
    @media screen and (max-width: 768px) {
      padding: {
        top: 80px;
        right: 30px;
        bottom: 30px;
        left: 30px;
      };
    }
    @media screen and (max-width: 414px) {
      padding: {
        top: 100px;
        right: 7px;
        left: 10px
      };
    }
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
                top: 0px;
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
                height: 17px;
                font-size: 12px;
                line-height: 17px;
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
                top: 3px;
                left: 16px;
              };
              font-size: 15px;
              line-height: 22px;
              border-radius: 6px;
            }
            @media screen and (max-width: 1366px) {
              height: 17px;
              font-size: 12px;
              border-radius: 4px;
              line-height: 17px;
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
              padding-top: 2px;
              font-size: 13px;
              line-height: 19px;
            }
          }
        }
      }
    }
  }
</style>
