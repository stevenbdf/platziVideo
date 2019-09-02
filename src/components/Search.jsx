import React from 'react'
import { connect } from 'react-redux'
import { searchRequest } from '../actions/index'
import classNames from 'classnames'
import '../assets/styles/components/Search.scss'

const Search = ({ isHome, searchRequest }) => {
    const inputStyle = classNames('input', {
        isHome
    })

    const handleChange = event => {
        const { value } = event.target
        searchRequest(value.toLowerCase())
    }

    return (
        <section className="main">
            <h2 className="main__title">¿Qué quieres ver hoy?</h2>
            <input
                name="search"
                type="text"
                className={inputStyle}
                placeholder="Buscar..."
                onChange={handleChange}
            />
        </section>
    )
}

const mapDispatchToProps = {
    searchRequest
}


export default connect(null, mapDispatchToProps)(Search)