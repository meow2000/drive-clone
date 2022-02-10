import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../Styles/Header.css";
import userService from '../AuthHandler/user.service';

function SearchPanel(props) {

    const [keyword, setKeyword] = useState("");
    const onChangeKeyword = (e) => {
        setKeyword(e.target.value)
    }

    const handleSearch = () => {
        userService.searchFile(keyword).then(res => {
            props.FileHandler(res.data)
        })
    }

    return (
        <div className="header__searchContainer">
            <div className="header__searchBar">
                <SearchIcon onClick={handleSearch}/>
                <input
                    type="text" placeholder="Tìm trong Drive"
                    name="keyword"
                    value={keyword}
                    onChange={onChangeKeyword} />
                <ExpandMoreIcon />
            </div>
        </div>
    );
}

export default SearchPanel;
