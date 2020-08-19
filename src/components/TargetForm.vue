<template>
  <div class="form">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/default.min.css">

    <div class="form-nav">
      <img src="@/assets/cog.svg" @click="$emit('clearTarget')">
      <img src="@/assets/menu-close.svg" @click="$emit('clearTarget')">
    </div>
    <div class="info">
      <p>{{ form.description }}</p>

      <h6>The code :</h6>
      <pre v-highlightjs="sourcecode"><code class="html"></code></pre>

      <h6>The submissions :</h6>

      <ul>
        <li>Reply</li>
        <li>Reply</li>
        <li>Reply</li>
        <li>Reply</li>
        <li>Reply</li>
      </ul>
    </div>


  </div>
</template>

<script>
export default {
  name: 'TargetForm',
  props: ['form'],
  data () {
    return {
      sourcecode: "<form action='" + this.form.url + "' method='POST'>\n"+
      "    <!-- \n"+
      "\tENTER YOUR INPUTS HERE\n"+
      "\t<input type='text' name='example'>\n"+
      "\t<input type='text' name='message'>\n\n"+
      "\t<button type='submit'>Submit</button>\n"+
      "    -->\n"+
      "</form>"
    }
  },

}
</script>
<style scoped>
.form {
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
}

.form-nav {
  display: flex;
  justify-content: flex-end;
}

.form-nav img {
  margin-left: .75rem;
}

.form-nav img:hover {
  cursor: pointer;
}

.info {
  max-width: 90%;
  margin: auto;
}

.info p {
  max-width: 600px;
  margin: auto;
  text-align: justify;
  padding: 1rem 0;
}

h2 {
  color: var(--blue);
}

h6 {
  padding: 1rem 0;
}

pre, h6 {
  max-width: 600px;
  margin: auto;
  box-sizing: border-box;
}

pre {
  padding: 0 1rem;
  padding-bottom: 2rem;
}

ul {
  list-style: none;
  padding: 1rem;
  max-width: 600px;
  margin: auto;
  padding-top: 0;
}

li {
  margin: 1rem 0;
  border: 1px solid var(--red);
  padding: .5rem 1rem;
  transition: .4s;
}
</style>
