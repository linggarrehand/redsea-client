<script>
export default {
    name: "notFoundPage"
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="error-template">
          <h1>Oops!</h1>
          <h2>404 Not Found</h2>
          <div class="error-details">Sorry, the requested page not found!</div>
          <div class="error-actions">
              <router-link class="btn btn-primary" to="/home">Take me home</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>