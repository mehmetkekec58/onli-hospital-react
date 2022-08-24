import { containLocalStorageKey } from './../contains/containLocalStorageKey';
import { deleteLocalStorage, getLocalStorage } from "./localStorageService";

const tokenKey = containLocalStorageKey.TOKEN

export function getToken(): string | undefined {
    return getLocalStorage(tokenKey)
}

export function deleteToken() {
    deleteLocalStorage(tokenKey)
}

export function tokenValidation(token: string): boolean {
    return tokenExpiration();
}
export function tokenExpiration(): boolean {
    return true;
}
