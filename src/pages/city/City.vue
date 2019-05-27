<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <popular-city :cityList='cities' :hot='hotCities'></popular-city>
    <alphabet :cityList='cities'></alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import PopularCity from './components/PopularCity'
import CitySearch from './components/Search'
import Alphabet from './components/Alphabet'

export default {
  name: 'City',
  data () {
    return {
      cities: {},
      hotCities: []
    }
  },
  components: {
    CityHeader,
    PopularCity,
    CitySearch,
    Alphabet
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
