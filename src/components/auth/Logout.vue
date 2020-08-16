<template>
  <div class="content">
    <div class="row blue">
      <h1>logout</h1>

      <form class="logout" @submit.prevent="logout">
        <p>Are you sure you want to log out?</p>
        <button type="submit">Logout</button>
      </form>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    logout() {
      this.$store.dispatch('destroyToken')
        .then(response => {
          this.$router.push({ name: 'Home'})
          return response
        })
    }
  }
}
</script>

<style scoped>

h1  {
  margin-top: 1rem;
}

form.logout {
  width: 300px;
  max-width: 100%;
  margin: 2rem auto;
  box-sizing: border-box;
  text-align: center;
}

form.logout p {
  text-align: center;
}

form.logout button {
  padding: .25rem 1.5rem;
  background-color: var(--red);
  border-radius: 5px;
  color: white;

  border: 1px solid transparent;
  outline: none;
  appearance: none;
}

form.logout button:hover {
  border-color: white;
}

form.logout button:focus {
  border-color: white;
}

form.logout button:active {
  -moz-box-shadow: inset 0 0 15px rgba(0,0,0, 0.3);
  -webkit-box-shadow: inset 0 0 15px rgba(0,0,0, 0.3);
  box-shadow: inset 0 0 15px rgba(0,0,0, 0.3);
}

</style>
