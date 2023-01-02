import axios from "axios";
import {followingOnProgress} from "../redux/userReducer";
import {setProfileInfoAC, toggleIsFetchingAC} from "../redux/profileReducer";


let instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "fa4b8e6e-3c36-42cd-b0ba-61115a6f26d2"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
}

export const followAPI = {
    follow(id) {
        return instance
            .post(`follow/${id}`)
            .then(response => response.data)
    },
    unfollow(id) {
        return instance
            .delete(`follow/${id}`)
            .then(response => response.data)
    },
}

export const profileAPI = {
    getUserProfile(id) {
        return instance
            .get(`profile/${id}`)
            .then(response => response.data)
    },
    getStatus(id) {
        return instance
            .get(`profile/status/${id}`)
            .then(response => response.data)
    },
    updateStatus(message) {
        return instance
            .put('profile/status', {status: message})
    },
}

export const authAPI = {
    authMe() {
        return instance
            .get('auth/me')
            .then(response => response.data)
    }
}