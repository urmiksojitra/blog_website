import { combineReducers } from "redux"
import { LoginReducer } from './Reducer/LoginReducer'
import { RegisterReducer } from './Reducer/RegisterReducer'
import { ContactReducer } from './Reducer/ContactReducer'
import { CreateBlogReducer } from './Reducer/CreateBlogReducer'
import { BlogDisplayReducer } from './Reducer/BlogDisplayReducer'


const RootReducer = combineReducers({
    LoginReducer,
    RegisterReducer,
    ContactReducer,
    CreateBlogReducer,
    BlogDisplayReducer
})

export default RootReducer