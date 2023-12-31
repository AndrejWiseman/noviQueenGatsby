import React from 'react'
import { Link } from 'gatsby'




export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">

            <Link className="navbar-brand" to="/">Netlify CMS</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Pocetna</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/kontakt">Kontakt</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/pesme">Pesme</Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>
    )
}



