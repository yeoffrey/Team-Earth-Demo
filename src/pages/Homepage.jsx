import { useState, useEffect } from "react";
import axios from "axios";
import BluetoothButton from "../components/BluetoothButton";
import Profile from "../components/Profile";
import Room from "../components/Room";

/* Information for needed for Spotify API */
const CLIENT_ID = "01215731001a401abc7df88bba52c0d6";
const REDIRECT_URI = "https://team-earth-demo-live.onrender.com/";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

export default function Homepage() {
  // --- All of these variables that are useState() will trigger the homepage ---
  // --- to rerender when they change.                                        ---
  
  // This variable contains the spotify token that represents the user.
  const [token, setToken] = useState("");

  // This variable contains an object whicih represents the user's data.
  const [user, setUser] = useState("");

  // This variable contains an object which represents all the playlists pulled from the API.
  const [playlists, setPlaylists] = useState("");

  // This function is called when the user clicks the profile button.
  const getUser = async (e) => {
    e.preventDefault();

    // Axios is just a library for making requests to endpoints.
    const { data } = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(data);
    setUser(data);
  };

  /*Method for getting access token*/
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  /*Method for logout*/
  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  // <form onSubmit={searchArtists}>
  //    <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
  //    <button type={"submit"}>Search</button>
  // </form>

  // this function is called when the user clicks on the room button.
  const handleRoom = async (e) => {
    e.preventDefault();

    const { data } = await axios.get("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        limit: 3,
      }
    });

    console.log(data);
    setPlaylists(data);
  };

  // The render function.
  return (
    <div className="container">
      <h1>Hexisense</h1>
      <p>Spotify IoT automation made easy.</p>
      <div className="text-center mx-auto">{token && <BluetoothButton />}</div>
      <div className="text-center mx-auto p-3">
        {token && (
          <button className="btn btn-primary p-3" onClick={(e) => getUser(e)}>
            Profile
          </button>
        )}
        {user && <Profile name={user.display_name} pic={user.images[0].url} />}
      </div>
      <div className="text-center mx-auto p-3">
        {!token ? (
          <a
            className="btn btn-primary mx-auto"
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login to Spotify
          </a>
        ) : (
          <button className="btn btn-danger" onClick={logout}>
            Log out of Spotify
          </button>
        )}
      </div>
      <div className="text-center mx-auto p-3">
        {token && (
          <button className="btn btn-warning" onClick={(e) => handleRoom(e)}>
            Ubicomp Room
          </button>
        )}
        {playlists && <Room name="Unicomp Room" playlists={playlists.items} />}
      </div>
    </div>
  );
}
