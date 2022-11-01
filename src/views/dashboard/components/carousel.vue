<template>
  <a-carousel
    class="asel"
    indicator-type="slider"
    show-arrow="hover"
    auto-play
  >
    <a-carousel-item v-for="(src, idx) in imageSrc" :key="idx">
      <div>
        <img class="img" :src="src">
      </div>
    </a-carousel-item>
  </a-carousel>
</template>

<script lang="ts" setup>
const imageSrc = [
  '//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/5cc3cd1d994b7ef9db6a1f619a22addd.jpg~tplv-49unhts6dw-image.image',
  '//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/f256cbcc287139e191fecea9d255a1f0.jpg~tplv-49unhts6dw-image.image',
  '//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/b557ff0cd44146a2e471b477af2f30d0.jpg~tplv-49unhts6dw-image.image',
  '//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/665106f4bbd2a2df96eaf7aec52f7bc3.jpg~tplv-49unhts6dw-image.image',
  '//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/ea095a2c9c72b5d8f2f2818040db736d.jpg~tplv-49unhts6dw-image.image',
];
</script>
<style lang="scss" scoped>
  .asel{
    width: 100%;
    height: 170px;
    border-radius: 4px;
    overflow: hidden
  }
  .img{
    width: 100%
  }
</style>
