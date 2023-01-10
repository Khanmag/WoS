import axios from "axios";


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
    },
}

export const followAPI = {
    follow(id) {
        return instance
            .post(`follow/${id}`)
    },
    unfollow(id) {
        return instance
            .delete(`follow/${id}`)
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
    updatePhoto(photoFile) {
        let formData = new FormData();
        formData.append('image', photoFile)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfileData(profileData) {
        return instance.put('profile', profileData)
    }
}

export const authAPI = {
    authMe() {
        return instance
            .get('auth/me')
            .then(response => response.data)
    },
    login(email, password, rememberMe = false, captcha) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout() {
        return instance.delete('auth/login');
    },
}

export const securityAPI = {
    getCaptcha() {
        console.log('capthca get')
        return instance.get('security/get-captcha-url');
    }
}