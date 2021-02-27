import {
    CREATEBLOG_USERS_FAILURE,
    CREATEBLOG_USERS_REQUEST,
    CREATEBLOG_USERS_SUCCESS,
    ADD_USER
} from "../Type/CreateBlogType"
import axios from 'axios'

export const createBlogUsersRequest = () => {
    return {
        type: CREATEBLOG_USERS_REQUEST
    }
}

export const createBlogUsersSuccess = users => {
    return {
        type: CREATEBLOG_USERS_SUCCESS,
        payload: users

    }
}
export const createBlogUsersFailure = error => {
    return {
        type: CREATEBLOG_USERS_FAILURE,
        payload: error

    }
}


export default function createBlogApi(blogData) {
    console.log(blogData)
    return dispatch => {
        console.log('api')
        dispatch(createBlogUsersRequest())
        axios.post('http://localhost:3003/blogData', blogData)
            .then(res => {
                var user = res.data
                console.log(user);
                dispatch(createBlogUsersSuccess(user))
                return res.data
            }).catch(error => {
                dispatch(createBlogUsersFailure('create blog'))
            })

    }

}
