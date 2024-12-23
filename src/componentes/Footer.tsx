import React from 'react'
import logo from "../assets/imagenes/logofavsvg.svg"
import mercado from "../assets/imagenes/mercado-pago-logo.svg"
import transfer from "../assets/imagenes/transferencia icono.svg"

export const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="#inicio" target="_blank" rel="noopener noreferrer" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            <img src={logo} height="100" alt="logo" />
          </a>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <img src={mercado} height="40" alt="mercado pago logo" />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <img src={transfer} height="50" alt="logo" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}