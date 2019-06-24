<template>
  <div>
    <detail-banner
    :gallaryImgs="gallaryImgs"
    :sightName="sightName"
    :bannerImg="bannerImg"
    ></detail-banner>
    <detail-header
    :sightName="sightName"
    ></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default {
  name: 'Detail',
  data () {
    return {
      gallaryImgs: [],
      sightName: ' ',
      bannerImg: ' ',
      list: [],
      isShowList: false
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  methods: {
    getDetailInfo () {
      /* 发送ajax请求时，应加入当前城市信息，让其加载对应城市的数据 */
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params
        }
      })
        .then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.gallaryImgs = data.gallaryImgs
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
