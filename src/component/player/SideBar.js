import React from 'react'
import '../../cssComponent/SideBar.css'
import SideBarOption from './SideBarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../../DataLayer';


function SideBar() {
    const [{ playlists }, dispatch] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img className="logo_sidebar "src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"></img>

            <SideBarOption Icon={HomeIcon} title="Home"/>
            <SideBarOption Icon={SearchIcon} title="Search"/>
            <SideBarOption Icon={LibraryMusicIcon} title="Your Library"/>

            <br />
            <strong className="sidebar_title">PLAYLIST</strong>
            <hr />

            {playlists?.items?.map((playlist) => (<SideBarOption title={playlist.name}/>))}
            <SideBarOption title="Hip Pop"/>
            <SideBarOption title="Rock"/>
            <SideBarOption title="RnB"/>
        </div>
    )
}

export default SideBar
