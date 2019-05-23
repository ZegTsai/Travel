<template>
  <div class="wrapper">
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item of imgList" :key="item.id">
      <img :src="item.imgUrl" class="swiper-img">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      imgList: [{
        id: '0001',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/91ddace63382519afa002bd853d8df73.jpg_750x200_f24e65e8.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/602fbeaa71683149846f5841f315c918.jpg_750x200_80e9a45e.jpg'
      }]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    .swiper-img
      width: 100%
</style>
