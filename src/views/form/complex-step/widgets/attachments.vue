<template>
  <div class="px-4">
    <a-row>
      <a-col :span="8">
        <div>营业执照</div>
        <a-upload draggable :limit="1" />
      </a-col>
    </a-row>
    <a-row class="mt-4">
      <a-col :span="8">
        <div>本年度完税证明</div>
        <a-upload draggable :limit="1" />
      </a-col>
    </a-row>
  </div>
</template>
