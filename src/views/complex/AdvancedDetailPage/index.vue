<template>
  <main class="px-6 pb-4">
    <s-navs :navs="['menu.complex', 'menu.complex.detailspage']" />

    <div class="s-section flex">
      <DescribeHead />
    </div>
    <div>
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" title="详情">
          <Particulars />
        </a-tab-pane>
        <a-tab-pane key="2" title="规则">
          规则页面
        </a-tab-pane>
      </a-tabs>
    </div>
  </main>
</template>

<script setup lang="ts">
import DescribeHead from './widgets/DescribeHead.vue';
import Particulars from './widgets/Particulars.vue';
</script>

<style lang="scss" scoped>

</style>
