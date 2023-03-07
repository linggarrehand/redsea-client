<script>
import { mapActions } from 'pinia';
import { useProductStore } from '../stores/product';

export default {
  name: 'loginPage',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods : {
    ...mapActions(useProductStore, ['loginHandle']),
    submitHandle () {
      this.loginHandle({
        email: this.email,
        password: this.password
      })
    }
  },
}
</script>

<template>
  <div>
    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card" style="border-radius: 1rem">
              <div class="row g-0">
                <div class="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://media.istockphoto.com/id/1263987339/photo/logistics-and-transportation-of-international-container-cargo-ship-at-port.jpg?s=612x612&w=0&k=20&c=QIxBjMytE_Be5PTVLzY1SFoQr4EA108pz5T88qNuqPQ="
                    alt="login form"
                    class="img-fluid"
                    style="border-radius: 1rem 0 0 1rem"
                  />
                </div>
                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                  <div class="card-body p-4 p-lg-3 text-black">
                    <form @submit.prevent="submitHandle">
                      <div class="d-flex align-items-center mb-3 pb-1">
                        <img
                          src="../assets/RedSea_Final.svg"
                          width="50"
                          class="d-inline-block me-4"
                          alt="UNIQLO"
                        />
                        <!-- <i class="fas fa-cubes fa-2x me-3" style="color: #ff6219;"></i> -->
                      </div>

                      <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px">
                        Sign in into your account
                      </h5>

                      <div class="form-floating mb-4">
                        <input
                          type="email"
                          class="form-control"
                          id="floatingEmail"
                          placeholder="Email"
                          v-model="email"
                        />
                        <label>Email address</label>
                      </div>

                      <div class="form-floating mb-4">
                        <input
                          type="password"
                          class="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                          v-model="password"
                        />
                        <label>Password</label>
                      </div>

                      <div class="pt-1 mb-4">
                        <button class="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
