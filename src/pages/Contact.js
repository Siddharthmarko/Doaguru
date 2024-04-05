import React, { useState } from "react";
import styled from "styled-components";
import Pagination from 'react-bootstrap/Pagination'
import { Button } from "react-bootstrap";
import contactData from "../components/dummyData/contactData";

let numOfRow = 9;
const Contact = () => {
  // store row data
  const [client, setClient]= useState(contactData);
  const [raw, setRaw] =  useState(numOfRow);
  // store sliced data
  const [slicedData, setSlicedData] = useState(client.slice(0, raw));
  // handle select
  const [selectOption, setSelectOption] = useState(5);
  const handleOption = (e) => {
    setSlicedData(client.slice(0, selectOption));
    setSelectOption(e.target.value);
  }
  
const handleSearch = (e) => {
    let value = e.target.value;
    const newData = contactData.filter((data) => {  
          for(let prop in data){
            let str = data[prop].toString();
            if(str.includes(value)){
              return true;
            }
          }
          return false;
    })
    setClient(newData);
    setSlicedData(newData.slice(0, raw));
  }

  const handlePageChange = (index) => {
    let start = (index * raw) - raw;
    let end = (index * raw);
    setSlicedData(client.slice(start, end ));

  }
  return (
    <Dash>
      <div className="container-fluid">
        <div className="userINfo row mt-5 d-flex justify-content-center">
          <div className="col-lg-11 text-center table-height">
          <div className="text-start" >
                <h1>Contacts</h1>
          </div>
          <div>
            <div className="text-end my-3 d-flex gap-4 align-items-center" >
              <div>
            <select className="p-1" value={selectOption} onChange={(e) => handleOption(e)}>
                <option value="10">6</option>
                <option value="10">7</option>
                <option value="15">8</option>
                <option value="20">9</option>
            </select> 

              </div>
              <div>
                <input type="text" className="py-1 px-2"  placeholder="Search table field" onChange={(e) => handleSearch(e)} />
              </div>
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
                slicedData.map((item, index) => (
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
        {client.map((_, index) => {
          if(index > client.length/raw) return;
          return (
            <Pagination.Item
              onClick={() => handlePageChange(index + 1)}
              key={index + 1}
              active={index + 1 === client.activePage}
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
    background-color: coral;
    color: white;
    position: sticky;
    top: 0px;
 }
 .table-height {
    height: 500px;
 }

 td{
    white-space: nowrap;
 }

 
.userINfo{
  height: 340px;
}


  .user_ {
    background: linear-gradient(to top, rgb(165, 162, 248), rgba(98, 182, 225, 0.574));
  }
`;