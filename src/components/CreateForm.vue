<template>
  <div class="modal">
    <div class="modal-background" @click="$emit('hideCreateForm')"></div>

    <div class="modal-body">

      <img src="@/assets/menu-close.svg" class="modal-close"
        @click="$emit('hideCreateForm')">

      <h2>New Form</h2>

      <form @submit.prevent="newForm">

        <input type="text" name="title" v-model="title"
          placeholder="Form Title" autocomplete="off" maxlength="20">

        <textarea name="name" rows="8" v-model="description"
          placeholder="Describe your form..." maxlength="500"></textarea>

        <button type="submit">Create</button>

      </form>

    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateForm',
  prop: 'showCreateForm',
  data() {
    return {
      title: '',
      description: '',
    }
  },
  methods: {
    newForm() {
      this.$store.dispatch('postForm', {
        title: this.title,
        description: this.description
      })
        .then(response => {
          this.$emit('hideCreateForm')
          this.$emit('retrieveForms')
          return response
        })
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 15;
}
.modal-background {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0, 0.4);
}

.modal-body {
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  width: 400px;
  border-radius: 25px;
  padding: 1rem;
  background-color: var(--lav);
}

.modal-close {
  margin: 1rem;
  float: right;
}

h2 {
  text-align: left;
  padding: .5rem 1rem;
  color: var(--red);
}

form {
  display: block;
  padding: 1rem;
  padding-top: 0;
}

input:focus, textarea:focus {
  border-color: var(--red);
}

</style>
