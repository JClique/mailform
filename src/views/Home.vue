<template>
  <div class="content">

    <div class="row blue">
      <h1>Secure form submission made easy</h1>

      <ul class="steps">
        <li>
          <img src="@/assets/diagrams/browser.svg" class="diagram" alt="">
          <h2>User submits form on your webpage</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </li>
        <li>
          <img src="@/assets/diagrams/server.svg" class="diagram" alt="">
          <h2>Our secure servers bundle the data into an email</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </li>
        <li>
          <img src="@/assets/diagrams/laptop.svg" class="diagram" alt="">
          <h2>You receive the data directly in your inbox</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </li>
      </ul>
    </div>

    <Demo />

    <div class="row red">
      <h1>pricing - signup</h1>

      <p @click="increment">
        {{ count }}
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>

  </div>
</template>

<script>
import Demo from '@/components/Demo.vue'

export default {
  name: 'Home',
  components: {
    Demo
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  }
}
</script>

<style scoped>

.row h1 {
  padding: 1rem;
  margin-bottom: 1rem;
}

.row.blue h1 {
  margin: 2rem auto;
  margin-bottom: 0;
  border: 2px dashed var(--red);
  width: 600px;
  max-width: 70%;
}

ul.steps {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  text-align: center;
  max-width: 1200px;
  margin: auto;
  padding: 0;
}

ul.steps li {
  flex: 1 1 200px;
  padding: 1rem;
  margin: 2rem;
}

.diagram {
  height: 250px;
  margin-bottom: 1rem;
}

.step h2 {
  max-width: 200px;
}

.diagram {
  height: 200px;
  margin-bottom: 2rem;
  padding: 1rem;
}
</style>
