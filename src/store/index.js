import { createStore } from 'vuex'

export default createStore({
  state: {
    bgMode: 'mixed',
    groups: [
      {
        id: 0,
        title: 'Title 1',
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
        title: 'Title 2',
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
        title: 'Title 3',
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
    addGroup (state) {
      const lastId = state.groups[state.groups.length - 1].id
      state.groups = [...state.groups, { id: lastId + 1, title: 'Title', list: [] }]
    },
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
    },
    addItem (state, pak) {
      const { idGroup, item } = pak
      let indexGroup = Number
      for (let i = 0; i < state.groups.length; i++) {
        if (state.groups[i].id === idGroup) indexGroup = i
      }
      const _thisList = state.groups[indexGroup].list
      let _thisId = Number
      if (_thisList.length === 0) {
        _thisId = 0
      } else {
        _thisId = _thisList[state.groups[indexGroup].list.length - 1].id + 1
      }
      state.groups[indexGroup].list = [...state.groups[indexGroup].list, { id: _thisId, item: item }]
    }
  }
})
