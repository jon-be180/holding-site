import React from "React"
import data from "../data.json"

const style = {
    margin: "0 0.5em",
    zIndex: 1,
    textAlign: "center"
}

const Footer = () => {
    return (
        <footer style={style}>
            <p>Built with Gatsby, hosted by AWS. {"Company No. " + data.companyNumber}</p>
        </footer>
    )
}

export default Footer