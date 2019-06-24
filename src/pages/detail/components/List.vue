<template>
  <div>
    <div
    class="item"
    v-for="(item, index) of list"
    :key="index"
    :style="listStyle"
    >
      <h2 class="item-title">
        <span class="item-title-icon"></span>
        {{ item.title }}
      </h2>
      <!-- 如果item中还有children（子集合）就递归调用这个组件，list用item.children -->
      <div
      v-if="item.children"
      class="item-children"
      >
        <detail-list
        class="item-children-list"
        :list="item.children"
        ></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  data () {
    return {
      listStyle: {}
    }
  },
  props: {
    list: {
      type: Array
    }
  },
  mounted () {
    /* 第一次显示会有bug，无奈只好写此代码解决bug */
    setTimeout(() => {
      this.listStyle = {
        'width': '100%',
        'height': 'auto',
        'display': 'block'
      }
    }, 5)
  }
}
</script>

<style lang="stylus" scoped>
.item
  border-bottom: .04rem solid #eee
  .item-title
    position: relative
    padding-left: .2rem
    line-height: .88rem
    text-indent: .4rem
    height: .88rem
    .item-title-icon
      position: absolute
      width: .36rem
      height: .36rem
      top: .26rem
      left: .2rem
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right: .1rem
      background-size: .4rem 3rem
  .item-children
    font-size: .25rem
    padding-left: .2rem
    color: #616161
    background: #eee
</style>
