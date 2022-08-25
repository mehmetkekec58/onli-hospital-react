import IsLogin from "../../utilities/isLogin/IsLogin";

export const login: boolean = IsLogin().isAuth ? true :false;