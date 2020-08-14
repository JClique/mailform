<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">
          <span class="brand">mail</span>
          <span class="brand-alt">form</span>
        </router-link>
      </li>
      <li class="link">
        <router-link to="/">Home</router-link>
      </li>
      <li class="link">
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.brand {
  color: var(--blue);
}

.brand-alt {
  color: var(--red);
}

nav {
  background-color: var(--lav);
  border-bottom: 1px solid var(--gray);
}

nav ul {
  display: flex;
  justify-content: flex-end;
  list-style: none;
  max-width: 800px;
  margin: auto;
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

</style>
