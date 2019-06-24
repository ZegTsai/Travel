<template>
  <div id="app">
    <!-- 除了detail组件外，其他组件都会执行缓存操作（也就是mounted生命周期钩子只会发送一次axios请求） -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scope>

</style>
