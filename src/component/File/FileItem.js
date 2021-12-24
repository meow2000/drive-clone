import React from 'react';
import '../CSS/FileItem.css';

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

    return (
        <div className='fileItem'>
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
