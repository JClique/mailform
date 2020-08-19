<template>
  <div class="content">
    <div class="column">
      <div class="column-header">
        <transition name="fade">
          <h1 key=1 v-if="!targetForm">My Forms</h1>
          <h1 key=2 v-if="targetForm">{{ targetForm.title }}</h1>
        </transition>

        <button type="button" @click="toggleModal">
          + Create Form
        </button>

        <transition name="modal-fade">
          <CreateForm v-if="showCreateForm"
          @hideCreateForm="toggleModal"
          @retrieveForms="retrieveForms" />
        </transition>
      </div>

      <div class="forms">
        <transition name="fade">
          <FormList ref="formList" @targetForm="setTarget" v-if="!targetForm"/>
          <TargetForm :form="targetForm" @clearTarget="clearTarget" v-if="targetForm"/>
        </transition>
      </div>

    </div>

    <div class="row red">
      <Footer />
    </div>

  </div>
</template>

<script>
import FormList from '@/components/FormList.vue';
import TargetForm from '@/components/TargetForm.vue';
import CreateForm from '@/components/CreateForm.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Form',
  components: {
    FormList,
    TargetForm,
    CreateForm,
    Footer
  },
  data() {
    return {
      showCreateForm: false,
      targetForm: null,
    }
  },
  methods: {
    toggleModal() {
        this.showCreateForm = !this.showCreateForm;
    },
    retrieveForms() {
      this.$refs.formList.retrieveForms()
    },
    setTarget(form) {
      this.targetForm = form;
    },
    clearTarget() {
      this.targetForm = null;
    }
  }
}
</script>


<style scoped>
  .column {
    max-width: 900px;
    margin: auto;
    margin-top: 1rem;
  }

  .column-header {
    margin: 0 1.5rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }

  .column-header button {
    padding: .75rem;
  }

  .forms {
    margin: .5rem 1rem;
    border-radius: 10px;
    background-color: var(--lav);
    min-height: 600px;
    text-align: left;
    transition: 2s;
  }

  .fade-enter-active, .fade-leave-active,
  .modal-fade-enter-active, .modal-fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter-active {
    transition-delay: .5s;
  }

  .fade-enter, .fade-leave-to,
  .modal-fade-enter, .modal-fade-leave-to {
    opacity: 0;
  }

</style>
