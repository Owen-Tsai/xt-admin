import type { InputType } from './types'

class Line {
  private fragments: string[] = []

  private raw = ''

  private template = ''

  public type: InputType | undefined = undefined

  public label = ''

  public field = ''

  public isRequired = false

  public options: {
    label: string,
    value: any
  }[] = []

  constructor(raw: string) {
    this.raw = raw
    this.init()
  }

  init() {
    const pair = this.raw.split(':')
    pair.forEach((p) => {
      p.trim()
    });
    [this.field, this.template] = pair
    this.fragments = this.template.replace(/[\n+\r+]/g, '').split('|')
    this.parseTemplate()
  }

  parseTemplate() {
    const frags = this.fragments
    this.label = frags.shift()
    frags.forEach((frag, i) => {
      if (frag === '*') {
        this.isRequired = true
      }
      const arrMatch = /\[.*\]/
      const urlMatch = /url\(.*\)/
      if (frag.match(arrMatch)) {
        // select or cascader
        if (frag.match(urlMatch)) {
          this.type = 'cascader'
        } else {
          this.type = 'select'
          const str = frag.replace(/^\[/, '').replace(/\]$/, '')
          const arr = str.split(',')
          arr.forEach((k, idx) => {
            this.options.push({
              label: k,
              value: idx
            })
          })
          console.log(JSON.stringify(this.options))
        }
      } else if (frag.match(urlMatch)) {
        this.type = 'select-remote'
      } else {
        switch (frag) {
          case 'd':
            this.type = 'date'
            break
          case 'm':
            this.type = 'month'
            break
          case 'y':
            this.type = 'year'
            break
          case 'q':
            this.type = 'quarter'
            break
          case 'w':
            this.type = 'week'
            break
          case 'dt':
            this.type = 'date-time'
            break
          case 'dr':
            this.type = 'date-range'
            break
          case 'n':
            this.type = 'number'
            break
          case 'password':
            this.type = 'password'
            break
          case 'textarea':
            this.type = 'password'
            break
          default:
            this.type = 'input'
            break
        }
      }
    })
  }
}

export default Line
