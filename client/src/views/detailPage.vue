<script>
import { mapActions, mapState } from 'pinia';
import { useProductStore } from '../stores/product';
import Swal from 'sweetalert2'
export default {
    name: "detailPage",
    data () {
    return {
      amount: ''
    }
  },
    computed: {
    ...mapState(useProductStore, ['product', 'userSubscription'])
  },
  methods: {
    ...mapActions(useProductStore, ['fetchDetail', 'addExports', 'changeCurrency']),
    submitHandleCurrency () {
      this.changeCurrency(this.amount)
    },
    submitHandleExport () {
      if (!this.userSubscription) {
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `You have to subscribe first`
      })
      } else {
        this.addExports(this.product.id)
      }
    }
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
          }} USD / 500 G
          </p>
          <p class="lead"> Requested: {{ product.requested }} Kg
          </p>
          <form @submit.prevent="submitHandleCurrency">
            <div class="form-floating mb-4">
              <input
                type="number"
                class="form-control"
                id="floatingAmount"
                placeholder="amount"
                v-model="amount"
              />
              <label>Input USD currency</label>
            </div>
            <div class="pt-1 mb-4">
              <button class="btn btn-dark btn-sm btn-block" type="submit">Convert to IDR</button>
            </div>
          </form>
          <div class="d-flex">
            <button class="btn btn-outline-dark" type="button" >
              <a class="material-symbols-outlined" @click.prevent="submitHandleExport"> local_shipping </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>