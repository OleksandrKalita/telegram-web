export interface UserState {
    user_id: string|undefined,
    user_email: string|undefined,
    user_username: string|undefined,
    first_name: string|undefined,
    last_name: string|undefined,
    user_bio: string|undefined,
    user_avatar: string|undefined,
}

export enum UserActionTypes {
    LOG_IN_USER = "LOGIN_USER", // fetching data
    LOG_OUT_USER = "LOG_OUT_USER", 
    SET_USER_EMAIL = "SET_USER_EMAIL",
    SET_USER_USERNAME = "SET_USER_USERNAME",
    SET_USER_FIRSTNAME = "SET_USER_FIRSTNAME",
    SET_USER_LASTNAME = "SET_USER_LASTNAME", 
    SET_USER_BIO = "SET_USER_BIO", 
    SET_USER_AVATAR = "SET_USER_AVATAR", 
};

interface Log_In_Action {
    type: UserActionTypes.LOG_IN_USER,
    payload: UserState,
};
interface Log_Out_Action {
    type: UserActionTypes.LOG_OUT_USER,
};
interface Set_Email {
    type: UserActionTypes.SET_USER_EMAIL,
    payload: string,
}
interface Set_Username {
    type: UserActionTypes.SET_USER_USERNAME,
    payload: string,
}
interface Set_Firstname {
    type: UserActionTypes.SET_USER_FIRSTNAME,
    payload: string,
}
interface Set_Lastname {
    type: UserActionTypes.SET_USER_LASTNAME,
    payload: string,
}
interface Set_Bio {
    type: UserActionTypes.SET_USER_BIO,
    payload: string,
}
interface Set_Avatar {
    type: UserActionTypes.SET_USER_AVATAR,
    payload: string,
}

export type UserAction = Log_In_Action | Log_Out_Action | Set_Email | Set_Username | Set_Firstname | Set_Lastname | Set_Bio | Set_Avatar;