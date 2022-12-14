<template>
  <draggable
    :list="nestedList"
    v-bind="{
      group: 'widgets',
      ghostClass: 'ghost',
      animation: 200,
      handle: '.drag-handler',
    }"
    item-key="uid"
  >
    <template
      #item="{ element, index }: { element: WidgetsConfig, index: number }"
    >
      <div>
        <a-row
          v-if="element.type === 'grid'"
          class="widget-wrapper !mx-0 !px-2 !py-3 bg-white"
          :class="{
            'is-selected': context?.selectedUID.value === element.uid,
          }"
          :align="element.config.align"
          :justify="element.config.justify"
          :gutter="element.config.gutter"
          @click.self="context?.setSelectedUID(element.uid)"
        >
          <a-col
            v-for="(col, i) in element.cols"
            :key="i"
            :span="col.span || 0"
            class="relative first:pl-0 last:pr-0 z-10"
            @click="onNestedWidgetWrapperClick(element.uid, col)"
          >
            <div class="nested-widget-list bg-green-50">
              <nested-draggable :nested-list="col.widgets" />
            </div>
          </a-col>
          <template v-if="context?.selectedUID.value === element.uid">
            <button
              class="widget-action-icon absolute bottom-0 right-0 z-20"
              @click="context?.removeWidget(index, element.uid)"
            >
              <s-icon :name="DeleteBinFill" :size="16" />
            </button>
            <button
              class="widget-action-icon absolute top-0 left-0 cursor-move drag-handler z-50"
            >
              <s-icon :name="DragMove" :size="16" />
            </button>
          </template>
        </a-row>
        <widget-form-item :widget="element" :index="index" />
      </div>
    </template>
  </draggable>
</template>

<script lang="ts" setup>
import { inject, PropType } from 'vue'
import Draggable from 'vuedraggable'
import { DeleteBinFill, DragMove } from '@salmon-ui/icons'
import WidgetFormItem from './widget-form-item.vue'
import {
  WidgetsConfig,
  FormDesignerContext,
  IConfigCol,
  IConfigTabPane,
  contextSymbol,
} from './types'

defineProps({
  nestedList: {
    type: Array as PropType<WidgetsConfig[]>,
    required: true,
  },
})

const context = inject<FormDesignerContext>(contextSymbol)

const onNestedWidgetWrapperClick = (
  uid: string,
  col: IConfigCol | IConfigTabPane
) => {
  if (col.widgets.length === 0) {
    context?.setSelectedUID(uid)
  }
}
</script>

<style lang="scss" scoped>
.nested-widget-list {
  min-height: 32px;
  align-self: stretch;
}
</style>
