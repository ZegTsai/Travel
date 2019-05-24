<template>
  <div>
    <div class="title">热门推荐</div>
    <div>
    <ul v-for="item of recommendList" :key="item.id">
        <li class="item">
            <img class="item-img" :src="item.imgUrl" />
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
  props: {
    recommendList: Array
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scope>
  .title
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
