<script>
export default {
  name: 'productCard',
  props: ['product', 'key'],
  methods: {
    detailHandle() {
      this.$router.push('/detail/' + this.product.id)
    }
  }
}
</script>

<template>
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="bg-image hover-zoom ripple shadow-1-strong rounded w-100 h-100">
          <img :src="product.imgUrl"
            class="w-100 h-100" />
          <a href="#!">
            <div class="mask" style="background-color: rgba(0, 0, 0, 0.3);">
              <div class="d-flex justify-content-start align-items-start h-100">
                <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">To {{ product.destination }}</span></h5>
              </div>
            </div>
            <div class="hover-overlay">
              <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);" @click.prevent="detailHandle">
                <div class="d-flex justify-content-center align-items-center h-100">
                  <button class="btn btn-dark btn-lg">Details</button>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
</template>
