import {BarChartIcon} from '@sanity/icons'
import {lazy} from 'react'
import {definePlugin} from 'sanity'

import {UmamiToolConfig} from './types'

export const umamiTool = definePlugin<UmamiToolConfig | void>((options) => {
  const {title, url, name} = options || {}
  return {
    name: 'umamiTool',
    tools: [
      {
        name: name || 'umami',
        title: title || 'Umami',
        url: url,
        icon: BarChartIcon,
        component: lazy(() => import('./tool')),
      },
    ],
  }
})
