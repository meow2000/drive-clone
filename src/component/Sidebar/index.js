import React, { Component } from 'react'
import NewFile from "./NewFile";
import SidebarItem from "./Item";
// material UI
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
// import StorageIcon from '@material-ui/icons/Storage';
// css file
import '../Styles/Sidebar.css';

export default class index extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fileList: "",
            activeIndex: 0
        }
        // this.setFileShareList = this.setFileShareList.bind(this);
        this.setFileForComponent = this.setFileForComponent.bind(this);
        this.setFileForApp = this.setFileForApp.bind(this);
        this.setLocation = this.setLocation.bind(this);
    }

    // setBinFileList(file) {
    //     this.setState({
    //         fileList: file
    //     });
    //     this.setFileForApp(file)
    // }


    toggleClass(index, e) {
        this.setState({ activeIndex: index });
    };

    setFileForComponent(file) {
        this.setState({
            fileList: file
        });
        this.setFileForApp(file)
    }

    // setFileShareList(file) {
    //     this.setState({
    //         fileList: file
    //     });
    //     this.setFileForApp(file)
    // }

    setFileForApp(file) {
        console.log(file)
        this.props.FileHandler(file);
    }

    setLocation(location) {
        this.props.setLocation(location)
    }

    render() {
        return (
            <div className="sideBar">
                <NewFile setFile={this.setFileForComponent} />
                <div className="sideBar__container">
                    <div className={this.state.activeIndex===0 ? 'active': null}  onClick={this.toggleClass.bind(this, 0)}>
                        <SidebarItem arrow icon={(<InsertDriveFileIcon />)} label={'My Drive'} option={"myFile"} setFile={this.setFileForComponent} setLocation={this.setLocation} />
                    </div>
                    <div>
                        <SidebarItem arrow icon={(<ImportantDevicesIcon />)} label={'Computers'} />
                    </div>
                    <div className={this.state.activeIndex===1 ? 'active': null}  onClick={this.toggleClass.bind(this, 1)}>
                        <SidebarItem icon={(<PeopleAltIcon />)} label={'Shared with me'} option={"shareFile"} setFile={this.setFileForComponent} setLocation={this.setLocation} />
                    </div>
                    <div className={this.state.activeIndex===2 ? 'active': null}  onClick={this.toggleClass.bind(this, 2)}>
                        <SidebarItem icon={(<QueryBuilderIcon />)} label={'Recent'} option={"recent"} setFile={this.setFileForComponent} setLocation={this.setLocation} />

                    </div>
                    <div className={this.state.activeIndex===3 ? 'active': null}  onClick={this.toggleClass.bind(this, 3)}>
                        <SidebarItem icon={(<StarBorderIcon />)} label={'Starred'} option={"star"} setFile={this.setFileForComponent} setLocation={this.setLocation} />
                    </div>
                    <div className={this.state.activeIndex===4 ? 'active': null}  onClick={this.toggleClass.bind(this, 4)}>
                        <SidebarItem icon={(<DeleteOutlineIcon />)} label={'Bin'} option={"bin"} setFile={this.setFileForComponent} setLocation={this.setLocation} />
                    </div>

                    <hr />

                    {/* <SidebarItem icon={(<StorageIcon />)} label={'Storage'} /> */}

                </div>
            </div>
        )
    }
}

// export default index
