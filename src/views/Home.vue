<template>
  <div class="content">

    <div class="row blue">
      <h1>Secure form submission made easy</h1>

      <ul class="steps">
        <li>
          <img src="@/assets/diagrams/browser.svg" class="diagram" alt="">
          <h2>User submits a form on your webpage</h2>
          <hr>
          <p>
            You control the style and presentation of your form.
            Include any inputs you need and submit the data to our API.
          </p>
          <p>
            Your users won't even know the form is powered by us!
          </p>
        </li>
        <li>
          <img src="@/assets/diagrams/server.svg" class="diagram" alt="">
          <h2>Our servers bundle the data into an email</h2>
          <hr>
          <p>
            The secure request is received, unpackaged into a HTML template and emailed to you.
          </p>
          <p>
            All form and user data is deleted from our servers, logging only the timestamp of submissions for confirmation.
          </p>
        </li>
        <li>
          <img src="@/assets/diagrams/laptop.svg" class="diagram" alt="">
          <h2>You receive the data directly in your inbox</h2>
          <hr>
          <p>
            Your user is redirected back to your webpage to confirm to submission, and you receive the data in your inbox.
          </p>
          <p>
            You can reply directly to your User (if you request an 'email' field)
          </p>
        </li>
      </ul>
    </div>

    <Demo />

    <div class="row red">
      <h1>pricing / signup</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>

      <Footer />
    </div>

  </div>
</template>

<script>
import Demo from '@/components/Demo.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'Home',
  components: {
    Demo,
    Footer
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

.row p {
  max-width: 800px;
  margin: auto;
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

ul.steps li h2 {
  padding: 0;
  padding-bottom: .75rem;
}

.diagram {
  height: 200px;
  padding: 1rem;
  margin-bottom: .5rem;
}

</style>
