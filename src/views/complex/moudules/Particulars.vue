<template>
  <!-- 流程进度 -->
  <a-card :bordered="false" title="流程进度">
    <a-steps
      :current="atpresent"
      progress-dot
    >
      <a-step
        v-for="(StepDate,i) in setp"
        :key="i"
      >
        <div>
          <span>{{ StepDate?.title }}</span>
        </div>
        <div class="text-xs">
          {{ StepDate?.name }}
          <div v-if="StepDate?.data">{{ StepDate?.data }}</div>
          <div v-else class=" text-blue-300">
            <a>{{ StepDate?.remark }}</a>
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
      <a-descriptions-item label="用户姓名">{{ userInfo?.uname }}</a-descriptions-item>
      <a-descriptions-item label="会员卡号">{{ userInfo?.membershipNo }}</a-descriptions-item>
      <a-descriptions-item label="身份证">{{ userInfo?.identityCard }}</a-descriptions-item>
      <a-descriptions-item label="联系方式">{{ userInfo?.contactInfo }}</a-descriptions-item>
      <a-descriptions-item label="联系地址">{{ userInfo?.address }}</a-descriptions-item>
    </a-descriptions>
    <div v-if="userInfo?.infoGroups && userInfo?.infoGroups.length > 0">
      <a-descriptions
        title="信息组"
      >
        <a-descriptions-item label="该数据更新时间">
          {{ userInfo?.infoGroups[0].updateTime }}
        </a-descriptions-item>
      </a-descriptions>
      <div v-for="(groupData, j) in userInfo?.infoGroups![1]?.groupsData" :key="j">
        <a-card type="inner">
          <a-descriptions :title="groupData.name" size="small">
            <a-descriptions-item label="负责人">{{ groupData.supervisor }}</a-descriptions-item>
            <a-descriptions-item label="角色码">{{ groupData.code }}</a-descriptions-item>
            <a-descriptions-item label="所属部门">{{ groupData.dept }}</a-descriptions-item>
            <a-descriptions-item label="过期时间">{{ groupData.time }}</a-descriptions-item>
            <a-descriptions-item label="描述">{{ groupData.desc }}</a-descriptions-item>
          </a-descriptions>
        </a-card>
      </div>
    </div>
    <a-card
      v-else
      style="margin-top: 24px"
      :bordered="false"
      title="没有信息组"
    >
      <a-empty />
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
import { getUserInfo, getStep, getAtPresent } from '@/api/complex';
import { UserInfo, Step, } from '@/api/business';

const userInfo = ref<UserInfo>()
getUserInfo().then((res) => {
  // console.log(res);
  userInfo.value = res.data
})
const setp = ref<Step[]>()
const atPresent = ref<number>()
getStep().then((res) => {
  setp.value = res.data
  // console.log(setp.value);
})
getAtPresent().then((res) => {
  // console.log(res);
  atPresent.value = res.data.atpresent
})
</script>

<style lang="scss" scoped>

</style>
