import React from 'react'
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

const index = () => {

    return (
        <div className="sideBar">
            <NewFile/>
            <div className="sideBar__container">
                <SidebarItem arrow icon={(<InsertDriveFileIcon />)} label={'My Drive'} />
                <SidebarItem arrow icon={(<ImportantDevicesIcon />)} label={'Computers'} />
                <SidebarItem icon={(<PeopleAltIcon />)} label={'Shared with me'} />
                <SidebarItem icon={(<QueryBuilderIcon />)} label={'Recent'} />
                <SidebarItem icon={(<StarBorderIcon />)} label={'Starred'} />
                <SidebarItem icon={(<DeleteOutlineIcon />)} label={'Bin'} />
                
                <hr/>
                
                <SidebarItem icon={(<StorageIcon />)} label={'Storage'} />

            </div>
        </div>
    )
}

export default index
