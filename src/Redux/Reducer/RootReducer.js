import { combineReducers } from "redux"
import { LoginReducer } from './LoginReducer'
import { RegisterReducer } from './RegisterReducer'
import { ContactReducer } from './ContactReducer'
import { CreateBlogReducer } from './CreateBlogReducer'
import { BlogDisplayReducer } from './BlogDisplayReducer'
import { CommentsReducer } from './CommentsReducer'


const rootReducer = combineReducers({
    LoginReducer,
    RegisterReducer,
    ContactReducer,
    CreateBlogReducer,
    BlogDisplayReducer,
    CommentsReducer
})

export default rootReducer