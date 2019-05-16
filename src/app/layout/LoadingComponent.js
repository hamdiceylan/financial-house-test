import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const LoadingComponent = ({inverted}) => {
  return (
    <Dimmer inverted={inverted} active={true}>
        <Loader content= 'Loading data, please wait...' />
    </Dimmer>
  )
}

export default LoadingComponent