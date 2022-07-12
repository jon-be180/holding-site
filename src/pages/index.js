import * as React from "react"
import { Helmet } from "react-helmet"
import Particles from "react-tsparticles"
import particleOptions from "../particles-config.json"
import { loadFull } from "tsparticles"

import { StaticImage } from "gatsby-plugin-image"

import Footer from "../components/footer"

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

const data = {
  author: {
    firstName: "Jon",
    surname: "Knight",
    email: "jon@be180.co.uk",
    github: {
      user: "jon-be180"
    },
    linkedin: {
      user: "jonathan-knight-892a25b9"
    }
  },
  logo: {
    src: "", // cant do it as its "dynamic" now
    alt: 'be180 ltd logo'
  },
  tagline: "PHP, JS and DevOps",
  title: "be180 - PHP, JS and DevOps",
  companyDescription: "be180.co.uk Ltd Consulting",
  website: "https://be180.co.uk",
  meta: "be180 website",
  companyNumber: "??????",

}

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <html lang="en" amp />
        <meta charSet="utf-8" />
        <title>{data.title}</title>
        <link rel="canonical" href={data.website} />
        <meta name="description" content={data.meta} />
      </Helmet>
      <Particles style={particles} options={particleOptions} init={particlesInit} />
      <section style={outerContainer}>

        <section style={innerContainer}>
          <aside style={container}>
            <StaticImage src="https://assets.be180.co.uk/logo-transparent.png" alt={data.logo.alt} width="275" placeholder="none" />
          </aside>
          <aside style={container}>
            <h1 style={h1}>{data.author.firstName} {data.author.surname}</h1>
            <h2 style={h2}>{data.tagline}</h2>
            <p>{data.companyDescription}</p>
            <p><a href={"mailto:" + data.author.email}>{data.author.email}</a> | <a href={"https://github.com/" + data.author.github.user}>GitHub</a> | <a href={"https://www.linkedin.com/in/" + data.author.linkedin.user + "/"}>LinkedIn</a></p>
          </aside>
        </section>

        <Footer />

      </section>
    </main>
  )
}

export default IndexPage
