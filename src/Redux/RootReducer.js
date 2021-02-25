import { combineReducers } from "redux"
import {LoginReducer} from './Reducer/LoginReducer'
import {RegisterReducer} from './Reducer/RegisterReducer'
import {ContactReducer} from './Reducer/ContactReducer'


const RootReducer = combineReducers({
    LoginReducer,
    RegisterReducer,
    ContactReducer
})

export default RootReducer