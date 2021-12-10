import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import "../CSS/Header.css"

const index = () => {
    return (
        <div className='header'>
            <div className="header__logo">
                <img src="//ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png" alt="logo__image" />
                <span>Drive</span>
            </div>
            <div className="header__searchContainer">
                <div className="header__searchBar">
                    <SearchIcon/>
                    <input type="text" placeholder="Tìm trong Drive"/>
                    <ExpandMoreIcon/>
                </div>
            </div>
            <div className="header__icons">
                <span>
                    <HelpOutlineIcon />
                    <SettingsIcon />
                </span>
                <div class="m-user-avatar m-icon"></div>
                {/* setting icon, user avatar, help button */}
            </div>
        </div>
    )
}

export default index
 