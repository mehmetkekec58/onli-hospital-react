import { containUrls } from '../contains/containUrls';
import { containTexts } from '../contains/containTexts';
import { containLocalStorageKey } from "../contains/containLocalStorageKey";
import { getLocalStorage } from "../services/localStorageService";
import { getRolesService } from "../services/rolesService";
import AuthType from "./hookTypes/authType";


function checkRoles(roles: string[], getRoles?: string[]): AuthType {

    if (getRoles !== undefined && getRoles.length > 0) {
        for (let i = 0; i < roles.length; i++) {
            if (getRoles.includes(roles[i])) {
                return { isAuth: true };
            }
        }
    }
    return { isAuth: false, message: containTexts.NOT_AUTHORIZED_TO_VIEW_THIS_PAGE, title:containTexts.YOU_ARE_NOT_AUTHORIZED, redirectUrl: containUrls.HOME_PAGE };
}

export default function useAuth(roles?: string[]): AuthType {

    const token = getLocalStorage(containLocalStorageKey.TOKEN);
    const getRoles: string[] = getRolesService(token)

    if (token) {
        if (roles === undefined || roles === null) {
            return { isAuth: true };
        } else {
            return checkRoles(roles, getRoles)
        }
    } else {
        return { isAuth: false, message: containTexts.MUST_BE_LOGGED_IN_TO_VIEW_THIS_PAGE, title: containTexts.LOGIN, redirectUrl: containUrls.LOGIN };
    }
}