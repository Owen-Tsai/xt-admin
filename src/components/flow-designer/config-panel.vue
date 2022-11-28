<template>
  <div class="x6-widget-stencil-group">
    <div class="x6-widget-stencil-group-title">节点配置</div>
    <div class="p-3">
      <div v-if="cell === null" class="text-center text-gray-500 pt-6">
        选择1个节点进行配置
      </div>
      <a-form
        v-else
        :model="data"
        layout="vertical"
      >
        <a-form-item label="节点名称">
          <a-input />
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  PropType
} from 'vue'
import { Cell } from '@antv/x6'

const props = defineProps({
  cell: {
    type: Object as PropType<Cell | null>,
    required: true
  }
})

const emit = defineEmits(['update:cell'])

const data = ref({})
</script>
