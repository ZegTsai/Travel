<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :icons="icons"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :WkList="WkList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      lastCity: ' ',
      swiperList: [],
      recommendList: [],
      icons: [],
      WkList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    getHomeInfo () {
      /* 发送ajax请求时，应加入当前城市信息，让其加载对应城市的数据 */
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.icons = data.iconsList
        this.recommendList = data.recommendList
        this.WkList = data.weekendList
      }
    }
  },
  mounted () {
    /* 保存页面最近一次设置的城市 */
    this.lastCity = this.city
    this.getHomeInfo()
  },
  /* activated是keepalive的生命周期函数，每次页面重新显示时会触发activated */
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
