import { UserAction, UserActionTypes, UserState } from "../../types/user"

const initialState: UserState = {
    user_id: undefined,
    user_email: undefined,
    user_username: undefined,
    first_name: undefined,
    last_name: undefined,
    user_bio: undefined,
    user_avatar: undefined,
}
const LogOutUser: UserState = {
    user_id: undefined,
    user_email:undefined,
    user_username: undefined,
    first_name: undefined,
    last_name: undefined,
    user_bio: undefined,
    user_avatar: undefined,
}
export const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
    switch(action.type) {
        case UserActionTypes.LOG_IN_USER:
            return { user_id: action.payload.user_id,
                user_email: action.payload.user_email,
                user_username: action.payload.user_username,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                user_bio: action.payload.user_bio,
                user_avatar: action.payload.user_avatar,
            };
        case UserActionTypes.LOG_OUT_USER:
            return LogOutUser;
        case UserActionTypes.SET_USER_EMAIL:
            return {...state, user_email: action.payload};
        case UserActionTypes.SET_USER_USERNAME:
            return {...state, user_username: action.payload};
        case UserActionTypes.SET_USER_FIRSTNAME:
            return {...state, first_name: action.payload};
        case UserActionTypes.SET_USER_LASTNAME:
            return {...state, last_name: action.payload};
        case UserActionTypes.SET_USER_BIO:
            return {...state, user_bio: action.payload};
        case UserActionTypes.SET_USER_AVATAR:
            return {...state, user_avatar: action.payload};
        default:
            return state;
    }
}