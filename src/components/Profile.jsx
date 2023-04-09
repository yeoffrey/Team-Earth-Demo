/*
This component takes the information from props which represents the user's profile.
It takes a name and a photo, both of which come from the Spotify API.
*/

export default function Profile(props) {
    return (
        <div className="text-center p-6">
            <h1>{props.name}</h1>
            <img className="img-thumbnail" src={props.pic} alt="" />
            {console.log(props.pic)}
        </div>
    );
};