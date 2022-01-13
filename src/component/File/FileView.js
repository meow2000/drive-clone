import React, { Component } from 'react';
import '../CSS/FilesView.css';
import { ContextMenuComponent } from '@syncfusion/ej2-react-navigations';

import FileItem from './FileItem'
import FileCard from './FileCard'
import FileDownload from '../fileDownload/FileDownload';
import '../CSS/ContextMenuComponent.css';

export default class FileView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            files: props.fileList.data,
            item: [],
            reload: false
        };
    }
    // const[files, setFiles] = useState(props.fileList.data);
    // const items = [];
    refreshPage = () => {
        this.setState(
            { reload: true },
            () => this.setState({ reload: false })
        )
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ files: nextProps.fileList.data });
    }

    render() {
        const { files } = this.state;
        return (
            <div className='fileView' >
                <div className="fileView__header">
                    <div className="fileView__header__left-container">
                        <div className="header__folderTree">My Drive</div>
                    </div>
                    <div className="fileView__header__right-container"></div>
                </div>
                {/* <div className="fileView__row">
                {
                    <FileCard />
                    files.slice(0, 5).map(({ id, item }) => (
                        <FileCard name={item.caption} />
                    ))

                }
                <div>
                    Chi tiết file được chọn và download button
                    <FileDownload />
                </div>
            </div> */}
                <div className="content-wrapper" >

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
                        files.map(item => (
                            <FileItem key={item.id} id={item.id} caption={item.name} timestamp={item.updatedTime} size={item.size} />
                        ))
                    }
                    {/* <ContextMenuComponent target="#fileItem" items={menuItems} /> */}
                </div >
            </div >
        )
    }
}

// export default FilesView
