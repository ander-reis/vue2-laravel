import Vue from 'vue'

export default {
  state: {
    banktList: []
  },
  mutations: {
    updateBankList (state, data) {
      state.bankList = data
    }
  },
  actions: {
    getBanks (context) {
      Vue.http.get('api/banks?limit=200').then(response => {
        context.commit('updateBankList', response.data.data)
      })
    }
  }
}
