<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">
          <img src="@/assets/Logo (full).svg" alt="">
        </router-link>
      </li>
      <li class="link full" v-if="loggedIn">
        <router-link to="/forms">My Forms</router-link>
      </li>
      <li class="link full" v-if="!loggedIn">
        <router-link to="/login">Login</router-link>
      </li>
      <li class="link full" v-if="!loggedIn">
        <router-link to="/register">Register</router-link>
      </li>
      <li class="link full" v-if="loggedIn">
        <router-link to="/logout">Logout</router-link>
      </li>
      <li class="mobile">
        <img src="@/assets/menu.svg" class="menu" @click="$emit('toggleMenu')">
        <img src="@/assets/menu-close.svg" class="menu" @click="$emit('toggleMenu')" style="display: none; transform: translate(-7px, -2px);">
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn
    }
  }
}
</script>

<style scoped>

nav {
  background-color: var(--lav);
  width: 100%;
  height: 50px;
  position: fixed;
  border-bottom: 2px solid var(--red);
  z-index: 5;
}

nav ul {
  display: flex;
  justify-content: flex-end;
  list-style: none;
  max-width: 800px;
  margin: auto;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}

nav ul li {
  padding: .5rem;
  margin: .5rem;
}

nav ul li:first-child {
  margin-right: auto;
  font-weight: 900;
  font-size: 1.5rem;
  transform: translateY(-5px);
  padding-bottom: 0;
}

nav ul li:first-child a {
  text-decoration: none;
}

nav ul li:first-child img {
  height: 20px;
}

nav ul li.link a {
  text-decoration: none;
  padding: .5rem;
  border-radius: 5px;
  color: var(--blue);
  transition: .4s;
}

nav ul li.link a:hover {
  background-color: var(--blue);
  color: white;
}

.menu:hover, .menu:focus {
  outline: 1px solid white;
  outline-offset: 5px;
}

.menu {
  transform: translateY(-2px);
}

.mobile {
  display: none;
}
@media (max-width:768px) {
  .full {
    display: none;
  }
  .mobile {
    display: block;
  }
}

</style>
