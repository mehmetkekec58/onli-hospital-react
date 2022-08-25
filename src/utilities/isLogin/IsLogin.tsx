import useAuth from '../../hooks/useAuth'
import { getRolesService } from '../../services/rolesService';
import { getToken } from '../../services/tokenService';

const IsLogin = () => {
    const token = getToken();
    const auth = useAuth();
    const getRoles = getRolesService(token? token : "12")
    return { isAuth: auth.isAuth, role:getRoles }
}

export default IsLogin