// import React, { useState } from 'react'
import '../Styles/NewFile.css'
import UserService from '../AuthHandler/user.service';
import { useRef } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewFile = ({ setFile }) => {
    // handle upload file
    const fileInputRef = useRef();
    const onFileChangeHandler = (event) => {
        event.preventDefault();
        var file;
        if (event.target.files[0]) {
            file = event.target.files[0];
        }
        const formData = new FormData();
        formData.append('file', file);
        console.log(formData);
        UserService.uploadFile(formData)
            .then(res => {
                console.log(res.data);
                if (res.data.message !== "Upload successful!\n") {
                    toast(res.data.message, {
                        toastId: 'upload-success',
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                    });
                } else {
                    UserService.getListFile().then(res => {
                        setFile(res);
                        toast('Đã tải xong 1 mục lên', {
                            toastId: 'upload-success',
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: false,
                            progress: undefined,
                        });
                    })
                }
            })
        reset()
    };

    const reset = () => {
        fileInputRef.current.value = "";
    };
    
    return (
        <div className="newFile">
            <div className="newFile__container" onClick={() => fileInputRef.current.click()}>
                {/* Plus */}
                <div className="AddIcon"></div>
                <p className="AddIcon__text">Mới</p>
                {/* <input type="file" className="form-control" name="file" onChange={onFileChangeHandler}/> */}
                <input onChange={onFileChangeHandler} multiple={false} ref={fileInputRef} type="file" hidden name="file" />
            </div>

        </div>
    )
}

export default NewFile
