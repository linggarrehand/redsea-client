import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

export const useProductStore = defineStore('product', {
  state: () => ({ 
    baseUrl: 'http://localhost:3000',
    products: [],
    product: {},
    exportProducts: [],
    categories: [], 
    page: '',
    isLogin: false,
    userEmail: '',
    userSubscription: ''

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
    currencySuccessAlert (params) {
      Swal.fire(params)
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
          this.isLogin = true
          this.currentCustomer(res.data.access_token)
          this.router.push('/home')
        })
        .catch((err) => {
          this.errorHandlingAlert(err.response.data.message)
        })
    },
    currentCustomer (access_token) {
      axios({
        method: 'get',
        url: this.baseUrl + '/customers/details',
        headers: {
          access_token
        }
      })
      .then((res) => {
        this.userEmail = res.data.email
        this.userSubscription = res.data.subscribe
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
    fetchExports() {
      axios({
        method: 'get',
        url: this.baseUrl + '/exports',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then((res) => {
          this.exportProducts = res.data
        })
        .catch((err) => {
          this.errorHandlingAlert(err.response.data.message)
        })
    },
    logoutHandle() {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You will be logged out',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear()
          this.isLogin = false
          this.router.push('/home')
          Swal.fire('Success!', 'You already logged out', 'success')
        }
      })
    },
    fetchCategory() {
      axios({
        method: 'get',
        url: this.baseUrl + '/customers/categories'
      })
        .then((res) => {
          this.categories = res.data
        })
        .catch((err) => {
          this.errorHandlingAlert(err.response.data.message)
        })
    },
    fetchProductsByCategory(id) {
      axios({
        method: 'get',
        url: this.baseUrl + `/customers/products?categoryId=${id}`
      })
        .then((res) => {
          this.page = 0
          this.products = res.data
        })
        .catch((err) => {
          this.errorHandlingAlert(err.response.data.message)
        })
    },
    fetchProductsByPage(pageNumber) {
      if (pageNumber < 0 || pageNumber > 1) {
        this.errorHandlingAlert('Page not found')
      } else {
        axios({
          method: 'get',
          url: this.baseUrl + `/customers/products?page=${pageNumber}`
        })
          .then((res) => {
            this.page = pageNumber
            this.products = res.data
          })
          .catch((err) => {
            this.errorHandlingAlert(err.response.data.message)
          })
      }
    },
    changeCurrency(amount) {
      axios({
        method: 'get',
        url: this.baseUrl + `/customers/currency`,
        headers: {
          amount
        }
      })
        .then((res) => {
          this.currencySuccessAlert(new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(res.data.result))
        })
        .catch((err) => {
          this.errorHandlingAlert(err.response.data.message)
        })
    },
    subscribe () {
      axios({
        method: 'post',
        url: this.baseUrl + `/customers/generate-midtrans-token`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then((res) => {

        const cb = this.subscribeSuccess

        window.snap.pay(res.data.token, {
          onSuccess: function(result){
            cb ()
          },
        })
      }).catch((err) => {
        this.errorHandlingAlert(err.response.data.message)
      });
    },
    subscribeSuccess () {
      axios({
        method: 'patch',
        url: this.baseUrl + `/customers/subscription`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then((res) => {
        this.userSubscription = true
      }).catch((err) => {
        this.errorHandlingAlert(err.response.data.message)
      });
    }
  },
})
