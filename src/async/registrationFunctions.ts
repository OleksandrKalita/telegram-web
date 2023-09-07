import { NewUserProps, PrivateDataProps, RegistrationDataProps } from "../types/authenticationTypes";
import { openDatabase } from "./openDatabase";


export function RegistrationNewUser(data: RegistrationDataProps) {
    RegUserRequest(data);
    RegPrivatDataRequest(data);
}
async function RegUserRequest(data: RegistrationDataProps): Promise<any> {
    try{
        const db = await openDatabase()
        const transaction = db.transaction("Users", "readwrite");
        const store = transaction.objectStore("Users");

        const newUser: NewUserProps = {
            UserId: data.userId,
            FirstName: undefined,
            LastName: undefined,
            Username: undefined,
            Email: data.email,
            Bio: undefined,
            Avatar: "../../img/anonymous_image.webp",
            Theme: "dark",
            Language: "English",
        }
            
        store.put(newUser)

        transaction.oncomplete = () => {
            db.close();
        }
        transaction.onerror = (error) => {
            console.error("Error - ->" + error);
            db.close()
        }
    }catch(error){
        console.error("Error - ->" + error);
    }
}
async function RegPrivatDataRequest(data: RegistrationDataProps):Promise<any> {
    try{
        const db = await openDatabase();
        const transaction = db.transaction("PrivateData", "readwrite");
        const store = transaction.objectStore("PrivateData");

        const newPrivateObject: PrivateDataProps = { UserId: data.userId, Email: data.email, Password: data.password}
        store.put(newPrivateObject);

        transaction.oncomplete = () => {
            db.close();
        }
        transaction.onerror = (error) => {
            console.error("Error - ->" + error);
            db.close()
        }
    }catch(error) {
        console.error("Error - ->" + error);
    }
}