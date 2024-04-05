import React, { useState } from "react";

// impor incons
import { LuLayoutDashboard } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { FaAddressCard } from "react-icons/fa";
import { LuContact } from "react-icons/lu";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidebar = () => {
  let [tgl, SetTgl] = useState(true);
  return (
    <>
    <Header className="header" >
        
    </Header>
    <Side>
      <div className={`Sidebar ${tgl ? "active" : ""}`}>
        <div className="mainSidebar w-100 h-100">
          <div className="logo d-flex justify-content-center align-items-center w-100">
            <img
              src="https://doaguru.com/static/media/doagurulogo-removebg.b0126812bbe704a27f8f.webp"
              className="img-fluid w-50 mt-2"
              alt=""
            />
            <i onClick={() => SetTgl((pre) => !pre)}>
              <AiOutlineMenu size={"25px"} color="balck" />
            </i>
          </div>
          <div className="nav d-flex justify-content-ceter flex-column align-items-center gap-1 py-3 mt-2">
            <Link to="/" className="Links">
              <LuLayoutDashboard size={"30px"} />
              <span> Dashbaord </span>
            </Link>

            <Link to="/career" className="Links">
              <FaAddressCard size={"30px"} />
              <span> Career </span>
            </Link>

            <Link to="/contact" className="Links">
              <LuContact size={"30px"} />
              <span> Contact </span>
            </Link>

            <Link to="/" className="Links">
              <IoIosLogOut size={"30px"} />
              <span> Logout </span>
            </Link>
          </div>
        </div>
      </div>
    </Side>
    </>);
};

export default Sidebar;

const Header = styled.div`
    top: 0;
    width: 100%;
    position: absolute;
    height: 80px;
    background-color: rebeccapurple;
    z-index: -343;
`

const Side = styled.div`
  z-index: 343;
  background-color: white;
.Sidebar{
  width: 200px;
  position: relative;
  height: 100vh;
  transition: all .4s ease;
  overflow: hidden;
  border-right: 1px solid rgba(0, 0, 0, 0.208);
}
.Links{
  background-color: rgba(85, 85, 85, 0.037);
  width: 100%;
  color: black;
  padding: 9px;
  text-decoration: none;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  border: 1px solid none;
  position: relative;

}
.Links:hover{
  color: white;
  background-color: black;
  transition: all .4s ease-out;
  border-radius: 10px;
}

.Sidebar i{
  position: relative;
  right: -25px;
  top: 5px;
  cursor: pointer;
}

.Sidebar.active i{
  position: relative;
  right: 0;
  top: 8px;
  cursor: pointer;
}

.Links:last-child{
  position: absolute;
  bottom: 10px;
}
.Sidebar.active{
  width: 50px;
}
.Sidebar.active img{
  display: none;
}
.Sidebar.active .Links span{
  display: none;
}

`;