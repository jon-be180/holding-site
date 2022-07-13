import * as React from "react"
import data from "../data.json"

const style = {
    margin: "0 0.5em",
    zIndex: 1,
    textAlign: "center"
}

const Footer = () => {
    return (
        <footer style={style}>
            <p>Built with Gatsby, hosted by CloudFlare.</p>
        </footer>
    )
}

//{"Company No. " + data.companyNumber}

export default Footer