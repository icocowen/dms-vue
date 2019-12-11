import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse: true,
    openMsgTips: false,
    pathInfo: [],
    adaptHeight: {
      'margin-bottom': 'auto',
      'height': '100%',
      'overflow-y': 'hidden'
    },
    // treeAdaptHeight: "height:"+(window.innerHeight - 60 - 80 - 51)+"px"
    windowInnerHeight: window.innerHeight
  },
  mutations: {
    fireWindowInnerHeight(state) {
      state.windowInnerHeight =  window.innerHeight;
    },
    fireadaptHeight(state, way) {
      if (way === 'abnorm') {
        state.adaptHeight = {
          'margin-bottom': '60px',
          'height': 'auto',
          'overflow-y': 'auto'
        }
      }else {
        state.adaptHeight = {
          'margin-bottom': 'auto',
          'height': '100%',
          'overflow-y': 'hidden'
        }
      }
    },
    fireCollapse(state) {
      state.isCollapse  = ! state.isCollapse;
    },
    fireMsgTips(state) {
      state.openMsgTips  = ! state.openMsgTips;
    },
    firePathInfo(state, pathInfo) {
      state.pathInfo = pathInfo;
    }
  },
  actions: {
  },
  modules: {
  }
})
