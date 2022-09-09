import { Navigate } from "react-router-dom";
import { constantsUrl } from "../../constants/constantsUrl";
import useAuth from "../../hooks/useAuth"

function NotAuth({ children }: { children: JSX.Element }) {
    const auth = useAuth(undefined);
    if (!auth.isAuth) {
        return children
    } else {
        return <Navigate to={constantsUrl.HOME_PAGE} />
    }
}
export default NotAuth