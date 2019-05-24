<template>
  <div>
    <h2 class="title">周末去哪儿</h2>
    <ul v-for="item of WkList" :key="item.id">
        <li class="wk-item">
          <img class="wk-img" :src="item.imgUrl" />
          <h3 class="wk-title">{{item.title}}</h3>
          <p class="wk-desc">{{item.desc}}</p>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      WkList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
        title: '清远周边逛',
        desc: '人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg',
        title: '浮在海上的绿洲',
        desc: '南国滨海之城，避寒胜地，有暖暖的阳光，海风习习，吃着海鲜逛逛老街多惬意啊'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/ab/ee39881f602326.jpg_r_640x214_7b1a16b6.jpg',
        title: '相约生态佛山',
        desc: '古色古香的南国，名城佛山，游走佛山城里的每一个角落，你会被这座古韵之城的魅力所陶醉'
      }]
    }
  }
}
</script>

<style lang="stylus" scope>
  @import '../../../assets/styles/mixins.styl'
  .wk-item
    height: 3.8rem
    background-color: white
    .wk-img
      overflow: hidden
      width: 100%
      height: 2.7rem
    .wk-title
      height: 0.5 rem
      padding-left: 0.15rem
      padding-top: 0.2rem
      font-weight: bold
    .wk-desc
      height: 0.3 rem
      padding-left: 0.15rem
      font-size: 0.24rem
      ellipsis()
</style>
