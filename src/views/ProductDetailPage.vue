<template>
  <div id="page-wrap" v-if="product">
    <div id="img-wrap">
      <img v-bind:src="product.imageUrl"/>
    </div>
    <div id="product-details">
      <h1>{{product.name }}</h1>
      <h3 id="price">${{  product.price }}</h3>
      <p>Average Rating: {{product.averageRating}}</p>
      <button id="add-to-cart" v-if="!itemIsInCart && !showSuccessMsg"
      v-on:click="addToCart">Add to cart</button>
      <button id="add-to-cart" v-if="!itemIsInCart && showSuccessMsg" class="green-button"
      >Successfully added item to cart!</button>
      <button id="item-in-cart" v-if="itemIsInCart" class="grey-button">
        Item is already in cart</button>
      <h4>Description</h4>
      <p>{{ product.description }}</p>
    </div>
  </div>
  <NotFoundPage v-else/>
</template>

<script>
import axios from 'axios';
import NotFoundPage from './NotFoundPage';

export default {
    name: 'ProdcutDetailPage',
    component: {
      NotFoundPage,
    },
    data(){
      return {
        product: {},
        showSuccessMsg:false,
        cartItems: [],
      };
    },
    computed:{
      itemIsInCart(){
        return this.cartItems.some(item=>item.id === this.product.id)
      }
    },
    async created(){
      const {data: product} = await axios.get(`/api/products/${this.$route.params.id}`);
      this.product = product;

       const {data: cartItems} = await axios.get('/api/products/12345/cart');
       this.cartItems = cartItems;
    },
    methods:{
      async addToCart(){
        await axios.post('/api/products/12345/cart',{
          productId: this.$route.params.id,
        });
        this.showSuccessMsg=true;
        setTimeout(() => {
          this.$router.push('/products');
        }, 1500);
      }
    }
}
</script>

<style scoped>
  #page-wrap {
    margin-top: 16px;
    padding: 16px;
    max-width: 600px;
  }

  #img-wrap {
    text-align: center;
  }

  img {
    width: 400px;
  }

  #product-details {
    padding: 16px;
    position: relative;
  }

  #add-to-cart {
    width: 100%;
  }

  #price {
    position: absolute;
    top: 24px;
    right: 16px;
  }

  .green-button{
    background-color: green;
  }

  .grey-button{
    background-color: #888;
    width: 100%;
  }
</style>
