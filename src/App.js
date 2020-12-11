import React, { useEffect, useState } from 'react'
import './App.css';
import Login from './component/login/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './component/player/Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi()

function App() {
  //Run code base on a given condition
  /*First argoument is an object */
 const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() =>{
    const hash = getTokenFromUrl();
    window.location.hash = "";
    let _token = hash.access_token;

    if(_token){
      spotify.setAccessToken(_token)
      dispatch({
        type: "SET_TOKEN",
        token: _token
      });

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist('37i9dQZEVXcPP9Dy50bBFM').then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response
        })
        
      })
    }
  }, []);
  console.log(token);
  
  return (
    <div className="app">
    { token ?
      (<Player spotify={spotify}/>): 
      (<Login />)
    }
    </div>
  );
}

export default App;
