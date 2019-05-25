<template>
  <div>
    <div class="popular-city">
      <h2 class="title">热门城市</h2>
      <div class="city-box" v-for="item of cityList" :key="item.id">
        {{item.city}}
      </div>
    </div>
    <div class="zm-px">
      <h2 class="title">字母排序</h2>
      <div class="zm-box" v-for="item of zmList" :key="item.id">
        {{item.city}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopularCity',
  data () {
    return {
      cityList: [{
        id: '0001',
        city: '北京'
      }, {
        id: '0002',
        city: '上海'
      }, {
        id: '0003',
        city: '韶关'
      }, {
        id: '0004',
        city: '清远'
      }, {
        id: '0005',
        city: '惠州'
      }, {
        id: '0006',
        city: '东莞'
      }, {
        id: '0007',
        city: '佛山'
      }, {
        id: '0008',
        city: '深圳'
      }, {
        id: '0009',
        city: '广州'
      }, {
        id: '00010',
        city: '揭阳'
      }, {
        id: '00011',
        city: '潮州'
      }, {
        id: '00012',
        city: '汕头'
      }],
      zmList: [{
        id: '0001',
        city: 'A'
      }, {
        id: '0002',
        city: 'B'
      }, {
        id: '0003',
        city: 'C'
      }, {
        id: '0004',
        city: 'D'
      }, {
        id: '0005',
        city: 'E'
      }, {
        id: '0006',
        city: 'F'
      }, {
        id: '0007',
        city: 'G'
      }, {
        id: '0008',
        city: 'H'
      }, {
        id: '0009',
        city: 'J'
      }, {
        id: '0010',
        city: 'K'
      }, {
        id: '0011',
        city: 'L'
      }, {
        id: '0012',
        city: 'M'
      }, {
        id: '0013',
        city: 'N'
      }, {
        id: '0014',
        city: 'P'
      }, {
        id: '0015',
        city: 'Q'
      }, {
        id: '0016',
        city: 'R'
      }, {
        id: '0017',
        city: 'S'
      }, {
        id: '0018',
        city: 'T'
      }, {
        id: '0019',
        city: 'W'
      }, {
        id: '0020',
        city: 'X'
      }, {
        id: '0021',
        city: 'Y'
      }, {
        id: '0022',
        city: 'Z'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .popular-city
    background: #eee
    height: 5rem
    .title
      line-height: .7rem
      background #eee
      text-indent: .3rem
      font-size: .25rem
    .city-box
      height: 1rem
      float: left
      width:  2.45rem
      text-align: center
      line-height: 1rem
      background: #fff
      border: 0.023rem solid #eee
  .zm-px
    background: #eee
    height: 5.3rem
    .zm-box
      height: 1.2rem
      float: left
      width:  1.2rem
      text-align: center
      line-height: 1rem
      background: #fff
      border: 0.023rem solid #eee
</style>
