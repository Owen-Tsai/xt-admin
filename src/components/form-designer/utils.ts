import type { WidgetsConfig } from './types'

// TODO: remove useless searching when already found a match
export const getWidgetByUID = (
  widgets: WidgetsConfig[],
  uid: string
): WidgetsConfig | undefined => {
  let result: WidgetsConfig | undefined

  for (let i = 0; i < widgets.length; i++) {
    const widget = widgets[i]

    if (widget.uid === uid) {
      result = widget
      return result
    }

    if (
      widget.type === 'grid' &&
      widget.cols.length > 0 &&
      result === undefined
    ) {
      for (let j = 0; j < widget.cols.length; j++) {
        result = getWidgetByUID(widget.cols[j].widgets, uid)
        if (result !== undefined) {
          return result
        }
      }
    }

    if (
      widget.type === 'tab' &&
      widget.panes.length > 0 &&
      result === undefined
    ) {
      for (let j = 0; j < widget.panes.length; j++) {
        result = getWidgetByUID(widget.panes[j].widgets, uid)
        if (result !== undefined) {
          return result
        }
      }
    }
  }

  return result
}

export const removeWidgetByUID = (
  widgets: WidgetsConfig[],
  index: number,
  uid: string
) => {
  if (widgets[index].uid === uid) {
    widgets.splice(index, 1)
    return
  }

  for (let i = 0; i < widgets.length; i++) {
    const widget = widgets[i]
    if (widget.type === 'grid') {
      widget.cols.forEach((col) => removeWidgetByUID(col.widgets, index, uid))
    }
    if (widget.type === 'tab') {
      widget.panes.forEach((pane) =>
        removeWidgetByUID(pane.widgets, index, uid)
      )
    }
  }
}

export const inputEventNames = ['input', 'change', 'focus', 'blur']
