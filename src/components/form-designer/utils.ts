import type { WidgetsConfig } from './types'

export const findWidgetWithUID = (widgets: WidgetsConfig[], uid: string) => {
  for (let i = 0; i < widgets.length; i++) {
    const widget = widgets[i]
    if (widget.uid === uid) {
      return widget
    }
    if (widget.type === 'grid' && widget.cols.length > 0) {
      for (let j = 0; j < widget.cols.length; j++) {
        const subWidgets = widget.cols[j].widgets
        for (let k = 0; k < subWidgets.length; k++) {
          if (subWidgets[k].uid === uid) {
            return subWidgets[k]
          }
        }
      }
    }
  }

  return undefined
}

export const inputEventNames = ['input', 'change', 'focus', 'blur']
