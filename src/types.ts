import {type Tool} from 'sanity'

export interface UmamiToolConfig {
  url: string
  title?: string
  name?: string
}

export interface ComponentConfig extends UmamiToolConfig {
  tool: Tool & {url: string}
}
