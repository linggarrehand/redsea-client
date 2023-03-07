<script>
export default {
  name: 'customNavbar',
}
</script>

<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <!-- Container wrapper -->
    <div class="container">
      <!-- Navbar brand -->
      <a class="navbar-brand me-2" href="#">
        <img src="../assets/RedSea_Final.svg" width="80" class="d-inline-block me-4" alt="UNIQLO" />
      </a>

      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarButtonsExample"
        aria-controls="navbarButtonsExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarButtonsExample">
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/export" >My Bookmark</router-link>
          </li>
        </ul>

        <!-- Left links -->
        <!-- Change It -->
        <!-- <div class="dropdown">
          <button
            class="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Filter by category
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#" @click.prevent="fetchProducts">ALL</a></li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                v-for="category in categories"
                :key="category.id"
                @click.prevent="fetchProductsByCategory(category.id)"
                >{{ category.name }}</a
              >
            </li>
          </ul>
        </div> -->

        <div class="d-flex align-items-center">
          <router-link type="button" class="btn btn-link px-3 me-2" to="/login" >Login</router-link>
          <router-link
            type="button"
            class="btn btn-link btn-outline-primary px-3 me-2"
            data-mdb-ripple-color="dark"
            to="/register"
            
            >Sign Up</router-link
          >
          <router-link
            type="button"
            class="btn btn-outline-danger"
            data-mdb-ripple-color="dark"
            to="/home"
            >Logout</router-link
          >
        </div>
      </div>
      <!-- Collapsible wrapper -->
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->
</template>
