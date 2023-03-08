<script>
import { mapActions, mapState } from 'pinia';
import { useProductStore } from '../stores/product';

export default {
  name: 'customPagination',
  computed: {
    ...mapState(useProductStore, ['products', 'page'])
  },
  methods: {
    ...mapActions (useProductStore, ['fetchProductsByPage']),
  }
}
</script>

<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="fetchProductsByPage(page-1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"><a class="page-link" href="#" @click.prevent="fetchProductsByPage(0)">1</a></li>
      <li class="page-item"><a class="page-link" href="#" @click.prevent="fetchProductsByPage(1)">2</a></li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="fetchProductsByPage(page+1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
