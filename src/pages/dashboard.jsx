import React from "react";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <Dash>
      <div className="container-fluid">
        <div className="userINfo row mt-5 d-flex justify-content-center">
          <div className="col-lg-11">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Resume</th>
                  <th scope="col">Messege</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="">1</th>
                  <td>Gorbh</td>
                  <td>gorabh@gmail.com</td>
                  <td>link...</td>
                  <td className="w-25">Lorem ipsum... <span className="text-info">See All</span></td>
                </tr>
                <tr>
                  <th scope="row" className="">1</th>
                  <td>Gorbh</td>
                  <td>gorabh@gmail.com</td>
                  <td>link...</td>
                  <td className="w-25">Lorem ipsum... <span className="text-info">See All</span></td>
                </tr>
                <tr>
                  <th scope="row" className="">1</th>
                  <td>Gorbh</td>
                  <td>gorabh@gmail.com</td>
                  <td>link...</td>
                  <td className="w-25">Lorem ipsum... <span className="text-info">See All</span></td>
                </tr>
                <tr>
                  <th scope="row" className="">1</th>
                  <td>Gorbh</td>
                  <td>gorabh@gmail.com</td>
                  <td>link...</td>
                  <td className="w-25">Lorem ipsum... <span className="text-info">See All</span></td>
                </tr>
                <tr>
                  <th scope="row" className="">1</th>
                  <td>Gorbh</td>
                  <td>gorabh@gmail.com</td>
                  <td>link...</td>
                  <td className="w-25">Lorem ipsum... <span className="text-info">See All</span></td>
                </tr>
                <tr>
                  <th scope="row" className="">1</th>
                  <td>Gorbh</td>
                  <td>gorabh@gmail.com</td>
                  <td>link...</td>
                  <td className="w-25">Lorem ipsum... <span className="text-info">See All</span></td>
                </tr>
                <tr>
                  <th scope="row" className="">1</th>
                  <td>Gorbh</td>
                  <td>gorabh@gmail.com</td>
                  <td>link...</td>
                  <td className="w-25">Lorem ipsum... <span className="text-info">See All</span></td>
                </tr>
                <tr>
                  <th scope="row" className="">1</th>
                  <td>Gorbh</td>
                  <td>gorabh@gmail.com</td>
                  <td>link...</td>
                  <td className="w-25">Lorem ipsum... <span className="text-info">See All</span></td>
                </tr>
                <tr>
                  <th scope="row" className="">1</th>
                  <td>Gorbh</td>
                  <td>gorabh@gmail.com</td>
                  <td>link...</td>
                  <td className="w-25">Lorem ipsum... <span className="text-info">See All</span></td>
                </tr>
                <tr>
                  <th scope="row" className="">1</th>
                  <td>Gorbh</td>
                  <td>gorabh@gmail.com</td>
                  <td>link...</td>
                  <td className="w-25">Lorem ipsum... <span className="text-info">See All</span></td>
                </tr>
                <tr>
                  <th scope="row" className="">1</th>
                  <td>Gorbh</td>
                  <td>gorabh@gmail.com</td>
                  <td>link...</td>
                  <td className="w-25">Lorem ipsum... <span className="text-info">See All</span></td>
                </tr>
                <tr>
                  <th scope="row" className="">1</th>
                  <td>Gorbh</td>
                  <td>gorabh@gmail.com</td>
                  <td>link...</td>
                  <td className="w-25">Lorem ipsum... <span className="text-info">See All</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </Dash>
  );
};

export default Dashboard;

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
 
 td{
    white-space: nowrap;
    overflow: hidden;
 }

 
.userINfo{
  height: 340px;
  overflow: auto;
}


  .user_ {
    background: linear-gradient(to top, rgb(165, 162, 248), rgba(98, 182, 225, 0.574));
  }
`;