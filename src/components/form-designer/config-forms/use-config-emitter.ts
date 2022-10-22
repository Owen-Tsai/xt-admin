import { computed, defineEmits, WritableComputedRef } from 'vue'
import { WidgetsConfig } from '../types'

const useEmitter = <T>(props: Extract<T, WidgetsConfig>) => {
  const emit = defineEmits(['update:widgetConfig'])

  const config = computed({
    get: () => props.config,
    set: (val) => {
      emit('update:widgetConfig', val)
    }
  })

  return {
    emit, config
  } as {
    emit: typeof emit
    config: WritableComputedRef<T>
  }
}

export default useEmitter
