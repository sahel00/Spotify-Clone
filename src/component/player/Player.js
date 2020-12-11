import React from 'react'
import '../../cssComponent/Player.css' 
import Body from './Body'
import SideBar from './SideBar'
import Footer from './Footer'

function Player({ spotify }) {
    return (
        <div>
            <div className="body-player">
                {/*SideBar*/}
                <SideBar />
                
                {/*Body */}
                <Body spotify={spotify}/>
            </div>
            {/*Footer */}
            <Footer />
        </div>
    )
}

export default Player
