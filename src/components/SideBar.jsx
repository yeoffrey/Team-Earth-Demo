/* Side Bar function */

// This component was not used however it could be implemented as a
// navbar to get around the app easier when there is more pages.

export default SideNav = (props) => {
    return(
    <div className="sidenav" style={{width: props.wid}}>
        <h1>Hello</h1>
        <button onClick={props.closeNav}>X</button>
    </div> 
    );
};