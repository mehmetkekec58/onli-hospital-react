export default interface AuthType {
    isAuth: boolean;
    redirectUrl?:string;
    alertDialog?:{
        message:string;
        title:string;
    };
}