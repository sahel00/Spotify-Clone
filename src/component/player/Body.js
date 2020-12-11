import React from 'react'
import '../../cssComponent/Body.css'
import { useDataLayerValue } from '../../DataLayer'
import Header from './Header'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow'

function Body( {spotify}) {
    const [{discover_weekly}, discpatch] = useDataLayerValue();
    return (
        <div className="body">
            <Header />

            <div className="body_info">
                <img src={discover_weekly?.images[0].url}></img>
                <div className="info_text" alt="">
                    <strong>PLAYLIST</strong>
                    <h2>{discover_weekly?.name}</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className="body_song">
                <div className="song_icon">
                    <PlayCircleFilledIcon className="body_shuffle"/>
                    <FavoriteIcon fontSize="large"/>
                    <MoreHorizIcon className=""/>
                </div>
                {/*List Of Song */}
                <div className="song_name">
                    {discover_weekly?.tracks.items.map((song) => (<SongRow track={song.track}></SongRow>))}
                </div>
            </div>
        </div>
    )
}

export default Body;
