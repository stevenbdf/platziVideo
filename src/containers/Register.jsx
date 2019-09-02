import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { registerRequest, pathRequest } from '../actions'
import '../assets/styles/containers/Register.scss'

const Register = props => {
    const [form, setForm] = useState({
        email: '',
        name: '',
        password: ''
    })

    const handleChange = event => {
        const { name, value } = event.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        props.registerRequest(form)
        props.history.push('/')
    }

    props.pathRequest(props.location.pathname)

    return (
        <section className="register">
            <section className="register__container">
                <h2>Regístrate</h2>
                <form className="register__container--form" onSubmit={handleSubmit}>
                    <input
                        name="name" 
                        className="input"
                        type="text"
                        placeholder="Nombre"
                        onChange={handleChange}
                        />
                    <input
                        name="email" 
                        className="input"
                        type="text"
                        placeholder="Correo"
                        onChange={handleChange}
                        />
                    <input
                        name="password" 
                        className="input"
                        type="password"
                        placeholder="Contraseña"
                        onChange={handleChange}
                        />
                    <button className="button">Registrarme</button>
                </form>
                <Link to="/login">Iniciar sesión</Link>
            </section>
        </section>
    )
}

const mapDispatchToProps = {
    registerRequest,
    pathRequest
}

export default connect(null, mapDispatchToProps)(Register)