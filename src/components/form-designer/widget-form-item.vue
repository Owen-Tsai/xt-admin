<template>
  <a-form-item
    :label="widget.name"
    :required="widget.config.required"
    class="group relative p-2 border-dashed border"
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
    <div class="absolute top-0 left-0 bg-blue-400 text-white leading-none">
      <s-icon :name="DragMove" :size="16" />
    </div>
  </a-form-item>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { DragMove } from '@salmon-ui/icons'
import type { FormWidgetsConfig } from './types'

const props = defineProps({
  widget: {
    type: Object as PropType<FormWidgetsConfig>,
    required: true
  }
})
</script>
