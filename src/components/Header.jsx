import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import gravatar from '../utils/gravatar'
import { logoutRequest } from '../actions/index'
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/user-icon.png'

const Header = props => {
    const { user, path } = props
    const hasUser = Object.keys(user).length > 0

    const handleLogout = () => {
        props.logoutRequest({})
    }

    let headerClass = ''
    if (path === '/login' || path === '/register') {
        headerClass = 'header__green'
    } else if (path === '/') {
        headerClass = 'header'
    }
    else {
        headerClass = 'd-none'
    }

    return (
        <header className={headerClass}>
            <Link to="/">
                <img className="header__img" src={logo} alt="Platzi Video" />
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    {
                        hasUser ?
                            <img src={gravatar(user.email)} alt={user.name} />
                            :
                            <img src={userIcon} alt="Icono de usuario" />
                    }
                    <p>Perfil</p>
                </div>
                <ul>
                    {
                        hasUser && <li><a href="/">{user.name}</a></li>
                    }
                    {

                        hasUser ?
                            <li><a onClick={handleLogout}>Cerrar Sesión</a></li>
                            :
                            <li><Link to="/login">Iniciar Sesión</Link></li>
                    }
                </ul>
            </div>
        </header>
    )
}

Header.propTypes = {
    user: PropTypes.object.isRequired,
    logoutRequest: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        user: state.user,
        path: state.path
    }
}

const mapDispatchToProps = {
    logoutRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
