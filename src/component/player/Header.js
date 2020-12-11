import React from 'react'
import '../../cssComponent/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core'
import { useDataLayerValue } from '../../DataLayer';

function Header() {
    const [{ user }, dispatch] = useDataLayerValue();
    return (
        <div className="header">
            <div className="left">
                <SearchIcon />
                <input placeholder="Search for Artist, Song" type="text"/>
            </div>

            <div className="right">
                <Avatar src={user?.images[0]?.url} alt="" />
                <h4>{user?.display_name}</h4>
            </div>

        </div>
    )
}

export default Header
