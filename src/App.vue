<template>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  components: {
    Nav
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;1,700&family=Open+Sans&display=swap');

:root {
  --gray: #45434C;
  --blue: #33385C;
  --red: #D33E43;
  --orange: #F9A03F;
  --lav: #E7E6F7;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}

#app {
  margin: 0;
  padding: 0;
}
</style>
