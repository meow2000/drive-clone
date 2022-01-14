import React, { Component } from 'react';
import '../CSS/FilesView.css';
import FileItem from './FileItem'
// import FileCard from './FileCard'
import '../CSS/ContextMenuComponent.css';

export default class FileView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            files: props.fileList.data,
            item: [],
            reload: false
        };
        this.setFileForApp = this.setFileForApp.bind(this);
        this.setFileForComponent = this.setFileForComponent.bind(this);
    }
    setFileForComponent(file) {
        this.setState({
            fileList: file
        });
        this.setFileForApp(file)
    }

    setFileForApp(file) {
        console.log(file)
        this.props.FileHandler(file);
    }



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
                    <div className="fileItem-wrapper">
                        {
                            // <FileItem/>
                            files.map(item => (
                                <FileItem key={item.id} id={item.id} caption={item.name} timestamp={item.updatedTime} size={item.size} setFile={this.setFileForComponent} />
                            ))
                        }
                    </div>
                </div >
            </div >
        )
    }
}

// export default FilesView
