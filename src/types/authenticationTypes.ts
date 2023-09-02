// import { URLString } from "type-fest"


export interface LoginDataProps {
    email: string,
    password: string,
}
export interface RegistrationDataProps {
    userId: string,
    email: string,
    password: string,
}
export interface PrivateDataProps {
    UserId: string,
    Email: string,
    Password: string,
}

export interface NewUserProps {
    UserId: string,
    FirstName: string|undefined,
    LastName: string|undefined,
    Username: string|undefined,
    Email: string,
    Bio: string|undefined,
    Avatar: string,
    Theme: "dark"|"light",
    Language: "English"| "Polish"| "Ukrainian";
}