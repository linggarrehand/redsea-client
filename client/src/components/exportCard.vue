<script>
export default {
  name: 'exportCard',
  props: ['exportProduct', 'key'],
}
</script>

<template>
      <div class="col-md-8 col-lg-6 col-xl-4 mb-5">
        <div class="card text-black w-100 h-100">
          <img :src="exportProduct.Product.imgUrl"
            class="card-img-top" alt="RedSea" />
          <div class="card-body">
            <div class="text-center">
              <h5 class="card-title">{{exportProduct.Product.name}}</h5>
              <p class="text-muted mb-4">Contact the importer</p>
            </div>
            <div>
              <div class="d-flex justify-content-between">
                <span>Price / 500 G</span><span>{{exportProduct.Product.price}} USD</span>
              </div>
              <div class="d-flex justify-content-between">
                <span>Requested in Kg</span><span>{{ exportProduct.Product.requested }}</span>
              </div>
              <div class="d-flex justify-content-between">
                <span>Destination</span><span>{{ exportProduct.Product.destination }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
