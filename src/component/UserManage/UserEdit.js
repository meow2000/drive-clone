import React, { useRef, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import AdminService from '../AuthHandler/admin.service';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
function UserEdit({ isOpen, handleCloseForm, id, setData }) {
    const textFieldRef = useRef();
    const [planId, setPlan] = useState('');
    const handleChange = (e) => {
        setPlan(e.target.value);
    }

    const handleForm = async () => {
        if (planId) {
            await AdminService.changePlan(planId, id).then(res => {
                console.log(res)
            })
            AdminService.getListUser().then((response) => {
                response.json().then(data => ({
                    data: data,
                    status: response.status
                })).then(res => {
                    toast.success('Đã xóa thành công', {
                        toastId: 'admin-edit-success',
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                    });
                    setData(res.data)
                })
            })
            handleCloseForm()
        }
    }

    return (
        <div>
            <Dialog open={isOpen} onClose={handleCloseForm}>
                <DialogTitle>Sửa gói</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        inputRef={textFieldRef}
                        margin="dense"
                        id="plan"
                        label="Id gói"
                        fullWidth
                        variant="standard"
                        value={planId}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleForm}>Xong</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default UserEdit;
