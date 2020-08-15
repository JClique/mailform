<template lang="html">
  <ul class="menu" style="display: none;">
    <li class="link" @click="$emit('toggleMenu')">
      <router-link to="/home">Home</router-link>
    </li>
    <li class="link" @click="$emit('toggleMenu')">
      <router-link to="/about">About</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Menu'
}
</script>


<style lang="css" scoped>

ul.menu {
  position: fixed;
  top: 0;
  padding-top: 4rem;
  background-color: var(--lav);
  width: 100%;
  height: 100%;
  z-index: 4;
  line-height: 3rem;
  list-style-image: url("../assets/caret.svg");
}

li.link a {
  text-decoration: none;
  padding: .5rem;
  border-radius: 5px;
  color: var(--blue);
  transition: .4s;
}

li.link a:hover {
  background-color: var(--blue);
  color: white;
}

li.link a:active {
  filter: brightness(120%);
}

</style>
