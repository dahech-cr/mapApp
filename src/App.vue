<template>
  <div id="app">
    <div id="nav">
      <div class="app__name">Map app</div>
      <Home />
    </div>
  </div>
</template>

<script>
import Home from "./views/Home"
export default {
  components:{
    Home
  }
    
  
}
</script>

<style lang="scss">
.app__name{
  margin-top: 10px;
  font-size: 30px;
  font-weight: bold;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
