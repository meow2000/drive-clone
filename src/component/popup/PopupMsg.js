import React, { useRef, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FormDialog({ isOpen, handleCloseForm, oid }) {
  const textFieldRef = useRef();
  const [sharedUser, setSharedUser] = useState('');
  const handleSharedUserChange = (e) => {
    setSharedUser(e.target.value);
  }

  const handleSubmitShareForm = () => {
    if (sharedUser) {
      // UserService.shareFile(sharedUser, oid).then(res => {
      //   console.log(res);
      // });
      fetch('http://localhost:8080/user/shareFile?username=' + sharedUser + '&oid=' + oid, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('user')}`
        },
      }).then(res => {
        console.log(res);
      })
    }
    toast.success('Đã chia sẻ thành công', {
      toastId: 'share-success',
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
    });
    handleCloseForm();
  }

  return (
    <div>
      <Dialog open={isOpen} onClose={handleCloseForm}>
        <DialogTitle>Chia sẻ với mọi người</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            inputRef={textFieldRef}
            margin="dense"
            id="ShareName"
            label="Thêm người và nhóm"
            fullWidth
            variant="standard"
            value={sharedUser}
            onChange={handleSharedUserChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmitShareForm}>Xong</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
