import React, { Component } from 'react';
import '../Styles/FilesView.css';
import FileItem from './FileItem'
// import FileCard from './FileCard'
import '../Styles/ContextMenuComponent.css';
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
                        <div className="header__folderTree">{this.props.location}</div>
                    </div>
                    <div className="fileView__header__right-container"></div>
                </div>
                <div className="content-wrapper" >
                    {files ?
                        (
                            <>
                                <div className="row fileView__row">
                                    {/* <div className="fileView__titles--left">
                                    </div> */}
                                    <div className='col-7'>Name</div>
                                    <div className='col'>File owner</div>
                                    <div className='col'>Last modified</div>
                                    <div className='col'>File size</div>
                                </div>
                                <div className="fileItem-wrapper">
                                    {
                                        // <FileItem/>
                                        files.map(item => (
                                            <FileItem key={item.id} id={item.id} uid={item.uid} caption={item.name} timestamp={item.updatedTime} size={item.size} setFile={this.setFileForComponent} location={this.props.location} />
                                        ))
                                    }
                                </div>
                            </>
                        )
                        : (
                            <div></div>
                        )
                    }
                </div >
            </div >
        )
    }
}

// export default FilesView
