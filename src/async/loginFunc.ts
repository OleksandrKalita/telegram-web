import { RegistrationProps } from "../types/authenticationTypes";
import { openDatabase } from "./openDatabase"

export function isCorrectLoginData(data: RegistrationProps):Promise<boolean> {
    return new Promise(async(resolve, reject) => {
        try{
            const db = await openDatabase();
            const transaction = db.transaction("PrivateData", "readwrite");
            const privateStore = transaction.objectStore("PrivateData");

            const getRequest = await privateStore.get(data.email);

            getRequest.onsuccess = () => {
                db.close();
                if(getRequest.result?.Password === data.password) {
                    resolve(true);
                }else {
                    resolve(false);
                }
            }
            
        }catch(error) {
            console.error("Error - -> " + error)
        }
    })
}