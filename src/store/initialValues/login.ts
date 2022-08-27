import { getToken } from "../../services/tokenService";

export const login: boolean = getToken() ? true :false;