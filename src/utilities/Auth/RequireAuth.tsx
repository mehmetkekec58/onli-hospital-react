import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { containTexts } from "../../contains/containTexts";
import { containUrls } from "../../contains/containUrls";
import AlertDialog from "../components/alert-dialog/AlertDialog";
import useAuth from "../../hooks/useAuth";


export default function RequireAuth({ children, roles }: { children: JSX.Element, roles?: string[] }) {

  const auth = useAuth(roles);
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(auth.redirectUrl? auth.redirectUrl : containUrls.HOME_PAGE)
    setOpen(false);
  }

  if (!auth.isAuth) {
    return AlertDialog(auth.title? auth.title :containTexts.WARNING, auth.message? auth.message : containTexts.OPERATION_FAILED, containTexts.OK, open, handleClose);
  } else{
    return children;
  }
}