<!--
 * @Author: Mr.Hope
 * @Date: 2019-05-13 17:43:05
 * @Description: 页脚
-->
<template>
  <div class="Footer">
    <div class="footerCtn">
      <div>走出半生，归来仍是东师青年——</div>
      <div class="footLogo rotate">
        <img src="~|/logo.png" style="width: 100%; height: 100%;" />
      </div>
    </div>
    Copyright © 东北师范大学学生会
    <div>网站制作:Mr.Hope</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>
<style scoped lang="stylus">
.Footer
  margin-top 20px
  padding 8px 5%
  font-size 12px
  color #888
  text-align center

.footerCtn
  font-size 10px
  font-weight 300
  letter-spacing 1px
  line-height 1.6
  text-align center
  color #888
  display -webkit-flex
  display flex
  justify-content center
  align-items center

@media (min-width: 600px)
  .footerCtn
    font-size 12px

.nm .footerCtn
  color #777

.footLogo
  width 20px
  height 20px
  margin 0

@keyframes rotate
  from
    -webkit-transform rotate(0deg)
    transform rotate(0deg)

  to
    -webkit-transform rotate(360deg)
    transform rotate(360deg)

.rotate
  -webkit-animation 9.5s linear 0s normal none infinite rotate
  animation 9.5s linear 0s normal none infinite rotate
</style>
