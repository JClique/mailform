<template>
  <div class="row lav">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/default.min.css">

    <h1>live demo</h1>

    <p>The code :</p>
    <pre v-highlightjs="sourcecode"><code class="html"></code></pre>

    <p>The form :</p>
    <form class="demo">
      <input type="text" name="name" placeholder="Your name...">
      <input type="text" name="message" placeholder="Your message...">
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
      sourcecode: "<form action='https://api.mailform.online/form/456fng486g351123adfg8/' method='POST'>\n"+
      "\t<input type='text' name='name'>\n"+
      "\t<input type='text' name='message'>\n"+
      "\t<button type='submt'>Submit</button>\n"+
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

form.demo input {
  width: 100%;
  margin: 1rem 0;
  padding: .5rem .75rem;
  border-radius: 10px;
  box-sizing: border-box;

  font-family: 'Open Sans', sans-serif;
  outline: none;
  border: 1px solid transparent;
  appearance: none;
}

form.demo input:focus {
  border-color: var(--blue);
}

button {
  padding: .5rem 1.5rem;
  border-radius: 10px;
  background-color: var(--red);
  color: white;

  font-family: 'Montserrat', sans-serif;
  outline: none;
  appearance: none;
  border: 1px solid transparent;
}

button:focus, button:hover {
  border-color: var(--blue);
}

button:active {
  background-color: var(--blue);
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
