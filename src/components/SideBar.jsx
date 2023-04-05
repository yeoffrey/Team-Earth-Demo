/* Side Bar function */

export default SideNav = (props) => {
    return(
    <div className="sidenav" style={{width: props.wid}}>
        <h1>Hello</h1>
        <button onClick={props.closeNav}>X</button>
    </div> 
    );
};