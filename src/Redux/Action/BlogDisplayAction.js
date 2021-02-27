import {
    DISPLAY_BLOG_USERS_FAILURE,
    DISPLAY_BLOG_USERS_REQUEST,
    DISPLAY_BLOG_USERS_SUCCESS,
    ADD_USER
} from "../Type/BlogDisplayType"
import axios from 'axios'

export const blogDisplayUsersRequest = () => {
    return {
        type: DISPLAY_BLOG_USERS_REQUEST
    }
}

export const blogDisplayUsersSuccess = users => {
    return {
        type: DISPLAY_BLOG_USERS_SUCCESS,
        payload: users

    }
}
export const blogDisplayUsersFailure = error => {
    return {
        type: DISPLAY_BLOG_USERS_FAILURE,
        payload: error

    }
}


export default function blogDisplayApi(blogDataDisplay) {
    console.log(blogDataDisplay)
    return dispatch => {
        console.log('api')
        dispatch(blogDisplayUsersRequest())
        axios.get('http://localhost:3003/blogData')
            .then(res => {
                var user = res.data
                console.log(user);
                console.log(blogDataDisplay);
                var user1 = user.filter(values => values.user_id == blogDataDisplay)
                // var user1 = user.find(values => values.name === data1.name && values.password === data1.password)

                console.log(user1);
                if (user1 === undefined) {
                    throw (res.error)
                }

                dispatch(blogDisplayUsersSuccess(user1))
                return res.data;
            }).catch(error => {
                dispatch(blogDisplayUsersFailure("error "));
            })
    }

}
