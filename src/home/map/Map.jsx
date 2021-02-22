import React from 'react'

export default function Map() {
  return (
    <div style={{width: '100%', height: '100%'}}>
      <iframe 
      style={{width: '100%', height: '100%'}}
      src="/map.html" 
      title="美食地图" 
      frameborder="0"></iframe>
    </div>
  )
}
