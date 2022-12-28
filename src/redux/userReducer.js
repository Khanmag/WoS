let TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING'
let SET_USERS = 'SET_USERS'
let SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    users: [],
    pageSize: 8,
    totalUsersCount: 50,
    currentPage: 1,
    isFetching: false,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOWING:
            let allAnother = state.users.filter((i) => i.id != action.id)
            let myUser = state.users.filter((i) => i.id == action.id)[0]
            let currentFollow = myUser.followed
            return {
                ...state,
                users: [...allAnother,
                    {...myUser, followed: !currentFollow}].sort((p, n) => p.id - n.id)
            }
        case SET_USERS:
            return {...state, users: [...action.users].sort((p, n) => p.id - n.id)}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: !state.isFetching}
        default:
            return state
    }
}

export const toggleFollowing = (id) => {
    return {
        type: TOGGLE_FOLLOWING,
        id: id
    }
}
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users,
    }
}
export const setTotalUsersCount = (count) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: count
    }
}
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage,
    }
}
export const toggleIsFetching = () => {
    return {type: TOGGLE_IS_FETCHING}
}

export default userReducer