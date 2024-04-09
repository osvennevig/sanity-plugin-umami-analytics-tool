import {DashboardWidgetContainer} from '@sanity/dashboard'

export interface WidgetConfig {
  title?: string
  url: string
  height?: string
}

const defaultProps = {
  title: 'Umami Analytics',
  height: 'calc(100vh - 143px)',
}

export function Widget(props: WidgetConfig) {
  const {title, url, height} = props

  return (
    <DashboardWidgetContainer header={title}>
      <>
        <iframe
          src={url}
          loading="lazy"
          style={{
            width: '100%',
            minWidth: 'calc(100% - 1px)',
            height: height,
            border: 'none',
            verticalAlign: 'middle',
          }}
        />
      </>
    </DashboardWidgetContainer>
  )
}

Widget.defaultProps = defaultProps

export default Widget
