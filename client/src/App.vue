<script>
import customNavbar from "./components/customNavbar.vue";
import { RouterView } from 'vue-router';

export default {
  name: 'app',
  components: {
    customNavbar,
  },
}
</script>

<template>
  <section>
    <customNavbar/>
    <RouterView/>
  </section>
</template>