import axios from 'axios'

const setAuthToken = token => {
    if(token){
        //Apply auth token to every req if logged in
        axios.defaults.headers.common["Authorization"] = token
    }else {
        //delete auth header
        delete axios.defaults.headers.common["Authorization"]
    }
}
export default setAuthToken