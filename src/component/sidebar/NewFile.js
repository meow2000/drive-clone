import React, {useState} from 'react'
import '../CSS/NewFile.css'
import ApiService from '../FileHandler/ApiService';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/styles';
import {useRef} from 'react'

function getModalStyle() {
    return {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: "white",
        // backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        // boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),
    },
}));

const NewFile = () => {
    // handle upload file
    const fileInputRef=useRef();
    const classes = useStyles();

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [file, setFile] = React.useState("");
    const [uploading, setUploading] = useState(false)

    const onFileChangeHandler = (event) => {
        event.preventDefault();
        debugger
        if(event.target.files[0]) {
            setFile(event.target.files[0]);
        }
        const formData = new FormData();
        formData.append('file', file);
        debugger
        ApiService.upload(formData)
            .then(res => {
                    console.log(res.data);
                    alert("File uploaded successfully.")
            })
        // setUploading(false)
        // setOpen(false)
        // setFile(null)
    };

    // const onClickHandler = (e) => {
    //     setOpen(true);
    // }

    // const handleClose = () => {
    //     setOpen(false);
    // };

    // const handleChange =(e) => {
    //     e.preventDefault();
    //     debugger
    //     if(e.target.files[0]) {
    //         setFile(e.target.files[0]);
    //     }
    // }
    // ---------------------------------------------------
    return (
        <div className="newFile">
            <div className="newFile__container" onClick={()=>fileInputRef.current.click()}>
                {/* Plus */}
                <div className="AddIcon"></div>
                <p className="AddIcon__text">Mới</p>
                {/* <input type="file" className="form-control" name="file" onChange={onFileChangeHandler}/> */}
                <input onChange={onFileChangeHandler} multiple={false} ref={fileInputRef} type="file"hidden name="file"/>
            </div>

            {/* <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <p>Select files you want to upload!</p>
                    {
                        uploading ? (
                            <p>Uploading...</p>
                        ) : (
                                <>
                                    <input type="file" onChange={handleChange} />
                                    <button onClick={onFileChangeHandler}>Upload</button>
                                </>
                            )
                    }
                </div>
            </Modal> */}
        </div>
    )
}

export default NewFile
