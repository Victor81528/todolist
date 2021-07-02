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
    <!-- <textarea class="aaa" @input="this.rows=this.value.split('\n').length-1"></textarea> -->
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
.aaa {
  width: 300px;
  min-height: 100px;
}
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
        padding: 8px;
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
          right: 12px;
          top: 14px;
          box-sizing: border-box;
          background-color: rgba(black, 0);
          border: none;
          @media screen and (max-width: 2560px) {
            right: 6px;
            top: 8px;
          }
          @media screen and(max-width: 1920px) {
            right: 4px;
          }
          @media screen and (max-width: 1366px) {
            top: 6px;
            right: 2px;
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
        height: $li-height;
        @media screen and (max-width: 2560px) {
          height: 56px;
        }
        @media screen and (max-width: 1920px) {
          height: 36px;
        }
        @media screen and (max-width: 1366px) {
          height: 32px;
        }
        @media screen and (max-width: 768px) {
          height: 24px;
        }
        input {
          font-family: 'Rubik', 'Noto Sans TC';
          font-weight: 500;
          width: 100%;
          border: 0;
          font-size: 34px;
          @media screen and (max-width: 2560px) {
            font-size: 30px;
          }
          @media screen and (max-width: 1920px) {
            font-size: 18px;
          }
          @media screen and (max-width: 1366px) {
            font-size: 17px;
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
          height: $li-height;
          @media screen and (max-width: 2560px) {
            height: 56px;
          }
          @media screen and (max-width: 1920px) {
            height: 36px;
          }
          @media screen and (max-width: 1366px) {
            height: 32px;
          }
          @media screen and (max-width: 768px) {
            height: 24px;
          }
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
                ~ input.itemInput {
                  text-decoration: line-through;
                }
              }
            }
            span.checkMark {
              width: 38px;
              height: 38px;
              box-sizing: border-box;
              border: 3px solid #B4B4B4;
              border-radius: 12px;
              margin-right: 14px;
              @media screen and (max-width: 2560px) {
                width: 32px;
                height: 32px;
                border-radius: 8px;
                margin-right: 9px;
              }
              @media screen and (max-width: 1920px) {
                width: 20px;
                height: 20px;
                border: 2px solid #B4B4B4;
                border-radius: 6px;
                margin-right: 5px;
              }
              @media screen and (max-width: 1366px) {
                width: 17px;
                height: 17px;
                border-radius: 4px;
                margin-right: 4px;
              }
              @media screen and (max-width: 768px) {
                width: 15px;
                height: 15px;
                border-radius: 3px;
                margin-right: 2px;
              }
              @media screen and (max-width: 414px) {
                margin-right: 0px;
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
            input.itemInput {
              width: 240px;
              font-family: 'Rubik', 'Noto Sans TC';
              font-size: 28px;
              font-weight: 400;
              border: 0;
              @media screen and (max-width: 2560px) {
                width: 170px;
                font-size: 22px;
              }
              @media screen and (max-width: 1920px) {
                width: 140px;
                font-size: 15px;
              }
              @media screen and (max-width: 1366px) {
                width: 130px;
                font-size: 12px;
              }
              @media screen and (max-width: 768px) {
                width: 100px;
                font-size: 10px;
              }
              @media screen and (max-width: 414px) {
                width: 140px;
                font-size: 13px;
              }
            }
          }
        }
        .newItem {
          display: flex;
          height: $li-height;
          justify-content: center;
          align-items: center;
          font-family: 'Rubik', 'Noto Sans TC';
          font-weight: 400;
          @media screen and (max-width: 2560px) {
            height: 56px;
          }
          @media screen and (max-width: 1920px) {
            height: 36px;
          }
          @media screen and (max-width: 1366px) {
            height: 32px;
          }
          @media screen and (max-width: 768px) {
            height: 24px;
          }
          label {
            display: flex;
            width: 100%;
            align-items: center;
            input {
              width: 100%;
              font-size: 28px;
              background-color: $bg-white;
              border: 0;
              border-radius: 10px;
              padding: {
                left: 20px;
                top: 5px;
                bottom: 5px;
              }
              @media screen and (max-width: 2560px) {
                font-size: 22px;
              }
              @media screen and (max-width: 1920px) {
                padding: {
                  left: 16px;
                  top: 3px;
                  bottom: 3px;
                };
                font-size: 15px;
              }
              @media screen and (max-width: 1366px) {
                font-size: 13px;
              }
              @media screen and (max-width: 768px) {
                font-size: 12px;
                padding: {
                  left: 10px;
                };
              }
              @media screen and (max-width: 414px) {
                font-size: 13px;
              }
            }
          }
        }
      }
    }
  }
</style>
