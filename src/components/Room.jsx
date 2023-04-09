/*
This component renders a specific room on the app. It gets passed in prop containing
the playlists associated with the room, and then maps those as HTML.
*/

export default function Room(props) {
  return props.playlists.map((playlist) => (
    <div key={playlist.id}>
      <div className="col text-center p-3">
        <div className="row">
          <img src={playlist.images[0].url} />
        </div>
        <div className="row"><h3>{playlist.name}</h3></div>
      </div>
    </div>
  ));
}
