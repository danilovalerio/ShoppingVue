import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    
  },
  mutations: {
    
  },
  //actions são responsáveis por alterar as mutations que por sua vez alteram o state
  actions: {

    carregarProdutos() {
      axios
            .get('https://fakestoreapi.com/products')
            .then(response => {
                console.log(response.data)
            })
    }

  },
  modules: {
  }
})
