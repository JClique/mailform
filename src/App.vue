<template>
  <div id="app">
    <Nav @toggleMenu="toggleMenu" />
    <Menu @toggleMenu="toggleMenu" />
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Menu from '@/components/Menu.vue'

export default {
  components: {
    Nav,
    Menu
  },
  methods: {
    toggleMenu() {
      var menu = document.getElementsByClassName("menu");
      for (var i = 0; i < menu.length; i++) {
        menu.item(i).style.display = menu.item(i).style.display === 'none' ? '' : 'none';
      }
      var body = document.getElementsByTagName("body")[0];
      body.style.position = body.style.position === 'fixed' ? '' : 'fixed';
    }
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

* {  /* firefox scrollbar */
  scrollbar-width: thin;
  scrollbar-color: #33385C transparent;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-track {
  background: #E7E6F7;
}

::-webkit-scrollbar-thumb {
  background: var(--blue);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  overflow-x: hidden;
}

#app {
  margin: 0;
  padding: 0;
  height: 110vh; /* keeps scrollbar active, preventing width change */
  background-color: var(--lav);
  overflow-x: hidden;
}

.content {
  position: absolute;
  width: 100%;
  top: 50px;
  bottom: 0;
}

h1, h2, h3 {
  margin: 0;
  text-align: center;
  color: white;
}

p {
  text-align: justify;
}

.row {
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
}

.red {
  height: 500px;
  background-color: var(--red);
  color: white;
}

.lav {
  min-height: 250px;
  background-color: var(--lav);
  color: var(--blue);
}

.lav h1 {
  color: var(--blue);
}

.blue {
  min-height: 400px;
  background-color: var(--blue);
  color: white;
}

</style>
