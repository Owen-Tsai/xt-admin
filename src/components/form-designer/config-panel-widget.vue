<template>
  <template v-if="widgetConfig !== undefined">
    <input-form
      v-if="widgetConfig.type === 'input'"
      v-model:active-widget="config"
    />
  </template>
</template>

<script lang="ts" setup>
import {
  PropType,
  computed,
  ref,
  watch
} from 'vue'
import { WidgetsConfig, IConfigInput } from './types'
import InputForm from './config-forms/input.vue'

const props = defineProps({
  widgetConfig: {
    type: Object as PropType<WidgetsConfig> | undefined,
    required: true
  }
})

const emit = defineEmits(['update:widgetConfig'])

const config = ref(props.widgetConfig)

watch(config, (val) => {
  emit('update:widgetConfig', val)
})
</script>
