<template>
    <div id="page-wrap">
        <h1>Shopping Cart</h1>
        <ProductList :cartItems="cartItems" 
        v-on:remove-from-cart="removeFromCart($event)"/>
        <h3 id="total-price">Total: ${{ totalPrice }}</h3>
        <button id="checkout-button">Checkout</button>
    </div>
</template>

<script>
import axios from 'axios';
import ProductList from '../components/ProductList.vue';

export default {
    name: 'CartPage',
    data(){
        return{
            cartItems:[],
        }
    },
    computed: {
        totalPrice(){
            return this.cartItems.reduce(
                (sum,item)=>sum+Number(item.price),
                0
            )
        }
    },
    methods:{
      async removeFromCart(productId){
        const result=await axios.delete(`/api/users/12345/cart/${productId}`);
        this.cartItems = result.data;
      }
    },
    async created(){
      const result = await axios.get('/api/products/12345/cart');
      this.cartItems = result.data;
    },
    components:{
      ProductList,
    },
}
</script>

<style scoped>
  h1 {
    border-bottom: 1px solid black;
    margin: 0;
    margin-top: 16px;
    padding: 16px;
  }

  #total-price {
    padding: 16px;
    text-align: right;
  }

  #checkout-button {
    width: 100%;
  }
</style>