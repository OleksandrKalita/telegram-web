import { Dispatch } from "react";
import { LoginDataProps } from "../types/authenticationTypes";
import { openDatabase } from "./openDatabase"
import { UserAction, UserActionTypes } from "../types/user";
import { getUserData } from "./requestsToDB";

export function isCorrectLoginData(data: LoginDataProps):Promise<boolean> {
    return new Promise(async(resolve, reject) => {
        try{
            const db = await openDatabase();
            const transaction = db.transaction("PrivateData", "readwrite");
            const store = transaction.objectStore("PrivateData");
            
            const ind = store.index("email_IDX");

            const getRequest = ind.get(data.email);

            getRequest.onsuccess = function(event) {
                db.close();

                const result = (event.target as IDBRequest).result;
            
                if(result) {
                    if(getRequest.result.Password === data.password) {
                        resolve(true);
                    }else {
                        reject();
                    }
                }else {
                    reject();
                }
            }
        }catch(error) {
            console.error("Error - -> " + error)
        }
    })
}

export function autoLoginFunc(dispatch: Dispatch<UserAction>) {
    if(localStorage.getItem("user_id") != null) {
        const UserId: any = localStorage.getItem("user_id");
        getUserData(UserId)
        .then(data => {
            dispatch({type: UserActionTypes.LOG_IN_USER, payload: data});
        });
    }else if(sessionStorage.getItem("user_id") != null) {
        const UserId: any = sessionStorage.getItem("user_id");
        getUserData(UserId)
        .then(data => {
            dispatch({type: UserActionTypes.LOG_IN_USER, payload: data});
        });
    }else {
        console.log(":)");
    }
}