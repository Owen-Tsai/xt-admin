<template>
  <div class="basis-2/3 bg-white p-5 mr-5">
    <h2 class="text-base mb-4">数据总览</h2>
    <div class="flex">
      <div class="w-1/4 p-5 pt-1.5">
        <h6 class="text-xs mb-2">内容生产量</h6>
        <div class="number-father flex leading-8">
          <div
            class="rounded-md text-lg w-8 h-8 leading-8 mr-2 text-center"
            style="background-color: rgb(255,228,186); color: rgb(255,125,0);"
          ><icon-edit />
          </div>
          <span class="font-medium" style="font-size: 26px">2,000</span>
        </div>
      </div>
      <div class="w-1/4 p-5 pt-1.5">
        <h6 class="text-xs mb-2">内容点击量</h6>
        <div class="number-father flex leading-8">
          <div
            class="rounded-md text-lg w-8 h-8 leading-8 mr-2 text-center"
            style="background-color: rgb(183,244,236); color: rgb(20,201,201);"
          ><icon-thumb-up />
          </div>
          <span class="font-medium" style="font-size: 26px">3,000</span>
        </div>
      </div>
      <div class="w-1/4 p-5 pt-1.5">
        <h6 class="text-xs mb-2">内容曝光量</h6>
        <div class="number-father flex leading-8">
          <div
            class="rounded-md text-lg w-8 h-8 leading-8 mr-2 text-center"
            style="background-color: rgb(232,243,255); color: rgb(22,93,255);"
          ><icon-heart />
          </div>
          <span class="font-medium" style="font-size: 26px">4,000</span>
        </div>
      </div>
      <div class="w-1/4 p-5 pt-1.5">
        <h6 class="text-xs mb-2">活跃用户数</h6>
        <div class="number-father flex leading-8">
          <div
            class="rounded-md text-lg w-8 h-8 leading-8 mr-2 text-center"
            style="background-color: rgb(245,232,255); color: rgb(114,46,209);"
          ><icon-user />
          </div>
          <span class="font-medium" style="font-size: 26px">5,000</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>

</style>
