import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { containTexts } from "../../contains/containTexts";
import { containUrls } from "../../contains/containUrls";
import AlertDialog from "../components/alert-dialog/AlertDialog";
import useAuth from "../../hooks/useAuth";
import AuthType from "../../hooks/hookTypes/authType";


export default function RequireAuth({ children, roles }: { children: JSX.Element, roles?: string[] }) {

  const auth = useAuth(roles);
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    redirectNavigate(auth.redirectUrl)
    setOpen(false);
  }

  function createAlertDialog(authType: AuthType) {
    if (authType.alertDialog !== undefined) {
      return AlertDialog(authType.alertDialog.title ? authType.alertDialog.title : containTexts.WARNING, authType.alertDialog.message ? authType.alertDialog.message : containTexts.OPERATION_FAILED, containTexts.OK, open, handleClose);
    } else {
      return <Navigate to={authType.redirectUrl ? authType.redirectUrl : containUrls.HOME_PAGE} />;
    }
  }

  function redirectNavigate(url: string | undefined) {
    navigate(url ? url : containUrls.HOME_PAGE)
  }

  if (!auth.isAuth) {
    return createAlertDialog(auth)
  } else {
    return children;
  }
}