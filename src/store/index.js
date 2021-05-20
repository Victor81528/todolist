import { createStore } from 'vuex'

export default createStore({
  state: {
    bgMode: 'mixed',
    groups: [
      {
        id: 0,
        title: 'Things to do',
        list: [
          {
            id: 0,
            item: 'to do item'
          },
          {
            id: 1,
            item: 'another thing'
          },
          {
            id: 2,
            item: 'another thing'
          },
          {
            id: 3,
            item: 'another thing'
          },
          {
            id: 4,
            item: 'another thing'
          }
        ]
      },
      {
        id: 1,
        title: 'Things to do 2',
        list: [
          {
            id: 0,
            item: 'haha'
          },
          {
            id: 1,
            item: 'go away'
          }
        ]
      },
      {
        id: 2,
        title: 'Things to do 2',
        list: [
          {
            id: 0,
            item: 'haha'
          },
          {
            id: 1,
            item: 'go away'
          }
        ]
      }
    ]
  },
  mutations: {
    updateBgMode (state, mode) {
      state.bgMode = mode
    },
    updateTitle (state, pak) {
      const { id, title } = pak
      let indexGroup = Number
      for (let i = 0; i < state.groups.length; i++) {
        if (state.groups[i].id === id) indexGroup = i
      }
      state.groups[indexGroup].title = title
    },
    deleteItem (state, pak) {
      const { idGroup, idItem } = pak
      let indexGroup = Number
      for (let i = 0; i < state.groups.length; i++) {
        if (state.groups[i].id === idGroup) indexGroup = i
      }
      let indexItem = Number
      for (let i = 0; i < state.groups[indexGroup].list.length; i++) {
        if (state.groups[indexGroup].list[i].id === idItem) indexItem = i
      }
      state.groups[indexGroup].list.splice(indexItem, 1)
    },
    updateItem (state, pak) {
      const { idGroup, idItem, item } = pak
      let indexGroup = Number
      for (let i = 0; i < state.groups.length; i++) {
        if (state.groups[i].id === idGroup) indexGroup = i
      }
      let indexItem = Number
      for (let i = 0; i < state.groups[indexGroup].list.length; i++) {
        if (state.groups[indexGroup].list[i].id === idItem) indexItem = i
      }
      state.groups[indexGroup].list[indexItem].item = item
    }
  },
  actions: {
  }
})
