<script>
import exportCard from '../components/exportCard.vue'
import { mapActions, mapState } from 'pinia'
import { useProductStore } from '../stores/product'
export default {
  name: 'exportPage',
  components: {
    exportCard
  },
  methods: {
    ...mapActions(useProductStore, ['fetchExports'])
  },
  computed: {
    ...mapState(useProductStore, ['exportProducts'])
  },
  created() {
    this.fetchExports()
  }
}
</script>

<template>
  <section style="background-color: #eee">
    <div class="container py-5">
      <div class="row justify-content-evenly">
        <exportCard v-for=" exportProduct in exportProducts" :key="exportProduct.id" :exportProduct="exportProduct"/>
      </div>
    </div>
  </section>
</template>
