<script>
import { mapActions, mapState } from 'pinia';
import { useProductStore } from '../stores/product';
export default {
    name: "detailPage",
    computed: {
    ...mapState(useProductStore, ['product'])
  },
  methods: {
    ...mapActions(useProductStore, ['fetchDetail', 'addExports'])
  },
  created () {
    this.fetchDetail(this.$route.params.id)
  }
    
}
</script>

<template>
<section class="py-5">
    <div class="container px-4 px-lg-5 my-5">
      <div class="row gx-4 gx-lg-5 align-items-center">
        <div class="col-md-6">
          <img
            class="card-img-top mb-5 mb-md-0"
            :src="product.imgUrl"
            alt="..."
          />
        </div>
        <div class="col-md-6">
          <h1 class="display-5 fw-bolder">{{product.name}}</h1>
          <div class="fs-5 mb-5">
            <span>To {{ product.destination }}</span>
          </div>
          <i class="bi bi-bag-plus"></i>
          <p class="lead"> Open Price:  {{ 
          product.price
          }} $ / 500 Grams
          </p>
          <p class="lead"> Requested: {{ product.requested }} KG
          </p>
          <div class="d-flex">
            <button class="btn btn-outline-dark" type="button" >
              <a class="material-symbols-outlined" @click.prevent="addExports(product.id)"> local_shipping </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>