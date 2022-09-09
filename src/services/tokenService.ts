import { constantsLocalStorageKey } from '../constants/constantsLocalStorageKey';
import { deleteLocalStorage, getLocalStorage, setLocalStorage } from "./localStorageService";

const tokenKey = constantsLocalStorageKey.TOKEN

export function getToken(): string | undefined | null {
    return getLocalStorage(tokenKey)
}

export function deleteToken() {
    deleteLocalStorage(tokenKey)
}

export function setToken(token: string) {
    setLocalStorage(tokenKey, token);
}

export function tokenValidation(token?: string): boolean {
        return tokenExpiration();
 
}
export function tokenExpiration(): boolean {
    return true;
}
