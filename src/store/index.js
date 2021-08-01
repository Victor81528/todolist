import { createStore } from 'vuex'

export default createStore({
  state: {
    bgMode: 'mixed',
    groups: [
      {
        id: 0,
        title: '待辦事項',
        itemCache: '',
        list: [
          {
            id: 0,
            item: 'item 1'
          },
          {
            id: 1,
            item: 'item 2'
          }
        ]
      },
      {
        id: 1,
        title: '待辦事項2',
        itemCache: '',
        list: [
          {
            id: 0,
            item: 'item 1'
          },
          {
            id: 1,
            item: 'item 2'
          },
          {
            id: 2,
            item: 'item 3'
          },
          {
            id: 3,
            item: 'item 4'
          },
          {
            id: 4,
            item: 'item 5'
          },
          {
            id: 5,
            item: 'item 6'
          }
        ]
      }
    ]
  },
  mutations: {
    addGroup (state) {
      let _thisId = Number
      if (state.groups.length === 0) {
        _thisId = 0
      } else {
        _thisId = state.groups[state.groups.length - 1].id + 1
      }
      state.groups = [...state.groups, { id: _thisId, title: 'Title', itemCache: '', list: [] }]
    },
    updateBgMode (state, mode) {
      state.bgMode = mode
    },
    updateTitle (state, pak) {
      const { idGroup, title } = pak
      let indexGroup = Number
      state.groups.forEach((element, index) => {
        if (element.id === idGroup) indexGroup = index
      })
      state.groups[indexGroup].title = title
    },
    deleteGroup (state, idGroup) {
      let indexGroup = Number
      state.groups.forEach((element, index) => {
        if (element.id === idGroup) indexGroup = index
      })
      state.groups.splice(indexGroup, 1)
    },
    deleteItem (state, pak) {
      const { idGroup, idItem } = pak
      let indexGroup = Number
      state.groups.forEach((element, index) => {
        if (element.id === idGroup) indexGroup = index
      })
      let indexItem
      state.groups[indexGroup].list.forEach((element, index) => {
        if (element.id === idItem) indexItem = index
      })
      if (indexItem || indexItem === 0)state.groups[indexGroup].list.splice(indexItem, 1)
    },
    updateItem (state, pak) {
      const { idGroup, idItem, item } = pak
      let indexGroup = Number
      state.groups.forEach((element, index) => {
        if (element.id === idGroup) indexGroup = index
      })
      let indexItem = Number
      state.groups[indexGroup].list.forEach((element, index) => {
        if (element.id === idItem) indexItem = index
      })
      state.groups[indexGroup].list[indexItem].item = item
    },
    updateCache (state, pak) {
      const { idGroup, item } = pak
      let indexGroup = Number
      state.groups.forEach((element, index) => {
        if (element.id === idGroup) indexGroup = index
      })
      state.groups[indexGroup].itemCache = item
    },
    addItem (state, idGroup) {
      let indexGroup = Number
      state.groups.forEach((element, index) => {
        if (element.id === idGroup) indexGroup = index
      })
      const _thisList = state.groups[indexGroup].list
      let _thisId = Number
      if (_thisList.length === 0) {
        _thisId = 0
      } else {
        _thisId = _thisList[state.groups[indexGroup].list.length - 1].id + 1
      }
      state.groups[indexGroup].list = [...state.groups[indexGroup].list, { id: _thisId, item: state.groups[indexGroup].itemCache }]
      state.groups[indexGroup].itemCache = ''
    }
  }
})
