import {useEffect, useState} from 'react';

/* Information for needed for Spotify API */
const CLIENT_ID = "c02e323203c744a4abbbcf5ad3e6285c"
const REDIRECT_URI = "http://127.0.0.1:5173/"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"


function SpotifyButton() {
    const [token, setToken] = useState("")

    /*Method for getting access token*/
    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
        console.log(token)
        setToken(token)
    }, [])

    /*Method for logout*/
    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    return(
        /* if token exists show log out button, if it does not then show login button */
        !token ? <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
            <button>Log into Spotify</button></a> : <button onClick={logout}>Log out of Spotify</button>
    );
}

export default SpotifyButton;