import { Link, Outlet } from "react-router-dom";
import { RiDashboardLine, RiContactsLine, RiLogoutCircleRLine } from "react-icons/ri";
import { SlBriefcase } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Sidebar = () => {
    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu(!menu)
        console.log('clikc')
    }
    return (
        <>
            <div className="fullBody" >
                {
                    menu?<div className="siderMenu" >
                            <AiOutlineMenu  onClick={handleMenu} size={'30px'} />
                        </div>:""
                }
                    
                <div className={`sidebar-body`} style={{transform:`${menu?"translateX(-400px)":"translateX(0px)"}`}} >
                    <div className="sidebar-head" >
                        <div className="logo" >
                            <img src={'https://res.cloudinary.com/ddbpxggo7/image/upload/v1693576860/tlu1ok41qzsinms1eaxs.png'} />
                        </div>
                    <div className="cross" >
                    <RxCross2 size={'30px'}  onClick={handleMenu} />
                    </div>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <RiDashboardLine/>
                                <Link>Dashboard</Link>
                            </li>
                            <li>
                                <SlBriefcase />
                                <Link to={'/career'} >Carrer Page</Link>
                            </li>
                            <li>
                                <RiContactsLine />
                                <Link to={'/contact'} >Contact Page</Link>
                            </li>
                            <li>
                                <RiLogoutCircleRLine  />
                                <Link to={'/contact'} >Log Out</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            <div className="w-100" >
                <Outlet/>
            </div>
            </div>
         
        </>
    )
}
export default Sidebar;