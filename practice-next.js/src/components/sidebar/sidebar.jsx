export default function Sidebar() {
    return(
        <div className ="container">
            <div className ="sidenav">
                <div className ="logo">
                    <img src="new-logo.svg" alt="" />
                    {/* <h2> ping pong</h2> */}
                </div>
                <div className ="search_bar">
                    <i className ='bx bx-search' ></i>
                    <input type="text" placeholder="search ..."/>
                    {/* <!-- <input type="search" placeholder="search ..."> --> */}
                </div>
                <div className ="icon_items">
                    <ul>
                        <li> 
                            <i className ='bx bxs-home'></i>
                            <img src="Vector.svg" alt="" />
                            {/* <a href="#">frfgerg</a> */}
                        </li>
                        <li>
                            <i className ='bx bxs-user' ></i>
                            {/* <a href="#"></a> */}
                        </li>
                        <li> 
                            <i className ='bx bxs-group' ></i>
                            {/* <a href="#"></a> */}
                        </li>
                        <li>
                            <i className ='bx bxs-message-rounded-dots'></i>
                            {/* <a href="#"></a> */}
                        </li>
                        <li> 
                            {/* <!-- gear --> */}
                            <i className ='bx bxs-cog' ></i>
                            {/* <a href="#"></a> */}
                        </li>
                        <li>
                            <i className ='bx bx-log-out'></i>
                            {/* <a href="#"></a> */}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    ); 
}