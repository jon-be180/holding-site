import * as React from "react"
import Particles from 'react-tsparticles'
import particleOptions from '../particles-config.json'

// styles
const particles = {
  height: "100vh",
  position: "absolute",
  top: 0,
  right: 0,
  left: 0
}
const outerContainer = {
  display: "flex",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center"
}
const container = {
  margin: "0 0.5em",
  zIndex: 1,
  paddingBottom: "6.5em"
}

// markup
const IndexPage = () => {
  return (
    <main>

      <Particles style={particles} options={particleOptions} />

      <div style={outerContainer}>
        <div style={container}>
          test
        </div>
      </div>

    </main>
  )
}

export default IndexPage
