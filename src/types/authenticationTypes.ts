// import { URLString } from "type-fest"

export interface RegistrationProps {
    email: string,
    password: string,
}
export interface PrivateUserProps {
    Email: string,
    Password: string
}

export interface NewUserProps {
    UserId: number,
    FirstName: string|undefined,
    LastName: string|undefined,
    Username: string|undefined,
    Email: string,
    Bio: string|undefined,
    Avatar: string,
    Theme: "dark"|"light",
    Language: "English"| "Polish"| "Ukrainian";
}