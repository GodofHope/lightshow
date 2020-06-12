<!--
 * @Author: Mr.Hope
 * @Date: 2019-05-13 17:43:05
 * @Description: 主页视图
-->
<template>
  <div>
    <div class="body">
      <h1>东北师范大学灯光秀</h1>
      <hr />
      <div class="desc">视频源自腾讯视频，可能包含广告，请在广告结束后观看</div>
      <iframe
        allowfullscreen="true"
        class="video"
        src="//v.qq.com/txp/iframe/player.html?vid=w0883s5cvlu&show1080p=true&autoplay=true&mini=true&bullet=true"
      />
      <div class="desc3">
        <router-link to="/hd">观看更清晰、无广告视频请点此</router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Footer from "#/Footer.vue";

@Component({ components: { Footer } })
export default class Home extends Vue {}
</script>
<style lang="stylus">
.video
  width 100%
  height 56vw
  text-align center
  padding 0 auto

.body
  min-height calc(100vh - 120px)
</style>
