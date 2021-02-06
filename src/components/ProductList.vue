<template>
<div v-if="cartItems.length>0">
    <ProductListItem v-for="cartItem in cartItems" :key="cartItem.id" :cartItem="cartItem"
    v-on:remove-from-cart="$emit('remove-from-cart', $event)"/>
</div>
<p v-else>You haven't add anything to your cart yet</p>
</template>

<script>
import ProductListItem from './ProductListItem.vue';

export default {
    name:'ProductList',
    props: ['cartItems'],
    components: {
        ProductListItem,
    },
}
</script>

<style scoped>

</style>