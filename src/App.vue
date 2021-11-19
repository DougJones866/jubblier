<template>
<div class="app">
  
  <router-view></router-view>
  
  
</div>
</template>

<script>
export default {
  
}
</script>


<style>
body{
  background-color: #014B5F;
  box-sizing: border-box;
}

h1, h2 {
  color: #ff8a00;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.075rem;
  width: calc(100% + 0.075rem);
  font-size: 1.75em;
  line-height: 1.75;
  font-weight: 600;
}



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
  
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
