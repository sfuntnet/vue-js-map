<template>
  <main>
    <router-view :key="$route.path" />
  </main>
</template>
<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Oswald', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#button{
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
