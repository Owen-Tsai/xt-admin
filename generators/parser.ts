import fs from 'fs/promises'
import path from 'path'
import Line from './line'
import type { GeneratorConfig } from './types'

class TemplateParser {
  private templateRaw = ''

  private colSpan = 24

  private config: GeneratorConfig = {}

  private fileLines: string[] = []

  private lines: Line[] = []

  constructor(config: GeneratorConfig) {
    if (!config.file) {
      throw new Error('[Form Gen] A file must be supllied to the TemplateParser')
    }
    this.config = {
      file: config.file,
      col: config.col || 1,
      labelAlign: config.labelAlign || 'right',
      layout: config.layout || 'horizontal',
      size: config.size || 'medium'
    }

    this.init()
  }

  async init() {
    try {
      const data = await fs.readFile(
        path.join(__dirname, './input', this.config.file as string),
        { encoding: 'utf-8' }
      )
      if (data.trim() === '') {
        throw new Error('[TP] File is empty.')
      }
      this.fileLines = data.split(/\n/g)
      this.lines = []
      this.fileLines.forEach((line, i) => {
        if (line.trim().length === 0) {
          this.fileLines.splice(i, 1)
        } else {
          this.lines.push(new Line(line))
        }
      })
      this.renderLines()
    } catch (error) {
      console.log('Template parsing failed.')
      throw error
    }
  }

  renderLines() {
    console.log(this.lines)
  }
}

const parser = new TemplateParser({
  file: 'test'
})
