import * as React from "react"
import { Helmet } from "react-helmet"
import Particles from "react-tsparticles"
import particleOptions from "../particles-config.json"
import { loadFull } from "tsparticles"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "@fontsource/quicksand"

import Footer from "../components/footer"

import data from "../data.json"

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
  flexDirection: "column",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Quicksand, sans-serif",
}

const innerContainer = {
  display: "flex",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
}
const container = {
  margin: "0 0.5em",
  paddingBottom: "6.5em",
  zIndex: 1,
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

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <html lang="en" amp />
        <meta charSet="utf-8" />
        <title>{data.title}</title>
        <meta name="title" content={data.title} />
        <link rel="canonical" href={data.website} />
        <meta name="description" content={data.meta} />
        <meta property="og:title" content={data.og.title} />
        <meta property="og:type" content={data.og.type} />
        <meta property="og:first_name" content={data.og.first_name} />
        <meta property="og:last_name" content={data.og.last_name} />
        <meta property="og:gender" content={data.og.gender} />
      </Helmet>
      <Particles style={particles} options={particleOptions} init={particlesInit} />
      <section style={outerContainer}>

        <section style={innerContainer}>
          <aside style={container}>
            <StaticImage src="https://assets.be180.co.uk/logo-transparent.png" alt={data.logo.alt} width="275" placeholder="none" loading="eager" />
          </aside>
          <aside style={container}>
            <h1 style={h1}>{data.author.firstName} {data.author.surname}</h1>
            <h2 style={h2}>{data.tagline}</h2>
            <p>{data.companyDescription}</p>
            <p>
              <Link title="My Email Address" to={"mailto:" + data.author.email}>{data.author.email}</Link> | <Link title="My GitHub Account" target="_blank" to={"https://github.com/" + data.author.github.user}>GitHub</Link> | <Link title="My LinkedIn Account" target="_blank" to={"https://www.linkedin.com/in/" + data.author.linkedin.user + "/"}>LinkedIn</Link>
            </p>
          </aside>
        </section>

        <Footer />

      </section>
    </main>
  )
}

export default IndexPage
