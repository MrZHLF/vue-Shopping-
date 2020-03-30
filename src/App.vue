<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    this.getUser();
    this.getCartCount()
  },
  methods: {
    getUser () {
      this.axios.get('/user').then(res => {
        //保存到vuex
        this.$store.dispatch('saveUserName', res.username);
      })
    },
    getCartCount () {
      this.axios.get('/carts/products/sum').then((res = 0) => {
        this.$store.dispatch('saveCartCount', res);
      })
    }
  }
}
</script>

<style>
@import "./assets/scss/reset.scss";
@import "./assets/scss/button.scss";
</style>
