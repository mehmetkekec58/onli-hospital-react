export default interface AuthType {
    isAuth: boolean;
    message?: string;
    title?: string;
    redirectUrl?:string;
}