import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
  export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
  }
  
  const BootstrapDialogTitle = (props: DialogTitleProps) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose && (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
              borderRadius:'15px'
            }}
          >
            <CloseIcon />
          </IconButton>
        )}
      </DialogTitle>
    );
  };

export default function alertDialog(title: string, text: string, buttonText: string, open: boolean, handleClose: () => void, handleCloseIcon?: ()=> void) {
    return (
      <BootstrapDialog
        onClose={handleCloseIcon? handleCloseIcon :  handleClose}
        aria-labelledby="customized-dialog-title"
        sx={{borderRadius:'15px'}}
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseIcon? handleCloseIcon :  handleClose}>
          {title}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {text}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            {buttonText}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    )
  }

