import {
  Graph, Addon, Node, Cell
} from '@antv/x6'
import { ref } from 'vue'
import type { Options } from '@antv/x6/lib/graph/options'
import buildingBlocks from './blocks-config'

export const defaultConfig: Options.Manual = {
  grid: true,
  mousewheel: {
    enabled: true
  },
  panning: {
    enabled: true,
    eventTypes: ['rightMouseDown']
  },
  selecting: {
    enabled: true,
    rubberband: true,
    showEdgeSelectionBox: true,
    multiple: true,
    showNodeSelectionBox: true,
  },
  connecting: {
    router: {
      name: 'manhattan',
      args: { padding: 20 }
    },
    connector: {
      name: 'rounded',
      args: { radius: 4 }
    },
    allowBlank: false,
    snap: {
      radius: 16
    }
  },
  highlighting: {
    magnetAdsorbed: {
      name: 'stroke',
      args: {
        padding: 1,
        attrs: {
          strokeWidth: 2,
          stroke: '#00B42A'
        }
      }
    }
  },
  keyboard: true,
  snapline: true,
  resizing: true,
  clipboard: true,
  history: true
}

const setupStencil = (container: HTMLElement, target: Graph) => {
  // create stencil
  const stencil = new Addon.Stencil({
    target,
    stencilGraphWidth: 200,
    stencilGraphHeight: 400,
    groups: [
      {
        name: 'default',
        title: '流程与环节',
        collapsable: false
      }
    ]
  })

  const nodes: Node[] = []
  buildingBlocks.forEach((config) => {
    nodes.push(target.createNode(config))
  })

  stencil.load(nodes, 'default')
  container.appendChild(stencil.container)

  return stencil
}

const setupKeyboardHotkeys = (graph: Graph) => {
  graph.bindKey('ctrl+c', () => {
    const cells = graph.getSelectedCells()
    if (cells.length) {
      graph.copy(cells)
    }
    return false
  })

  graph.bindKey('ctrl+v', () => {
    if (!graph.isClipboardEmpty()) {
      const cells = graph.paste({ offset: 32 })
      graph.cleanSelection()
      graph.select(cells)
    }
  })

  graph.bindKey('ctrl+x', () => {
    const cells = graph.getSelectedCells()
    if (cells.length) {
      graph.cut(cells)
    }
    return false
  })

  graph.bindKey('ctrl+a', () => {
    graph.select(graph.getNodes())
  })

  graph.bindKey(['backspace', 'delete'], () => {
    const cells = graph.getSelectedCells()
    if (cells.length) {
      graph.removeCells(cells)
    }
  })

  graph.bindKey('ctrl+z', () => {
    if (graph.history.canUndo()) {
      graph.history.undo()
    }
    return false
  })

  graph.bindKey('ctrl+y', () => {
    if (graph.history.canRedo()) {
      graph.history.redo()
    }
    return false
  })
}

const setupPortEvents = (container: HTMLElement, graph: Graph) => {
  const showPorts = (ports: NodeListOf<SVGElement>, visible: boolean) => {
    ports.forEach((port) => {
      port.style.visibility = visible ? 'visible' : 'hidden'
    })
  }

  graph.on('node:mouseenter', () => {
    const ports = container.querySelectorAll('.x6-port-body') as NodeListOf<SVGAElement>
    showPorts(ports, true)
  })

  graph.on('node:mouseleave', () => {
    const ports = container.querySelectorAll('.x6-port-body') as NodeListOf<SVGAElement>
    showPorts(ports, false)
  })
}

const setupCellSelectEvent = (graph: Graph, target: Cell | null) => {
  graph.on('selection:changed', ({ selected }) => {
    if (selected.length > 0) {
      if (selected.length > 1) {
        console.log('selected more than 1')
      } else {
        [target] = selected
        console.log('selected ', target)
      }
    } else {
      target = null
    }
  })

  return target
}

export const setupGraph = (canvas: HTMLDivElement, stencilPanel: HTMLDivElement) => {
  const graphInstance = new Graph({
    ...defaultConfig,
    container: canvas
  })

  const selectedCell = ref<Cell | null>(null)

  setupKeyboardHotkeys(graphInstance)
  setupPortEvents(canvas, graphInstance)
  setupCellSelectEvent(graphInstance, selectedCell.value as Cell | null)

  const stencil = setupStencil(stencilPanel, graphInstance)

  return graphInstance
}
