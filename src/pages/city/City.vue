<template>
  <div>
    <city-header></city-header>
    <popular-city></popular-city>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import PopularCity from './components/PopularCity'

export default {
  name: 'City',
  components: {
    CityHeader,
    PopularCity
  }
}
</script>

<style lang="stylus" scoped>

</style>
