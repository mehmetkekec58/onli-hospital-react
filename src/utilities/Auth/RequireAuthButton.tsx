import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { containTexts } from '../../contains/containTexts';
import { containUrls } from '../../contains/containUrls';
import { getToken } from '../../services/tokenService';
import State from '../../store/state';
import alertDialog from '../components/alert-dialog/AlertDialog';

interface Props {
  className?: string | undefined;
  onClick?: () => void;
  children?: any;
  errorMessage?: string;
}

const RequireAuthButton = ({ className, onClick, children, errorMessage }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const login = useSelector((state: State) => state.login.login);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false)
    navigate(containUrls.LOGIN)
  }
  const handleCloseIcon = () => {
    setOpen(false)
  }
  const handleOpenDialog = () => {
    setOpen(true)
  }

  const auht = login;

  if (auht) {
    return (
      <button onClick={onClick} className={className}>{children}</button>
    )
  } else {
    return (<div>
      <button onClick={handleOpenDialog} className={className}>{children}</button>
      {alertDialog(containTexts.LOGIN, errorMessage ? errorMessage : containTexts.PLEASE_LOGIN, containTexts.OK, open, handleClose, handleCloseIcon)}
    </div>
    )
  }

}

export default RequireAuthButton