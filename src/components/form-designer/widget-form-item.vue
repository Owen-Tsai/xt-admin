<template>
  <a-form-item
    :label="widget.name"
    :required="widget.config.required"
    class="group wrapper"
    :class="{ 'is-selected': isSelected }"
    @click="onWidgetSelect"
  >
    <template v-if="widget.type === 'input'">
      <a-input
        :default-value="widget.config.defaultValue"
        :placeholder="widget.config.placeholder"
        :allow-clear="widget.config.allowClear"
        :max-length="widget.config.maxLength"
        :show-word-limit="widget.config.showWordLimit"
        :readonly="widget.config.readonly"
        :disabled="widget.config.disabled"
        :style="{ width: widget.config.width }"
      />
    </template>
    <template v-if="widget.type === 'select'">
      <a-select
        :allow-clear="widget.config.allowClear"
        :allow-create="widget.config.allowCreate"
        :allow-search="widget.config.allowSearch"
        :multiple="widget.config.limit !== undefined && widget.config.limit > 0"
        :limit="widget.config.limit"
        :placeholder="widget.config.placeholder"
      >
        <a-option
          v-for="(opt, i) in widget.config.options"
          :key="i"
          :value="opt.value"
        >{{ opt.label }}</a-option>
      </a-select>
    </template>

    <!-- drag handler -->
    <div
      v-show="isSelected"
      class="absolute top-0 left-0 action-icon cursor-move drag-handler"
    >
      <s-icon :name="DragMove" :size="16" />
    </div>
    <!--  -->
  </a-form-item>
</template>

<script lang="ts" setup>
import {
  PropType,
  inject,
  computed
} from 'vue'
import { DragMove } from '@salmon-ui/icons'
import {
  FormWidgetsConfig,
  FormDesignerContext,
  contextSymbol
} from './types'

const props = defineProps({
  widget: {
    type: Object as PropType<FormWidgetsConfig>,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

const context = inject(contextSymbol) as FormDesignerContext

const isSelected = computed(() => context.selectedIndex.value === props.index)

const onWidgetSelect = () => {
  context.selectedIndex.value = props.index
}
</script>

<style lang="scss" scoped>
.action-icon {
  @apply inline-flex items-center justify-center h-5 w-5 bg-blue-400 text-white;
}
.wrapper {
  @apply relative p-2 before:absolute before:w-full before:h-full before:top-0 before:left-0 mb-1
    outline-dashed outline-gray-300 outline-1
    hover:outline hover:outline-blue-400 hover:bg-blue-50;

  &.is-selected {
    @apply outline outline-2 outline-blue-400;
  }
}
</style>
