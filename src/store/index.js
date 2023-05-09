import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    produtos: [],
    produtosNaSacola: [],
  },
  mutations: {
    //o 1 argumento sempre será state para termos acesso aos dados
    carregarProdutos(state, produtos) {
      console.log(produtos)
      state.produtos = produtos
    },
    addProdutoAoCarrinho(state, produto) {
      state.produtosNaSacola.push(produto)
    }
  },
  //actions são responsáveis por alterar as mutations que por sua vez alteram o state
  actions: {

    carregarProdutos({ commit }) {
      axios
        .get('https://fakestoreapi.com/products')
        .then(response => {
          //para usar a mutacao 'carregarProdutos' tem que ser o commit
          //console.log(response.data)
          commit('carregarProdutos', response.data)
        })
    },

    addProdutoAoCarrinho({ commit }, produto) {
      commit('addProdutoAoCarrinho', produto)
    }

  },
  modules: {
  }
})
