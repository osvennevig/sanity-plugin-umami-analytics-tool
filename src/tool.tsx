import {ComponentConfig} from './types'

export default function Tool(props: ComponentConfig) {
  const config = {
    url: props.tool.url || '',
  }
  return (
    <>
      {/* {JSON.stringify(config)} */}
      {config.url ? (
        <>
          <iframe
            src={config.url}
            loading="lazy"
            style={{
              width: '100%',
              minWidth: 'calc(100% - 1px)',
              height: 'calc(100vh - 50px)',
              border: 'none',
              verticalAlign: 'middle',
            }}
          />
        </>
      ) : (
        <div style={{margin: '16px'}}>url is missing from your plugin configuration</div>
      )}
    </>
  )
}
