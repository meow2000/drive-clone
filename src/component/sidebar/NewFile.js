import React, {useState} from 'react'
import '../CSS/NewFile.css'
import ApiService from '../FileHandler/ApiService';

const NewFile = () => {
    // handle upload file
    const [file, setFile] = useState(null);
    const onFileChangeHandler = (e) => {
        e.preventDefault();
        debugger
        if(e.target.files[0]) {
            setFile(e.target.files[0]);
        }
        const formData = new FormData();
        formData.append('file', file);
        debugger
        ApiService.upload(formData)
            .then(res => {
                    console.log(res.data);
                    alert("File uploaded successfully.")
            })
    };

    const onClickHandler = (e) => {

    }
    // ---------------------------------------------------
    return (
        <div className="newFile">
            <div className="newFile__container" onClick={onClickHandler}>
                {/* Plus */}
                <div className="AddIcon"></div>
                <p className="AddIcon__text">Mới</p>
                {/* <input type="file" className="form-control" name="file" onChange={onFileChangeHandler}/> */}
            </div>
        </div>
    )
}

export default NewFile
