<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Home from './pages/home/Home'
import City from './pages/city/City'
export default {
  name: 'App',
  components: {
    Home,
    City
  }
}
</script>

<style scope>

</style>
