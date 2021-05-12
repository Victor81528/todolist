import { createStore } from 'vuex'

export default createStore({
  state: {
    bgMode: 'mixed',
    groups: [
      {
        title: 'Things to do',
        list: [
          'to do item',
          'another thing',
          'to do item',
          'another thing',
          'to do item',
          'another thing',
          'to do item'
        ]
      },
      {
        title: 'Things to do 2',
        list: [
          'haha',
          'go away'
        ]
      },
      {
        title: 'Things to do 3',
        list: [
          'haha',
          'go away'
        ]
      },
      {
        title: 'Things to do 4',
        list: [
          'haha',
          'go away'
        ]
      }
    ]
  },
  mutations: {
    updateBgMode (state, mode) {
      state.bgMode = mode
    },
    updateTitle (state, pak) {
      const { index, title } = pak
      state.groups[index].title = title
    },
    updateItem (state, item, gIndex, itemIndex) {
      state.groups[gIndex].list[itemIndex] = item
    }
  },
  actions: {
  },
  modules: {
  }
})
