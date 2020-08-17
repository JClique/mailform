<template>
  <div class="content">
    <div class="column">
      <button type="button" name="create-new" @click="toggleModal">
        + Create Form
      </button>

      <CreateForm v-if="showCreateForm"
      @hideCreateForm="toggleModal"
      @retrieveForms="retrieveForms" />

      <h1>My Forms</h1>

      <div class="forms">
        <FormList ref="formList"/>
      </div>

    </div>

    <div class="row red">
    </div>

  </div>
</template>

<script>
import FormList from '@/components/FormList.vue';
import CreateForm from '@/components/CreateForm.vue';

export default {
  name: 'Form',
  components: {
    FormList,
    CreateForm
  },
  data() {
    return {
      showCreateForm: false,
    }
  },
  methods: {
    toggleModal() {
        this.showCreateForm = !this.showCreateForm;
    },
    retrieveForms() {
      this.$refs.formList.retrieveForms()
    }
  }
}
</script>


<style scoped>
  .column {
    max-width: 900px;
    margin: auto;
    margin-top: 1rem;
    text-align: right;
  }

  .column h1 {
    float: left;
    margin-left: 1.5rem;
    transform: translateY(-5px);
  }

  .forms {
    margin: 1rem;
    border-radius: 10px;
    background-color: var(--lav);
    min-height: 600px;
    text-align: left;
  }
</style>
