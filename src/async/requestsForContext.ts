import { openDatabase } from "./openDatabase";


export function getTheme(UserId: string):Promise<"dark"|"light"> {
    return new Promise(async(resolve, reject) => {
        try{
            const db = await openDatabase();
            const transaction = db.transaction("Users", "readwrite");
            const store = transaction.objectStore("Users");

            const ind = store.index("id_IDX");
            const request = ind.get(UserId);

            request.onsuccess = function() {
                if(request.result) {
                    resolve(request.result.Theme);
                }else {
                    resolve("dark");
                }
            }
        }catch(error) {

        }
    })
}