import React, { useState, useEffect } from 'react';
import '../CSS/FilesView.css';

import FileItem from './FileItem'
import FileCard from './FileCard'
import FileDownload from '../fileDownload/FileDownload';

const FilesView = (props) => {
    const [files, setFiles] = useState(props.fileList.data);
    const items = [];
    return (
        <div className='fileView'>
            <div className="fileView__row">
                {
                    <FileCard />
                    
                /* {
                    files.slice(0, 5).map(({ id, item }) => (
                        <FileCard name={item.caption} />
                    ))

                } */}
                <div>
                    Chi tiết file được chọn và download button
                    <FileDownload />
                </div>
            </div>
            <div className="fileView__titles">
                <div className="fileView__titles--left">
                    <p>Name</p>
                </div>
                <div className="fileView__titles--right">
                    <p>File owner</p>
                    <p>Last modified</p>
                    <p>File size</p>
                </div>
            </div>
            {
                // <FileItem/>
                files.map( item => (
                    <FileItem key={item.id} caption={item.name} timestamp={item.updatedTime} size={item.size} />
                ))
            }
        </div>
    )
}

export default FilesView
