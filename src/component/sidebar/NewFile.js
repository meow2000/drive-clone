import React from 'react'
import '../CSS/NewFile.css'
import ApiService from '../FileHandler/ApiService';

const NewFile = () => {
    // handle upload file
    const onFileChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
            selectedFile: e.target.files[0]
        });
        const formData = new FormData();
        formData.append('file', this.state.selectedFile);
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
                <p></p>
                <input type="file" className="form-control" name="file" onChange={onFileChangeHandler}/>
            </div>
        </div>
    )
}

export default NewFile
