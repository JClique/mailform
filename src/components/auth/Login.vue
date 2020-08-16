<template>
  <div class="content">
    <div class="row blue">
      <h1>login</h1>


      <form class="login" @submit.prevent="login">
        <input type="username" name="username" placeholder="Username" v-model="username">
        <input type="password" name="password" placeholder="Password" v-model="password">

        <a href="#">forgot password</a>
        <button type="button" class="alt">Register</button>
        <button type="submit">Login</button>
      </form>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login() {
      this.$store.dispatch('retrieveToken', {
        username: this.username,
        password: this.password,
      })
        .then(response => {
          this.$router.push({ name: 'Forms'})
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

form.login {
  width: 300px;
  max-width: 100%;
  margin: 2rem auto;
  box-sizing: border-box;
  text-align: right;
}

form.login input {
  width: 100%;
  box-sizing: border-box;
  padding: .5rem;
  margin: 1rem 0;
  border-radius: 5px;

  border: 1px solid transparent;
  outline: none;
  appearance: none;
}

form.login input:focus {
  border-color: var(--red);
}

form.login button {
  padding: .25rem 1.5rem;
  background-color: var(--red);
  border-radius: 5px;
  color: white;

  border: 1px solid transparent;
  outline: none;
  appearance: none;
}

form.login button.alt {
  background-color: var(--orange);
  float: left;
}

form.login button:hover {
  border-color: white;
}

form.login button:focus {
  border-color: white;
}

form.login button:active {
  -moz-box-shadow: inset 0 0 15px rgba(0,0,0, 0.3);
  -webkit-box-shadow: inset 0 0 15px rgba(0,0,0, 0.3);
  box-shadow: inset 0 0 15px rgba(0,0,0, 0.3);
}

form.login a {
  text-decoration: none;
  color: var(--red);
  font-size: 0.75rem;
  display: block;
  transform: translateY(-5px);
  margin-bottom: .5rem;
}
</style>
