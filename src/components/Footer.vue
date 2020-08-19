<template>
  <div class="footer">
    <div class="footer-content">
      <hr>

      <p class="jc">
        designed, built and hosted by <br>
        <a href="https://www.jclique.studio/">
          <img src="@/assets/jclogo.svg" class="jc">
        </a>
        <a href="https://www.jclique.studio/">
          <img src="@/assets/hdrlogo.svg" class="hdr">
        </a>
      </p>

      <ul>
        <li><a href="#">Terms & Conditions</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Footer',
}
</script>

<style scoped>

.footer-content ul {
  padding: 0;
  list-style: none;
  margin-bottom: 3rem;
  padding-left: 1rem;
  color: white;
}
.footer-content hr {
  appearance: none;
  outline: none;
  border: none;
  border-bottom: 1px solid white;
  opacity: 0.8;
}

.footer {
  width: 100%;
  margin-top: 5rem;
}

.footer-content {
  width: 600px;
  max-width: 100%;
  margin: auto;
  font-size: 80%;
  color: white;
}

a {
  text-decoration: none;
  color: white;
  opacity: 0.8;
}

p.jc {
  float: right;
  text-align: right;
  width: 150px;
  margin: 0;
  padding-top: .25em;
  padding-right: 1rem;
  color: #e6e6e6;
  font-size: 80%;
}

p.jc img.jc {
  max-height: 30px;
  margin-top: .25rem;
  opacity: 0.8;
}

p.jc img.hdr {
  max-height: 25px;
  margin-left: .5rem;
  opacity: 0.8;
  transform: translateY(-5px);
}

p.jc img:hover {
  opacity: 1;
  cursor: pointer;
}
</style>
