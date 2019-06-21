<template>
<div class="list" ref="wrapper">
  <div>
    <div class="city-zmpx">
      <!-- 当前城市 -->
      <div class="current-city">
        <h2 class="title">当前城市</h2>
        <div class="city-box">
          {{this.currentCity}}
        </div>
      </div>
      <div class="popular-city">
        <h2 class="title">热门城市</h2>
        <div class="city-box"
        v-for="item of hot"
        :key="item.id"
        @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </div>
      </div>
      <!-- 按字母搜索列表（由A-Z每个块组成的区域） -->
      <div class="zm-px">
        <h2 class="title">字母排序</h2>
        <div class="zm-box"
        v-for='(item, key) of cityList'
        :key='key'
        @click='handleLetterClick'
        >
          {{key}}
        </div>
      </div>
    </div>
    <div>
      <!-- 根据首字母排序的城市列表 -->
      <ul>
        <li
        class="zm-area"
        v-for='(item, key) of cityList'
        :key='key'
        :ref='key'>
          <!-- 以首字母为标题的城市列表项 -->
          <div class="title">{{key}}</div>
          <div class="zm-city">
            <div class="zm-city-box"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
            >
            {{innerItem.name}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
/* 载入vuex的API */
import { mapState, mapMutations } from 'vuex'
/* 载入右侧的滚动插件 */
import Bscroll from 'better-scroll'
export default {
  name: 'PopularCity',
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  props: {
    /* cityList和hot是父组件从静态资源中读取的数据 */
    cityList: Object,
    hot: Array,
    /* letter是兄弟组件Alphabet发送来的 */
    letter: String
  },
  data () {
    return {
      clickLetter: {
        type: String,
        default: ' '
      }
    }
  },
  watch: {
    letter () {
      /* 监听由Alphabet兄弟组件触发点击事件传进来的letter值，并跳转到对应的首字母城市列表 */
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    /* 实现点击字母区域时，跳转到对应首字母的城市列表 */
    handleLetterClick (e) {
      this.clickLetter = e.target.innerText
      const element = this.$refs[this.clickLetter][0]
      this.scroll.scrollToElement(element)
    },
    /* 处理点击城市box后修改当前城市并跳回主页 */
    handleCityClick (city) {
      /*
      this.$store.dispatch('changeCity', city)
      用mapMutations这个API替换成下边的代码
      */
      this.changeCity(city)
      this.$router.push('/')
    },
    /* 用mapMutations这个API时可以映射发送的数据 */
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
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
      height: 11.2rem
      .current-city
        background: #fff
        height: 1.4rem
        .title
          line-height: .6rem
          background #eee
          text-indent: .3rem
          font-size: .25rem
          height: .6rem
        .city-box
          height: 0.8rem
          float: left
          width: 32.6%
          text-align: center
          line-height: 0.8rem
          background: #fff
          color: #00bcd4
          font-weight: bold
          border-right: 0.024rem solid #eee
      .popular-city
        background: #eee
        height: 5rem
        .title
          line-height: .7rem
          background #eee
          text-indent: .3rem
          font-size: .25rem
          height: 13%
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
          height: 13%
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
