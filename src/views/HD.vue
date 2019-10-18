<!--
 * @Author: Mr.Hope
 * @Date: 2019-06-12 23:41:28
 * @LastEditors: Mr.Hope
 * @LastEditTime: 2019-10-18 19:35:01
 * @Description: 高清视频观看
-->
<template>
  <div class="body">
    <h1>东北师范大学灯光秀</h1>
    <hr />
    <div class="desc">视频源自Github服务器</div>
    <video
      :src="src"
      autoplay="autoplay"
      controls="controls"
      preload="auto"
      style="width: 100%;"
    >您的浏览器版本无法播放视频，请您更换浏览器。</video>
    <div class="desc2">网站部署在Github上，可能会造成网络缓慢，请您耐心等待</div>
    <div class="desc2">
      <a
        href="http://light.nenuyouth.com/lightshow.mp4"
        rel="noopener noreferrer"
        target="_blank"
      >点击下载视频</a>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Footer from '#/Footer.vue';

@Component({ components: { Footer } })
export default class HD extends Vue {
  @Prop(String) private readonly base!: string;

  private count = 1500;

  private get url() {
    return `${this.base}count.json`;
  }

  private get src() {
    return `${this.base}lightshow.mp4`;
  }
}
</script>
<style scoped>
.body {
  min-height: calc(100vh - 120px);
}
</style>
