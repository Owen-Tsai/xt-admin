<template>
  <div>
    <main class="px-6 pb-20">
      <s-navs :navs="['menu.sub-system', 'menu.sub-system.main', '详情']" />

      <div class="s-section">
        <h2 class="mb-4 text-lg font-bold">公司信息</h2>
        <a-descriptions :data="data.companyInfo" />
      </div>

      <div class="s-section mt-4">
        <h2 class="mb-4 text-lg font-bold">扶持对象</h2>
        <a-space
          direction="vertical"
          :size="32"
          class="w-full"
        >
          <div
            v-for="(item, i) in data.personnelInfo"
            :key="i"
            class="flex items-stretch"
          >
            <a-descriptions
              :title="`${i + 1}. ${item.name}`"
              :data="item.info"
              :column="3"
              class="w-2/3 border-r"
            >
              <template #value="{ data: row, value }">
                <template v-if="!row.mark">{{ value }}</template>
                <span v-else class="font-bold text-red-400">{{ value }}</span>
              </template>
            </a-descriptions>
            <a-list
              size="small"
              class="w-1/3 pl-8"
              :bordered="false"
              :split="false"
            >
              <a-list-item v-for="(file, j) in item.attachments" :key="file.id">
                <div class="flex items-center justify-between">
                  <span>{{ `${j + 1}. ${file.name}` }}</span>
                  <a-link :href="file.src" target="_blank">查看附件</a-link>
                </div>
              </a-list-item>
            </a-list>
          </div>
        </a-space>
      </div>
    </main>

    <div class="fixed bottom-0 w-full left-0 border-t">
      <div class="w-full bg-white text-right px-6 py-3">
        <a-space>
          <a-button>不通过</a-button>
          <a-button type="primary">通过</a-button>
        </a-space>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
})

const router = useRouter()

// a simulated check, before rendering the page
if (props.id !== '1' && props.type !== '101') {
  router.push({ name: 'not-found' })
}

const userStore = useUserStore()

const data = reactive({
  companyInfo: [
    { label: '公司名称', value: '中协通通信技术有限公司' },
    { label: '统一社会信用代码', value: 'X20020209ATsx912' },
    { label: '注册地址', value: '山东省济南市历下区某某路1111号' },
    { label: '行业领域', value: '计算机软件/互联网' },
    { label: '公司类别', value: '民营企业' },
    { label: '公司规模', value: '100~200人' },
    { label: '联系人', value: userStore.name || '' },
    { label: '联系人邮箱', value: userStore.email || '' },
  ],
  personnelInfo: [
    {
      name: '张三',
      id: 1,
      info: [
        { label: '姓名', value: '张三' },
        { label: '证件号', value: '护照/091029748712' },
        { label: '人员类型', value: '高级管理人才' },
        { label: '职务', value: '安保负责人' },
        { label: '上年度收入', value: '18.7 万元', mark: true },
        { label: '上年度纳税', value: '1.6 万元', mark: true },
        { label: '奖励比例', value: '0.4', mark: true },
        { label: '奖励金额', value: '0.65 万元', mark: true }
      ],
      attachments: [
        { id: 1, name: '身份证正面', src: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp' },
        { id: 2, name: '身份证反面', src: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp' },
        { id: 3, name: '个人履历和研究成果', src: 'http://www.jigaorencai.com:8088/servlet/attach?type=attach&id=8441' },
      ]
    },
    {
      name: '李四',
      id: 2,
      info: [
        { label: '姓名', value: '李四' },
        { label: '证件号', value: '370102199001010001' },
        { label: '人员类型', value: '高级管理人才' },
        { label: '职务', value: 'CTO首席技术官' },
        { label: '上年度收入', value: '18.7 万元', mark: true },
        { label: '上年度纳税', value: '1.6 万元', mark: true },
        { label: '奖励比例', value: '0.4', mark: true },
        { label: '奖励金额', value: '0.65 万元', mark: true }
      ],
      attachments: [
        { id: 1, name: '身份证正面', src: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp' },
        { id: 2, name: '身份证反面', src: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp' },
        { id: 3, name: '个人履历和研究成果', src: 'http://www.jigaorencai.com:8088/servlet/attach?type=attach&id=8441' },
      ]
    },
    {
      name: '王二麻子',
      id: 3,
      info: [
        { label: '姓名', value: '王二麻子' },
        { label: '证件号', value: '370102199001010201' },
        { label: '人员类型', value: '高级管理人才' },
        { label: '职务', value: 'CEO首席执行官' },
        { label: '上年度收入', value: '18.7 万元', mark: true },
        { label: '上年度纳税', value: '1.6 万元', mark: true },
        { label: '奖励比例', value: '0.4', mark: true },
        { label: '奖励金额', value: '0.65 万元', mark: true }
      ],
      attachments: [
        { id: 1, name: '身份证正面', src: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp' },
        { id: 2, name: '身份证反面', src: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp' },
        { id: 3, name: '个人履历和研究成果', src: 'http://www.jigaorencai.com:8088/servlet/attach?type=attach&id=8441' },
      ]
    }
  ]
})
</script>
