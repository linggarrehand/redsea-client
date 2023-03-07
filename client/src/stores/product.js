import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
  state: () => ({ 
    baseUrl: 'http://localhost:3000',

  }),
  getters: {},
  actions: {
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
  },
})
