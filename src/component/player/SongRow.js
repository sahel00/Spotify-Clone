import React from 'react'
import '../../cssComponent/SongRow.css'
function SongRow({ track }) {
    return (
        <div className="songRow">
            <img src={track.album.images[0].url} className="album_photo"></img>
            
            <div className="info_song">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {track.album.name}
                </p>
            </div>
            
        </div>
    )
}

export default SongRow
