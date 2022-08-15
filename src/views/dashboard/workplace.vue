<template>
  <main class="px-6">
    <s-navs :navs="['工作台', '主页']" />

    <div class="bg-white px-6 py-4">
      <h1>权限测试</h1>
      <div>
        <p>这是所有角色都可以看到的一句话。</p>
        <p>这句话只有管理员和用户可以看到。<b v-allow="['admin']">但是管理员可以看到额外的加粗内容</b>。</p>
        <p v-allow="['user']">这句话只有用户可以看到。</p>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup></script>
