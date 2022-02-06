//import {Label} from '@material-ui/icons'
import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import '../Styles/SidebarItem.css';
// import FileView from '../file/FileView';
import UserService from '../AuthHandler/user.service';
// import { AirlineSeatIndividualSuiteSharp } from '@mui/icons-material';

const SideBarItem = ({ arrow, icon, label, option, setFile, setLocation }) => {


    const _setFile = () => {
        if (option === "shareFile") {
            UserService.listFileShare().then(res => {
                setFile(res);
            });
            setLocation("Shared")
        } else if (option === "myFile") {
            UserService.getListFile().then(res => {
                setFile(res);
            })
            setLocation("My Drive")
        } else if (option === "bin") {
            UserService.listFileBin().then(res => {
                setFile(res);
            })
            setLocation("Bin")
        } else if (option === "recent") {
            UserService.listRecent().then(res => {
                if (res.data) {
                    setFile(res);
                }
            })
            setLocation("Recent")
        } else if (option === "star") {
            UserService.listStar().then(res => {
                setFile(res);
            })
            setLocation("Star")
        }
    }

    return (
        <div className='sideBar__itemContainer' onClick={_setFile}>
            <div className="sidebar__arrow">
                {arrow && (<ArrowRightIcon />)}
            </div>

            <div className="sidebar__item">
                {icon}
                <div className="sidebar__item__text">{label}</div>
            </div>
        </div>
    )
}

export default SideBarItem
