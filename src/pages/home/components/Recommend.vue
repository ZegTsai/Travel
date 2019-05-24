<template>
  <div>
    <div class="title">热销推荐</div>
    <div>
    <ul v-for="item of recommendList" :key="item.id">
        <li class="item">
            <img class="item-img" :src='item.imgUrl' />
            <div class="item-info">
              <h3 class="item-title">{{item.title}}</h3>
              <p class="item-desc">{{item.desc}}</p>
              <button class="item-button">点击查看详情</button>
              <div class="item-fee">
              <p class="item-prize">￥{{item.prize}}起</p>
              <p class="item-address">{{item.address}}区</p>
              </div>
            </div>
        </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        title: '顺德游乐园',
        desc: '亲子游玩，偷得浮生半日闲',
        prize: '70',
        address: '顺德',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1807/77/77570cc3ebf7d9d8a3.img.jpg_200x200_d36ff68e.jpg'
      }, {
        id: '0002',
        title: '西樵山国艺影视城',
        desc: '领略西樵山的风采，何启龙的家',
        prize: '50',
        address: '南海',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1903/d8/d8e8a2cb6332b603a3.img.jpg_200x200_696dc2bd.jpg'
      }, {
        id: '0003',
        title: '美的探索王国',
        desc: '人造风景，现代化与传统的完美结合',
        prize: '80',
        address: '顺德',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1707/3f/3f85f2697cd4b2d1a3.water.jpg_200x200_65dd55b7.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scope>
  .title
    margin-top: .2rem
    line-height: .8rem
    background #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      .item-title
        font-weight: bold
        color: black
        height: .4rem
        padding-top: .2rem
        padding-buttom: .2rem
      .item-desc
        height: .4rem
      .item-button
        height: .4rem
        background-color: orange
        border-radius: .1rem
        padding: 0 .1rem
        color: white
      .item-fee
        height: .4rem
        position: relative
        .item-prize
          position: absolute
          left: 0
          padding: .05rem
        .item-address
          position: absolute
          right: 0
          padding: .05rem
</style>
