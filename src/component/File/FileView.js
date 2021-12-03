import React, { useState, useEffect } from 'react';
import '../CSS/FilesView.css';

import FileItem from './FileItem'
import FileCard from './FileCard'
import FileDownload from '../FileDownload/FileDownload';

const FilesView = () => {
    const [files, setFiles] = useState([])

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
                    <p>Last modified</p>
                    <p>File size</p>
                </div>
            </div>
            {
                <FileItem/>
                // files.map(({ id, item }) => (
                //     <FileItem id="meow" caption="test" timestamp="hôm qua" fileUrl={item.fileUrl} size="nhiều" />
                // ))
            }
        </div>
    )
}

export default FilesView
