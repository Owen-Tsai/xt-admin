<template>
  <div class="container select-none">
    <div class="min-h-full flex-grow flex flex-col">
      <a-form
        :model="data"
        :label-align="ast.formConfig.labelAlign"
        :layout="ast.formConfig.layout"
        :size="ast.formConfig.size"
        class="min-h-full flex-grow flex flex-col"
      >
        <draggable
          :list="widgetsList"
          v-bind="{
            group: 'widgets',
            ghostClass: 'ghost',
            animation: 200,
            handle: '.drag-handler',
          }"
          class="min-h-full flex-grow p-6"
          :swap-threshold="0.05"
          item-key="uid"
        >
          <template #item="{ element, index }: ItemSlot">
            <template v-if="element.type === 'grid'">
              <a-row
                class="widget-wrapper !mx-0 !px-2 !py-3"
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
            </template>
            <template v-else-if="element.type === 'tab'">
              <a-tabs
                :type="element.config.type"
                :size="element.config.size"
                class="widget-wrapper !mx-0 !px-2 !py-3"
                :class="{
                  'is-selected': context?.selectedUID.value === element.uid,
                }"
                @click.self="context?.setSelectedUID(element.uid)"
              >
                <a-tab-pane
                  v-for="(pane, i) in element.panes"
                  :key="i"
                  :title="pane.name"
                  @click="onNestedWidgetWrapperClick(element.uid, pane)"
                >
                  <div class="nested-widget-list bg-green-50">
                    <nested-draggable :nested-list="pane.widgets" />
                  </div>
                </a-tab-pane>

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
              </a-tabs>
            </template>
            <template v-else>
              <widget-form-item :widget="element" :index="index" />
            </template>
          </template>
        </draggable>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  PropType,
  // computed,
  ref,
  inject,
} from 'vue'
import Draggable from 'vuedraggable'
import { DeleteBinFill, DragMove } from '@salmon-ui/icons'
import NestedDraggable from './nested-draggable.vue'
import {
  AST,
  WidgetsConfig,
  FormDesignerContext,
  contextSymbol,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ItemSlot,
  IConfigCol,
  IConfigTabPane,
} from './types'
import WidgetFormItem from './widget-form-item.vue'

const props = defineProps({
  ast: {
    type: Object as PropType<AST>,
    required: true,
  },
})

// an empty reactive data for form model
const data = ref({})

const context = inject<FormDesignerContext>(contextSymbol)

const widgetsList = ref<WidgetsConfig[]>(props.ast.widgetsConfig)

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
.container {
  @apply bg-white flex flex-col shadow-sm border min-h-full;
}
.empty {
  @apply flex items-center justify-center;
}
.nested-widget-list {
  min-height: 32px;
  align-self: stretch;
}
</style>
