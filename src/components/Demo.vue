<template>
  <div class="row lav">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/default.min.css">

    <h1>live demo</h1>

    <h6>The code :</h6>
    <pre v-highlightjs="sourcecode"><code class="html"></code></pre>

    <h6>The form :</h6>
    <form class="demo" action='https://api.mailform.online/form/710407325a/' method='POST'>
      <input type="text" name="name" placeholder="Your Name...">
      <input type="text" name="message" placeholder="Your Message...">
      <button type="submit">Submit</button>
    </form>

    <p class="center">
      Go ahead and try out this form!<br>
      No data will be stored or transfered.
    </p>

  </div>
</template>

<script>

export default {
  name: 'Demo',
  data () {
    return {
      sourcecode: "<form action='https://api.mailform.online/form/710407325a/' method='POST'>\n"+
      "\t<input type='text' name='name'>\n"+
      "\t<input type='text' name='message'>\n"+
      "\t<button type='submit'>Submit</button>\n"+
      "</form>"
    }
  },
}
</script>

<style scoped>
h1 {
  margin: 1rem;
  margin-bottom: 2rem;
}

form.demo {
  width: 600px;
  max-width: 100%;
  margin: auto;
  margin-bottom: 2rem;
  text-align: right;
}

p {
  width: 500px;
  max-width: 100%;
  padding: 0;
  margin: auto;
}

p.center {
  text-align: center;
  transform: translateY(-20px);
}

h6 {
  padding: 1rem 0;
}

pre, h6 {
  max-width: 600px;
  margin: auto;
  box-sizing: border-box;
}

.hljs {
  background: #e0e0e0;
  border-radius: 5px;
  width: 600px;
  max-width: 100%;
  margin: auto;
  margin-bottom: 3rem;
  font-size: 0.7rem;
  box-sizing: border-box;
}

</style>
