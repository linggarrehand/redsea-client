import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

export const useProductStore = defineStore('product', {
  state: () => ({ 
    baseUrl: 'http://localhost:3000',
    products: [],
    product: {}

  }),
  getters: {},
  actions: {
    errorHandlingAlert(params) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${params}`
      })
    },
    allSuccessAlert(params) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `${params}`,
        showConfirmButton: false,
        timer: 1500
      })
    },
    loginHandle({ email, password }) {
      axios({
        method: 'post',
        url: this.baseUrl + '/customers/login',
        data: {
          email,
          password
        }
      })
        .then((res) => {
          localStorage.setItem('access_token', res.data.access_token)
          this.router.push('/home')
        })
        .catch((err) => {
          this.errorHandlingAlert(err.response.data.message)
        })
    },
    registerHandle({email, password, phoneNumber}) {
      axios({
        method: 'post',
        url: this.baseUrl + '/customers/register',
        data: {
          email,
          password,
          phoneNumber,
        }
      })
        .then((res) => {
          this.loginHandle({ email, password })
        })
        .catch((err) => {
          this.errorHandlingAlert(err.response.data.message)
        })
    },
    fetchProducts() {
      axios
        .get(this.baseUrl + '/customers/products')
        .then((res) => {
          this.products = res.data
        })
        .catch((err) => {
          this.errorHandlingAlert(err.response.data.message)
        })
    },
    fetchDetail(id) {
      axios({
        method: 'get',
        url: this.baseUrl + `/customers/products/${id}`,
      })
        .then((res) => {
          console.log (res)
          this.product = res.data
        })
        .catch((err) => {
          this.errorHandlingAlert(err.response.data.message)
        })
    },
    addExports(id) {
      axios({
        method: 'post',
        url: this.baseUrl + `/exports/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then((res) => {
          this.allSuccessAlert(res.data.message)
        })
        .catch((err) => {
          this.errorHandlingAlert("You must login first")
        })
    },
  },
})
