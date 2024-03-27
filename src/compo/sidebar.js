import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <div className="fullBody">
                {/* Sidebar */}
                <div className="sidebar-body" >
                {/* logo party */}
                    <div className="logo" >
                        <img src={'https://res.cloudinary.com/ddbpxggo7/image/upload/v1693576860/tlu1ok41qzsinms1eaxs.png'} />
                    </div>
                    {/* nav bar */}
                    <div>
                        <ul>
                            <li>
                                <Link to={'/other'} >Dashboard</Link>
                            </li>
                            <li>
                                <Link to={'/basic'} >Carrer</Link>
                            </li>
                            <li>Dashboard</li>
                        </ul>
                    </div>
                </div>
                   {/* main dashbaord */}
            <div>
                    <Outlet/>
            </div>
            </div>
         
        </>
    )
}
export default Sidebar;