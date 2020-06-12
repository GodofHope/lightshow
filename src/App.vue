<!--
 * @Author: Mr.Hope
 * @Date: 2019-05-18 23:22:22
 * @Description: APP主视图
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="stylus">
@require '~%/public'

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
</style>
