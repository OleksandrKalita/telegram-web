import { NewUserProps, PrivateUserProps, RegistrationProps } from "../types/authenticationTypes";
import { openDatabase } from "./openDatabase";

export function RegistrationNewUser(data: RegistrationProps) {
    RegUserRequest(data.email);
    RegPrivatDataRequest(data);
}
async function RegUserRequest(email: string): Promise<any> {
    try{
        const db = await openDatabase()
        const transaction = db.transaction("Users", "readwrite");
        const store = transaction.objectStore("Users");

        const newUser: NewUserProps = {
            UserId: 1,
            FirstName: undefined,
            LastName: undefined,
            Username: undefined,
            Email: email,
            Bio: undefined,
            Avatar: "../img/starterPhoto.png",
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
async function RegPrivatDataRequest(data: RegistrationProps):Promise<any> {
    try{
        const db = await openDatabase();
        const transaction = db.transaction("PrivateData", "readwrite");
        const store = transaction.objectStore("PrivateData");

        const newPrivateObject: PrivateUserProps = { Email: data.email, Password: data.password}
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