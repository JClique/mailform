import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    base_url: 'http://127.0.0.1:8000',
    token: localStorage.getItem('access_token') || null,
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token
    },
    destroyToken(state) {
      state.token = null
    }
  },
  getters: {
    loggedIn(state) {
      return state.token !== null
    }
  },
  actions: {
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post(this.state.base_url + '/auth/login/', {
          username: credentials.username,
          password: credentials.password,
        })
          .then(response => {
            const token = response.data.key;
            localStorage.setItem('access_token', token)
            context.commit('retrieveToken', token)
            resolve(response);
          })
          .catch(error => {
            console.log(error);
            reject(error);
          })
      })
    },
    destroyToken(context) {
      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.post(this.state.base_url + '/auth/logout/')
            .then(response => {
              localStorage.removeItem('access_token')
              context.commit('destroyToken')
              resolve(response);
            })
            .catch(error => {
              localStorage.removeItem('access_token')
              context.commit('destroyToken')
              console.log(error);
              reject(error);
            })
        })
      }
    },
    postForm(context, form) {
      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.post(this.state.base_url + '/forms/', {
            title: form.title,
            description: form.description
          },
          {
            headers: {
              Authorization: 'Token ' + this.state.token
            }
          })
            .then(response => {
              resolve(response)
            })
            .catch(error => {
              reject(error)
            })
        })
      }
    },
    retrieveForms(context) {
      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.get(this.state.base_url + '/forms/', {
            headers: {
              Authorization: 'Token ' + this.state.token
            }
          })
            .then(response => {
              resolve(response)
            })
            .catch(error => {
              reject(error)
            })
        })
      }
    },
  }
})
