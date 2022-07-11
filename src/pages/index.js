import * as React from "react"
import Particles from "react-tsparticles"
import particleOptions from "../particles-config.json"
import { loadFull } from "tsparticles"

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
  justifyContent: "center",
  fontFamily: "Quicksand"
}
const container = {
  margin: "0 0.5em",
  zIndex: 1,
  paddingBottom: "6.5em",
}

const h1 = {
  color: "#469BE0",
  fontSize: "2em",
  margin: 0
}

const h2 = {
  fontStyle: "italic",
  fontSize: "1.1em",
  color: "#1F6094"
}

const particlesInit = async (main) => {
  await loadFull(main)
};

// markup
const IndexPage = () => {
  return (
    <main>
      <Particles style={particles} options={particleOptions} init={particlesInit} />
      <article style={outerContainer}>
        <section style={container}>
          <img alt="be180 ltd logo" src="https://assets.be180.co.uk/logo-transparent.png" width="275px"/>
        </section>
        <aside style={container}>
          <h1 style={h1}>Jon Knight</h1>
          <h2 style={h2}>PHP and DevOps Consultant</h2>
          <p>be180.co.uk Ltd Consulting</p>
          <p>Company No. ?????</p>
          <p><a href="mailto:jon@be180.co.uk">jon@be180.co.uk</a> | <a href="https://github.com/jon-be180">GitHub</a> | <a href="https://www.linkedin.com/in/jonathan-knight-892a25b9/">LinkedIn</a></p>
        </aside>
      </article>
    </main>
  )
}

export default IndexPage
