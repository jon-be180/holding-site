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
            <p>Company No. {data.companyNumber}</p>
            <p>Built with Gatsby, hosted by Cloudflare.</p>
        </footer>
    )
}

export default Footer