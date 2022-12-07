<template>
  <main class="px-8 py-6">
    <div class="s-section">
      测试路由传参，点击下方任何一条记录进入审核详情页

      <ul>
        <li class="my-1">
          申报类型: 101，记录ID: 1
          <router-link to="/sub-system/detail/101/1" class="arco-link"
            >审核</router-link
          >
        </li>
      </ul>
    </div>
  </main>
</template>
