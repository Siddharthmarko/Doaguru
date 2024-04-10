import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Pagination from 'react-bootstrap/Pagination'
import { Button } from "react-bootstrap";
import contactData from "../components/dummyData/contactData";
// import contactData from "../components/dummyData/contactData";

// let defautlRow = 5;
const Contact = () => {

const  [data, setData] = useState(contactData);
const [defautlRow, setDefaultRow] = useState(5);
const [slicedRow, setSlicedRow] = useState(data.slice(0, defautlRow));
const [changeRow, setChangeRow] = useState(defautlRow);
// console.log(slicedRow)
const handleChangeInp = (e) => {
  let value = e.target.value;
  const searchedData = contactData.filter((item) => {
      for(let prop in item){
        let str = item[prop].toString();
        if(str.includes(value)) {
          // console.log(value);
          return true;
        }
      }
      return false;
  })
  // setDefaultRow();
  setData(searchedData);
  // console.log(data);
  setSlicedRow(searchedData);
}
  const handlePageChange = (idx) => {
    let start = (idx * defautlRow) - defautlRow;
    let end = (idx * defautlRow);
    setSlicedRow(data.slice(start, end));
  }
  const handleChangeRow = (e) => {
        let value = e.target.value;
        setChangeRow(value);
        setDefaultRow(value);
        console.log(changeRow);
        setSlicedRow(data.slice(0, value));
  }

  return (
    <Dash>
      <div className="container-fluid">
         <div className="userINfo row mt-5 d-flex justify-content-center">
          <div className="col-lg-11 text-center table-height">
          <div className="text-start mt-3" >
                <h1>Contact</h1>
          </div>
          <div>
            <div className="text-end my-3" >
              <select className="p-1 mx-3" value={changeRow} onChange={handleChangeRow} >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
              </select>
              <input type="text" onChange={(e) => handleChangeInp(e)} className="py-1 px-2" placeholder="Search table field"  />
            </div>
          </div>
            <table className="table overflow-auto ">
           
            <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone_no</th>
                  <th scope="col">Email_id</th>
                  <th scope="col">Messege</th>
                </tr>
              </thead>
              <tbody className="border">
              {
                slicedRow.map((item, index) => (
                  <tr>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.phone_no}</td>
                    <td>{item.email_id}</td>
                    <td>{item.message}</td>
                  </tr>
                ))
              }
              </tbody>
            </table>
            <div className="d-flex justify-content-center">
            <Pagination className="px-4 ">
            {data.map((_, index) => {
          if(index > data.length/defautlRow) return;
          return (
            <Pagination.Item
              onClick={() => handlePageChange(index + 1)}
              key={index + 1}
              active={index + 1 === data.activePage}
            >
              {index + 1}
            </Pagination.Item>
          );
        })}
      </Pagination>
            </div>
          </div>
        </div>
      </div>
    </Dash>
  );
};

export default Contact;

const Dash = styled.div`
  position: relative;
  width: 100%;
  // background-color: rgb(212, 208, 198);

  thead{
    ${'' /* background-color: coral; */}
    background-color: #F4F2FF;
    ${'' /* color: white; */}
    border: 1px solid #D9D5EC;
    color: #76709A;
    position: sticky;
    top: 0px;
 }

 td{
    white-space: nowrap;
 }
tbody {
  color: #00000099;
}
 
.userINfo{
  height: 340px;
}

  .user_ {
    background: linear-gradient(to top, rgb(165, 162, 248), rgba(98, 182, 225, 0.574));
  }
`;