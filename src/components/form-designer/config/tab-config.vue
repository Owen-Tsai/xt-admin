<template>
  <div class="mb-4">
    <span class="label">标签页</span>
    <div
      v-for="(item, i) in config.panes"
      :key="i"
      class="flex items-center justify-between gap-4 mt-2 first:mt-0"
    >
      <a-input v-model="item.name" />
      <a-button status="danger" @click="removePaneFromTab(i)">
        <template #icon>
          <icon-minus />
        </template>
      </a-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue'
import type { IConfigTab } from '../types'

const emit = defineEmits(['update:widgetConfig'])
const props = defineProps({
  widgetConfig: {
    type: Object as PropType<IConfigTab>,
    required: true,
  },
})
const config = computed({
  get: () => props.widgetConfig,
  set: (val) => {
    emit('update:widgetConfig', val)
  },
})

const removePaneFromTab = (idx: number) => {
  config.value.panes.splice(idx, 1)
}
</script>
