import React from 'react'
import '../CSS/FileCard.css'

import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const FileCard = ({ name }) => {
    return (
        <div className='fileCard'>
            <div className="fileCard--top">
                <InsertDriveFileIcon style={{ fontSize: 130 }} />
            </div>

            <div className="fileCard--bottom">
                <p>{name}test.png</p>
            </div>
        </div>
    )
}

export default FileCard
