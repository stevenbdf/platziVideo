import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getVideoSource } from '../actions/index'
import '../assets/styles/containers/Player.scss'

const Player = props => {

    const { id } = props.match.params

    useEffect(() => {
        props.getVideoSource(id)
    }, [])

    if (props.playing) {
        if (Object.keys(props.playing).length) {
            return (
                <div className="Player">
                    <video controls autoPlay>
                        <source src={props.playing.source} type="video/mp4" />
                    </video>
                    <div className="Player-back">
                        <button type="button" onClick={() => props.history.push('/')}>
                            Regresar
                    </button>
                    </div>
                </div>
            )
        } else {
            return (<Redirect to="/404"></Redirect>)
        }
    } else {
        return (
            <h3>Cargando...</h3>
        )
    }
}

const mapStateToProps = state => {
    return {
        playing: state.rGeneral.playing
    }
}

const mapDispatchToProps = {
    getVideoSource
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)