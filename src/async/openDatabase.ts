export function openDatabase():Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open("TelegramDB", 2);

        request.onerror = () => {
            reject(request.error);
        }
        request.onsuccess = () => {
            resolve(request.result);
        }
        request.onupgradeneeded = () => {
            const db = request.result;
            const usersStore = db.createObjectStore("Users", {keyPath: "UserId", autoIncrement: true})
            const privateDataStore = db.createObjectStore("PrivateData", {keyPath: "Email", autoIncrement: false})

            usersStore.createIndex("user_id", ["UserId"], {unique: false})
            usersStore.createIndex("user_email", ["Email"], {unique: false})
            usersStore.createIndex("user_name", ["Username"], {unique: false})

            privateDataStore.createIndex("email", ["Email"],{unique: false})
        }
    })
}