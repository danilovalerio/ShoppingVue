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
    carregarSacola(state, produtos) {
      console.log(produtos)
      state.produtosNaSacola = produtos
    },
    addProdutoAoCarrinho(state, produto) {
      state.produtosNaSacola.push(produto)
      localStorage.setItem("produtosNaSacola", JSON.stringify(state.produtosNaSacola))
    },
    removeProdutoDoCarrinho(state, produtoId) {
      //nao mantém o item que tem o mesmo id
      var atualizaSacola = state.produtosNaSacola.filter(item => produtoId != item.id)
      state.produtosNaSacola = atualizaSacola
      localStorage.setItem("produtosNaSacola", JSON.stringify(state.produtosNaSacola))
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

    carregarSacola({ commit }) {

      if (localStorage.getItem("produtosNaSacola")) {
        commit(
          'carregarSacola', 
          JSON.parse(localStorage.getItem("produtosNaSacola")))

      }
        
    },

    addProdutoAoCarrinho({ commit }, produto) {
      commit('addProdutoAoCarrinho', produto)
    },

    removeProdutoDoCarrinho({ commit }, produtoId) {
      if(confirm('Deseja mesmo remover item do carrinho?')) {
        commit('removeProdutoDoCarrinho', produtoId)
      }
    }

  },
  modules: {
  }
})
