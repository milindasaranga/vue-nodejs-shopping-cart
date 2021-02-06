<template>
    <div class="grid-wrap">
        <ProductGridItems
            v-for="product in products"
            :key="product.id"
            :product="product"/>
    </div>
</template>

<script>
import ProductGridItems from './ProductGridItems.vue'

export default {
    name:'ProductGrid',
    props: ['products'],
    components: {
        ProductGridItems,
    },
}
</script>

<style scoped>
    .grid-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
  }
</style>