<template>
  <div>
    <city-header></city-header>
    <!-- @change是为了获得点击的字母，以实现跳转到对应首字母区域 -->
    <popular-city :cityList='cities' :hot='hotCities' :letter="letter" ></popular-city>
    <alphabet :cityList='cities' @change='handleLetterChange'></alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import PopularCity from './components/PopularCity'
import Alphabet from './components/Alphabet'

export default {
  name: 'City',
  props: 'letter',
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ' '
    }
  },
  components: {
    CityHeader,
    PopularCity,
    Alphabet
  },
  methods: {
    /* 利用axios获得静态资源的数据 */
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
    },
    /* 拿到子组件传过来的字母（被用户点击的），并赋值为this.letter，再数据绑定传给子组件 */
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
