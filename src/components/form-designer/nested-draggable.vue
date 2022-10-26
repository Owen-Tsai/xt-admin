<template>
  <draggable
    :list="nestedList"
    v-bind="{
      group: 'widgets',
      ghostClass: 'ghost',
      animation: 200,
      handle: '.drag-handler'
    }"
    item-key="uid"
    @end="handleEnd"
  >
    <template #item="{ element, index }">
      <widget-form-item
        :widget="element"
        :index="index"
      />
    </template>
  </draggable>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import Draggable from 'vuedraggable'
import WidgetFormItem from './widget-form-item.vue'
import type {
  IConfigGrid,
  WidgetsConfig
} from './types'

defineProps({
  nestedList: {
    type: Array as PropType<Exclude<WidgetsConfig, IConfigGrid>[]>,
    required: true
  }
})

const handleEnd = (e: any) => {
  console.log(e)
}
</script>
