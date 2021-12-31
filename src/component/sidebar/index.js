import React, { Component } from 'react'
import NewFile from "../sidebar/NewFile";
import SidebarItem from "../sidebar/Item";
// material UI
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import StorageIcon from '@material-ui/icons/Storage';
// css file
import '../CSS/Sidebar.css';

export default class index extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fileList: ""
        }
        this.setFileShareList = this.setFileShareList.bind(this);
        this.setMyFileList = this.setMyFileList.bind(this);
        this.setFileForApp = this.setFileForApp.bind(this);
        this.setBinFileList = this.setBinFileList.bind(this);
    }

    setBinFileList(file) {
        this.setState({
            fileList: file
        });
        this.setFileForApp(file)
    }

    setMyFileList(file) {
        this.setState({
            fileList: file
        });
        this.setFileForApp(file)
    }

    setFileShareList(file) {
        this.setState({
            fileList: file
        });
        this.setFileForApp(file)
    }

    setFileForApp(file) {
        console.log(file)
        this.props.FileHandler(file);
    }


    render() {
        return (
            <div className="sideBar">
                <NewFile />
                <div className="sideBar__container">
                    <SidebarItem arrow icon={(<InsertDriveFileIcon />)} label={'My Drive'} option={"myFile"} setFile={this.setMyFileList} />
                    <SidebarItem arrow icon={(<ImportantDevicesIcon />)} label={'Computers'} />
                    <SidebarItem icon={(<PeopleAltIcon />)} label={'Shared with me'} option={"shareFile"} setFile={this.setFileShareList} />
                    <SidebarItem icon={(<QueryBuilderIcon />)} label={'Recent'} />
                    <SidebarItem icon={(<StarBorderIcon />)} label={'Starred'} />
                    <SidebarItem icon={(<DeleteOutlineIcon />)} label={'Bin'} option={"bin"} setFile={this.setBinFileList}/>

                    <hr />

                    <SidebarItem icon={(<StorageIcon />)} label={'Storage'} />

                </div>
            </div>
        )
    }
}

// export default index
