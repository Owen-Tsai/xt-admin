<template>
  <div class="s-section">
    <div class="flex items-center justify-between">
      <h2 class="text-base">待办事项</h2>
      <a-link>查看更多</a-link>
    </div>

    <div class="mt-4">
      <a-table
        :columns="cols"
        :data="data"
        :pagination="false"
      >
        <template #action>
          <a-button size="small">查看</a-button>
        </template>
        <template #progress="{ record }: { record: TodoTableItem }">
          {{ record.progress }}%
        </template>
      </a-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { getTodoTable, TodoTableItem } from '@/api/dashboard'

const cols = ref<{
  title: string;
  dataIndex?: string;
  slotName?: string;
}[]>([
  { dataIndex: 'title', title: '业务名称' },
  { dataIndex: 'progress', slotName: 'progress', title: '审核进度' },
  { dataIndex: 'todo', title: '待审数量' },
  { slotName: 'action', title: '操作' },
])

const data = ref<TodoTableItem[]>()

getTodoTable().then((res) => {
  data.value = res.data
})
</script>
