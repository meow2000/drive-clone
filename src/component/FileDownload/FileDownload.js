import React from 'react'

const FileDownload = () => {

    const downloadFileData = () => {
        fetch('http://localhost:8080/user/Filedownload')
            .then(response => {
                response.blob().then(blob => {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = 'test.json';
                    a.click();
                });
                //window.location.href = response.url;
        });
    }
    return (
        <div>
            {/* <button >Download</button> */}
        </div>
    )
}

export default FileDownload