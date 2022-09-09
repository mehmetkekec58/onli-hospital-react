import { constantsUrl } from '../constants/constantsUrl';
import { constantsText } from '../constants/constantsText';
import { getRolesService } from "../services/rolesService";
import AuthType from "./hookTypes/authType";
import { getToken, tokenValidation } from '../services/tokenService';


function checkRoles(roles: string[], getRoles?: string[]): AuthType {

    if (getRoles !== null && getRoles !== undefined && getRoles.length > 0) {
        for (let i = 0; i < roles.length; i++) {
            if (getRoles.includes(roles[i])) {
                return { isAuth: true };
            }
        }
    }
    return { isAuth: false, redirectUrl: constantsUrl.HOME_PAGE };
}

export default function useAuth(roles?: string[]): AuthType {

    const token = getToken();


    if (token && tokenValidation(token)) {

        const getRoles: string[] | null= getRolesService(token)

        if (roles === null || roles === undefined) {
            return { isAuth: true };
        } else {
            return checkRoles(roles, getRoles)
        }

    } else {
        return { isAuth: false, redirectUrl: constantsUrl.LOGIN, alertDialog: { message: constantsText.MUST_BE_LOGGED_IN_TO_VIEW_THIS_PAGE, title: constantsText.LOGIN } };
    }
}