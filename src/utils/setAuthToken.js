import axios from "axios";

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['x-auth-headers'] = token;
    } else {
        delete axios.defaults.headers.common['x-auth-headers'];
    }
};

