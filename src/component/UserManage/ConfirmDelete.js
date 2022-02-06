import React, { useState } from 'react';
import { injectStyle } from "react-toastify/dist/inject-style";
import { Button, Modal } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import AdminService from '../AuthHandler/admin.service';
function ConfirmDelete(props) {
    const [show, setShow] = useState(false);
    if (typeof window !== "undefined") {
        injectStyle();
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = () => {
        debugger
        AdminService.deleteUser(props.id).then(res => {
            AdminService.getListUser().then((response) => {
                response.json().then(data => ({
                    data: data,
                    status: response.status
                })).then(res => {
                    toast.dark('Đã xóa thành công', {
                        toastId: 'admin-delete-success',
                        position: "bottom-left",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                    });
                    props.setData(res.data)
                })
            })
        })
        setShow(false)
    }
    return (
        <>
            <Button variant="danger" onClick={handleShow}>Delete</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete this user ?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default ConfirmDelete;
