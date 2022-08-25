import { Navigate } from "react-router-dom";
import { containUrls } from "../../contains/containUrls";
import useAuth from "../../hooks/useAuth"

function NotAuth({ children }: { children: JSX.Element }) {
    const auth = useAuth(undefined);
    if (!auth.isAuth) {
        return children
    } else {
        return <Navigate to={containUrls.HOME_PAGE} />
    }
}
export default NotAuth