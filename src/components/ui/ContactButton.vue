<template>
  <div class="main-button">
    <button @click="twitter">Twitter</button>
    <button @click="email">Email</button>
    <button @click="tumblr">Tumblr</button>
    <button @click="twitch">Twitch</button>
  </div>
</template>

<script>
export default {
  methods: {
    twitter() {
      window.open("https://twitter.com/Jubblier");
    },
    email() {
        window.location = "mailto:jule2kool@hotmail.com";
    },
    tumblr() {
        window.open("https://jooblesbeebles.tumblr.com/")
    },
    twitch() {
        window.open("https://www.twitch.tv/jubblier")
    }
  },
};
</script>



<style scoped>
.main-button {
  display: inline-flex;
  padding-bottom: 15px;
  margin: 5px;
  font-size: 0.75em;
  font-family: "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto",
    "Helvetica Neue", "Arial", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  font-weight: 700;
}

button {
  background-color: #007499;
  color: #ffffff;
  width: auto;
  height: 3rem;
  line-height: 2.5rem;
  vertical-align: middle;
  padding: 0 1.25rem;
  font-size: 1.5em;
  border-radius: 2rem;
  border-style: none;
  max-width: 100%;
  text-align: center;
  margin: 5px;
  box-shadow: 3px 3px 3px black;
}

button:hover {
  background-color: #ff5757;
  cursor: pointer;
}
</style>