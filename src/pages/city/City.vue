<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <popular-city></popular-city>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import PopularCity from './components/PopularCity'
import CitySearch from './components/Search'

export default {
  name: 'City',
  components: {
    CityHeader,
    PopularCity,
    CitySearch
  }
}
</script>

<style lang="stylus" scoped>

</style>
