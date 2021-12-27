import React from 'react';
import '../CSS/FileItem.css';
import UserService from '../authHandler/user.service';
import fileDownload from 'js-file-download';

import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const FileItem = ({ id, caption, timestamp, size }) => {
    const formatDate = (timestamp) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(timestamp).toLocaleDateString(undefined, options)
    }
    const fileDate = formatDate(timestamp);
    const getReadableFileSizeString = (fileSizeInBytes) => {
        let i = -1;
        const byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
        do {
            fileSizeInBytes = fileSizeInBytes / 1024;
            i++;
        } while (fileSizeInBytes > 1024);

        return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
    };
    const DownloadOnClick = (event) => {
        event.preventDefault();
        console.log(caption);
        const formData = new FormData();
        formData.append('fileName', caption);
        // fetch('http://localhost:8080/user/downloadFile?fileName=0ohv3srxzb631.jpg', 
        // {
        //     method: "get",
        //     headers: new Headers({
        //     'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjQwNTcyNTkyLCJleHAiOjE2NDExNzczOTJ9.6Ru5a_YiGTT0GGF895WCcugrlNPQ9arTc2vYJRXprKttpcGhTTHiwNT3QDPp67UnLaBmDsXsF6MHvmUubX0wPQ',
        //     })
        // })
        //     .then(response => {
        //         console.log(response);
        //         debugger
        //     });

        UserService.downloadFile(caption).then(response => {
            debugger
            console.log(response);
            // const type = response.headers['content-type'];
            // const blob = new Blob([response.body], { type: type, encoding: 'UTF-8' });
            // const link = document.createElement('a');
            // link.href = window.URL.createObjectURL(blob);
            // link.download = caption;
            // link.click()
        });
    }

    return (
        <div className='fileItem' onClick={DownloadOnClick}>
            <a target="_blank" download>
                <div className="fileItem--left">
                    <InsertDriveFileIcon />
                    <p>{caption}</p>
                </div>
                <div className="fileItem--right">
                    <p>me</p>
                    <p>{fileDate}</p>
                    <p>{getReadableFileSizeString(size)}</p>
                </div>
            </a>
        </div>

    )
}

export default FileItem
