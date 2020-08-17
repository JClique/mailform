<template>
  <ul id="formList">
    <li v-for="(form, index) in forms" :key="index">
      {{ form.title }} - {{ form.slug }}
      <span>26</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'FormList',
  data() {
    return {
      forms: [],
    }
  },
  mounted() {
    this.retrieveForms()
  },
  methods: {
    retrieveForms() {
      this.$store.dispatch('retrieveForms')
        .then(response => {
          this.buildFormList(response);
        })
        .catch(error => {
          console.log(error);
        })
    },
    buildFormList(forms) {
      this.forms = []
      for (const form of forms.data) {
        this.forms.push(form)
      }
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 1rem;
}

li {
  margin: 1rem;
  border: 1px solid var(--red);
  padding: .5rem 1rem;
  transition: .4s;
}

li span {
  float: right;
}

li span::after {
  content: ' submits';
  font-size: 70%;
}

li:hover {
  padding: .5rem 1.5rem;
  background-color: var(--red);
  color: white;
  cursor: pointer;
}

</style>
