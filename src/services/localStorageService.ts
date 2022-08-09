export function setLocalStorage(key: string, data: any) {
    try {
        localStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
        console.log(error);
    }
}

export function getLocalStorage(key: string): any {
    try {
        const data = localStorage.getItem(key);

        if (data) {
            return JSON.parse(data);
        } else {
            return null;
        }

    } catch (error) {
        console.log(error);
    }
}

export function deleteLocalStorage(key: string) {
    try {
        localStorage.removeItem(key)
    } catch (error) {
        console.log(error);
    }
}