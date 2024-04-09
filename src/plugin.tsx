import Widget, {WidgetConfig} from './widget'
import {LayoutConfig, DashboardWidget} from '@sanity/dashboard'

export interface UmamiWidgetConfig extends WidgetConfig {
  layout?: LayoutConfig
}

export function umamiWidget(config: UmamiWidgetConfig): DashboardWidget {
  return {
    name: 'sanity-plugin-umami-analytics-widget',
    component: function component() {
      return <Widget {...config} />
    },
    layout: config.layout ?? {width: 'full'},
  }
}
