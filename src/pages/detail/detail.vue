<template>
  <div>
    <detail-banner
    :gallaryImgs="gallaryImgs"
    :sightName="sightName"
    :bannerImg="bannerImg"
    ></detail-banner>
  </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/Banner'
export default {
  name: 'Detail',
  data () {
    return {
      gallaryImgs: [],
      sightName: ' ',
      bannerImg: ' '
    }
  },
  components: {
    DetailBanner
  },
  methods: {
    getDetailInfo () {
      /* 发送ajax请求时，应加入当前城市信息，让其加载对应城市的数据 */
      axios.get('/api/detail.json')
        .then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.gallaryImgs = data.gallaryImgs
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
