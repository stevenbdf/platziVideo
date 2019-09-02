import { combineReducers } from 'redux'
import general from './general'
import favorite from './favorite'
import user from './user'

export default combineReducers({ rFavorite: favorite, rGeneral: general, rUser: user })

