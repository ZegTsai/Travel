<template>
<div class="list" ref="wrapper">
  <div>
    <div class="city-zmpx">
      <div class="popular-city">
        <h2 class="title">热门城市</h2>
        <div class="city-box" v-for="item of hot" :key="item.id">
          {{item.name}}
        </div>
      </div>
      <div class="zm-px">
        <h2 class="title">字母排序</h2>
        <div class="zm-box" v-for='(item, key) of cityList' :key='key'>
          {{key}}
        </div>
      </div>
    </div>
    <div>
      <ul>
        <li class="zm-area" v-for='(item, key) of cityList' :key='key'>
          <div class="title">{{key}}</div>
          <div class="zm-city">
            <div class="zm-city-box" v-for="innerItem of item" :key="innerItem.id">
            {{innerItem.name}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'PopularCity',
  props: {
    cityList: Object,
    hot: Array
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
  .list
    position: absolute
    top: 2.2rem
    left: 0
    right: 0
    bottom: 0
    .city-zmpx
      height: 10rem
      .popular-city
        background: #eee
        height: 5rem
        .title
          line-height: .7rem
          background #eee
          text-indent: .3rem
          font-size: .25rem
          height: 15%
        .city-box
          height: 21%
          float: left
          width: 32.6%
          text-align: center
          line-height: 1rem
          background: #fff
          border: 0.023rem solid #eee
      .zm-px
        background: #fff
        height: 5rem
        .title
          margin-top: .1rem
          line-height: .7rem
          background #eee
          text-indent: .3rem
          font-size: .25rem
          height: 15%
        .zm-box
          height: 21%
          float: left
          width:  16%
          text-align: center
          line-height: 1rem
          background: #fff
          border: 0.023rem solid #eee
    .zm-area
      background-color: #fff
      display: inline-block
      width: 100%
      .title
        line-height: .7rem
        background #eee
        text-indent: .3rem
        font-size: .25rem
        height: .75rem
      .zm-city
        width: 100%
        .zm-city-box
          height: 1rem
          float: left
          width: 24.2%
          text-align: center
          line-height: 1rem
          background: #fff
          border: 0.023rem solid #eee
</style>
