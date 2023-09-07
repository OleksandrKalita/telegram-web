import { UserState } from "../types/user";
import { openDatabase } from "./openDatabase";

export function getUserData(UserId: string): Promise<UserState> {
    return new Promise(async(resolve, reject) => {
        const db = await openDatabase();
        const transaction = db.transaction("Users", "readonly");
        const store = transaction.objectStore("Users");

        const index = store.index("id_IDX");
        const request = index.get(UserId);

        request.onsuccess = function() {
            db.close();
            if(request.result) {
                const User: UserState = {user_id: request.result.UserId,
                    user_email: request.result.Email,
                    user_username: request.result.Username,
                    first_name: request.result.FirstName,
                    last_name: request.result.LastName,
                    user_bio: request.result.Bio,
                    user_avatar: request.result.Avatar,
                }
                resolve(User);
            }else {
                reject();
            }
        }
    })
}
export function getUserData_email(Email: string): Promise<UserState> {
    return new Promise(async(resolve, reject) => {
        const db = await openDatabase();
        const transaction = db.transaction("Users", "readonly");
        const store = transaction.objectStore("Users");

        const index = store.index("email_IDX");
        const request = index.get(Email);

        request.onsuccess = function() {
            db.close();
            if(request.result) {
                const User: UserState = {user_id: request.result.UserId,
                    user_email: request.result.Email,
                    user_username: request.result.Username,
                    first_name: request.result.FirstName,
                    last_name: request.result.LastName,
                    user_bio: request.result.Bio,
                    user_avatar: request.result.Avatar,
                }
                resolve(User);
            }else {
                reject();
            }
        }
    })
}
// export function getUserId(UserEmail: string): Promise<string> {  }