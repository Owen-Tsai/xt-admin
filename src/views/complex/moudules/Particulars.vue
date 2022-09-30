<template>
  <!-- 流程进度 -->
  <a-card :bordered="false" title="流程进度">
    <a-steps
      :current="atpresent"
      progress-dot
    >
      <a-step v-for="i in setp" :key="i">
        <div>
          <span>{{ i.title }}</span>
        </div>
        <div class="text-xs">
          {{ i.name }}
          <div v-if="i.data">{{ i.data }}</div>
          <div v-else class=" text-blue-300">
            <a>{{ i.remark }}</a>
          </div>
        </div>
      </a-step>
    </a-steps>
  </a-card>

  <!-- 用户信息 -->
  <a-card
    style="margin-top: 24px"
    :bordered="false"
    title="用户信息"
  >
    <a-descriptions>
      <a-descriptions-item label="用户姓名">{{ userinfo?.uname }}</a-descriptions-item>
      <a-descriptions-item label="会员卡号">{{ userinfo?.membershipnumber }}</a-descriptions-item>
      <a-descriptions-item label="身份证">{{ userinfo?.identitycard }}</a-descriptions-item>
      <a-descriptions-item label="联系方式">{{ userinfo?.contactinformation }}</a-descriptions-item>
      <a-descriptions-item label="联系地址">{{ userinfo?.contactaddress }}</a-descriptions-item>
    </a-descriptions>
    <a-descriptions title="信息组">
      <div v-for="item in messageblock" :key="item">
        <a-descriptions-item label="某某数据">
          {{ item?.uname }}
        </a-descriptions-item>
        <a-descriptions-item label="该数据更新时间">
          {{ item?.unamedata }}
        </a-descriptions-item>
      </div>
    </a-descriptions>
    <a-card type="inner" title="多层信息组">
      <div v-for="items in Multilayerinformationgroup" :key="items">
        <a-descriptions :title="items.Groupname" size="small">
          <a-descriptions-item label="负责人">{{ items.principal }}</a-descriptions-item>
          <a-descriptions-item label="角色码">{{ items.Charactercode }}</a-descriptions-item>
          <a-descriptions-item label="所属部门">{{ items.department }}</a-descriptions-item>
          <a-descriptions-item label="过期时间">{{ items.expirationtime }}</a-descriptions-item>
          <a-descriptions-item label="描述">{{ items.describe }}</a-descriptions-item>
        </a-descriptions>
        <a-divider style="margin: 16px 0" />
      </div>

    </a-card>

  </a-card>

  <!-- 用户近半年来电记录 -->
  <a-card
    style="margin-top: 24px"
    :bordered="false"
    title="用户近半年来电记录"
  >
    <a-empty />
  </a-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// import { filter } from 'minimatch';
import { getuserinfo, getstep, getatpresent } from '@/api/complex';
import { step } from '@/api/business';

const userinfo = ref()
const messageblock = ref()
const Multilayerinformationgroup = ref()
getuserinfo().then((res) => {
  // console.log(res);
  userinfo.value = res.data
  // console.log(suiji1.value);
  messageblock.value = res.data.messageblock
  Multilayerinformationgroup.value = res.data.messageblock?.[2].Multilayerinformationgroup
  // console.log('suiji4', suiji4.value);
})
const setp = ref()
const atpresent = ref()
getstep().then((res) => {
  // console.log(res);
  setp.value = res.data
})
getatpresent().then((res) => {
  console.log(res);
  atpresent.value = res.data.atpresent as number
})
</script>

<style lang="scss" scoped>

</style>
