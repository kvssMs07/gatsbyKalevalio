import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "../css/style.css"

//module Link de gatsby pour les liens entre les pages
// import { Link } from "gatsby"

export default function Home() {
  return (
    <div class="main">
      <div class="container">
        <h1>MATAILA Kalevalio</h1>
        <StaticImage 
          src="../images/logo.jpg" 
          alt="a monkey" 
          width={250}
          height={250}
          layout="fixed" 
          className="logo"
        />
        <h3>Etudiant et Alternant Concepteur Developpeur Web à la Province Nord</h3>
        <a href="mailto:matailakalevalio@gmail.com">
          <StaticImage 
            src="../images/mail.jpg" 
            alt="a monkey" 
            width={40}
            height={40}
            layout="fixed" 
            className="mail"
          />
        </a>
      </div>
      {/* <Link to="/page-2/">Page 2</Link> */}
    </div>
  )
}
