<template>
  <div id="app">
    <Nav @toggleMenu="toggleMenu" />
    <Menu @toggleMenu="toggleMenu" />
    <div class="row blue header"></div>
    <transition name="router">
      <router-view/>
    </transition>
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
  max-width: 100%;
  height: 110vh; /* keeps scrollbar active, preventing width change */
  background-color: var(--lav);
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

button {
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;

  padding: .5rem 2rem;

  background-color: var(--red);
  color: white;

  border-radius: 5px;
  border: 1px solid transparent;
  appearance: none;
  outline: none;
  transition: .4s;
}

button:hover {
  box-shadow: inset 0 0 15px rgba(0,0,0, 0.3);
  cursor: pointer;
}

button:active {
  border-color: white;
}

button.alt {
  background-color: var(--orange);
}

input, textarea {
  width: 100%;
  margin: 1rem 0;
  padding: .5rem .75rem;
  border-radius: 10px;
  box-sizing: border-box;

  font-family: 'Open Sans', sans-serif;
  outline: none;
  border: 1px solid transparent;
  appearance: none;
}

input:focus, textarea:focus {
  border-color: var(--blue);
}

textarea {
  resize: none;
}

.row {
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
}

.red {
  height: 200px;
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

.header {
  position: absolute;
  width: 100%;
  top: 50px;
}

.router-enter-active, .router-leave-active {
  transition: opacity .5s ease-in-out;
}

.router-enter-active {
  transition-delay: .5s;
}

.router-enter, .router-leave-to {
  opacity: 0;
}

</style>
