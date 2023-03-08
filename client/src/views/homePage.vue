<script>
import productCard from '../components/productCard.vue'
import { mapActions, mapState } from 'pinia'
import { useProductStore } from '../stores/product'
export default {
  name: 'homePage',
  components: {
    productCard
  },
  methods: {
    ...mapActions(useProductStore, ['fetchProducts'])
  },
  computed: {
    ...mapState(useProductStore, ['products'])
  },
  created() {
    this.fetchProducts()
  }
}
</script>

<template>
  <section style="background-color: #eee">
    <div class="container py-5">
      <div class="row">
        <productCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </section>
</template>
