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
            const usersStore = db.createObjectStore("Users", {keyPath: "id", autoIncrement: true})
            const privateDataStore = db.createObjectStore("PrivateData", {keyPath: "id", autoIncrement: true})

            usersStore.createIndex("id_IDX", "UserId", {unique: false})
            usersStore.createIndex("email_IDX", "Email", {unique: false})
            usersStore.createIndex("username_IDX", "Username", {unique: false})

            privateDataStore.createIndex("email_IDX", "Email",{unique: false})
        }
    })
}