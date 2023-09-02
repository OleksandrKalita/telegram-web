import { LoginDataProps } from "../types/authenticationTypes";
import { openDatabase } from "./openDatabase"

export function isCorrectLoginData(data: LoginDataProps):Promise<any> {
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
                        localStorage.setItem("user_id", getRequest.result.UserId)
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