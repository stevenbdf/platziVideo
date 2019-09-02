import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { pathRequest } from '../actions'
import '../assets/styles/containers/Register.scss'

const Register = props => {
    props.pathRequest(props.location.pathname)
    return (
        <section className="register">
            <section className="register__container">
                <h2>Regístrate</h2>
                <form className="register__container--form">
                    <input className="input" type="text" placeholder="Nombre" />
                    <input className="input" type="text" placeholder="Correo" />
                    <input className="input" type="password" placeholder="Contraseña" />
                    <button className="button">Registrarme</button>
                </form>
                <Link to="/login">Iniciar sesión</Link>
            </section>
        </section>
    )
}

const mapDispatchToProps = {
    pathRequest
}

export default connect(null, mapDispatchToProps)(Register)