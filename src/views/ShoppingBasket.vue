<template>
<div class="basket">
    <div class="items">
        <template v-if="produtosNaSacola.length">

            <div v-for="(produto, index) in produtosNaSacola" :key="index" class="item">
                <div class="remove" @click="this.$store.dispatch('removeProdutoDoCarrinho',produto.id)">Remover Produto</div>
                <div class="photo"><img :src="produto.image" alt=""></div>
                <div class="description">{{produto.title}} </div>
                <div class="price">
                    <span class="quantity-area">
                        <button :disabled="produto.quantity <= 1" @click="produto.quantity--">-</button>
                        <span class="quantity">{{produto.quantity}}</span>
                        <button @click="produto.quantity++">+</button>
                    </span>
                    <span class="amount">{{(produto.price * produto.quantity).toFixed(2)}}</span>
                </div>
            </div>
            <div class="grand-total"> Total do pedido: R$ {{totalDoPedido()}}</div>
        </template>
        <template v-else><h4>Não temos item na sacola.</h4></template>

    </div>

</div>
</template>

<script>
import {
    mapState
} from "vuex";

export default {
    name: 'ShoppingBasket',

    methods: {
      totalDoPedido(){
        var total = 0
        this.$store.state.produtosNaSacola.forEach(item => {
          total += item.price * item.quantity          
        });

        return total.toFixed(2)
      }
    },

    computed: mapState([
        'produtosNaSacola'
    ]),

}
</script>

<style lang="scss">
.basket {
    padding: 60px 0;

    .items {
        max-width: 800px;
        margin: auto;

        .item {
            display: flex;
            justify-content: space-between;
            padding: 40px 0;
            border-bottom: 1px solid lightgrey;
            position: relative;

            .remove {
                position: absolute;
                top: 8px;
                right: 0;
                font-size: 11px;
                text-decoration: underline;
                cursor: pointer;
            }

            .quantity-area {
                margin: 8px auto;
                height: 14px;

                button {
                    width: 16px;
                    height: 16px;
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                }

                .quantity {

                    margin: 0 4px;
                }
            }

            .photo {
                img {
                    max-width: 80px;
                }
            }

            .description {
                padding-left: 30px;
                box-sizing: border-box;
                max-width: 50%;

            }

            .price {
                .amount {
                    font-size: 16px;
                    margin-left: 8px;
                    vertical-align: middle;

                }
            }
        }

        .grand-total {
            font-size: 24px;
            font-weight: bold;
            text-align: right;
            margin-top: 8px;
        }

    }

}
</style>
