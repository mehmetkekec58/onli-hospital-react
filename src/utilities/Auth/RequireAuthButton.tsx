import Tooltip from '@mui/material/Tooltip/Tooltip';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { constantsText } from '../../constants/constantsText';
import { constantsUrl } from '../../constants/constantsUrl';
import State from '../../store/state';
import alertDialog from '../components/alert-dialog/AlertDialog';

interface Props {
  className?: string | undefined;
  title?: string;
  onClick?: () => void;
  children?: any;
  errorMessage?: string;
}

const RequireAuthButton = ({ className, onClick, children, errorMessage, title }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const login = useSelector((state: State) => state.login.login);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false)
    navigate(constantsUrl.LOGIN)
  }
  const handleCloseIcon = () => {
    setOpen(false)
  }
  const handleOpenDialog = () => {
    setOpen(true)
  }

  const auht = login;

  if (auht) {
    return (<Tooltip title={title ? title : ""} placement="right">
      <button onClick={onClick} className={className}>{children}</button>
    </Tooltip>
    )
  } else {
    return (<>
      <Tooltip title={title ? title : ""} placement="right">
        <button onClick={handleOpenDialog} className={className}>{children}</button>
      </Tooltip>
      {alertDialog(constantsText.LOGIN, errorMessage ? errorMessage : constantsText.PLEASE_LOGIN, constantsText.OK, open, handleClose, handleCloseIcon)}
    </>
    )
  }

}

export default RequireAuthButton