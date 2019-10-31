import{PUBLIC_USER} from '../constants'
import axios from 'axios'

const publicUser = function(user) {
    return {
        type: PUBLIC_USER,
        publicUser: user
    }
}

export const setPublicUser = (user) => dispatch => dispatch(publicUser(user));

