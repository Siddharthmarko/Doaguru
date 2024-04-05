import React, { useState } from "react";

const Login = ({SetAuth}) => {
  let [user,SetUser] = useState({
    email:"",
    password:""
  })
  let userHand = e=>{
    let name = e.target.name
    let password = e.target.value
    SetUser(pre=>{
      return {...pre,[name]:password}
    })
  }

  let submitHan = e=>{
    e.preventDefault()
  }
  
  return (
    <div className="Login">
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <form onClick={e=>submitHan(e)} className=" d-flex justify-content-center align-items-center">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div
                  id="card"
                  className="text-white bg-dark"
                  style={{ borderRadius: "1rem" }}
                >
                  <div className="card-body p-5 text-center">
                    <div className="mb-md-5 mt-md-4 pb-5 d-flex flex-column gap-2">
                      <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                      <div className="form-outline form-white mb-4 d-flex flex-column align-items-start">
                        <label className="form-label" for="typeEmailX">
                          <h5>Email</h5>
                        </label>
                        <input 
                        onInput={e=>userHand(e)}
                        name="email"
                          type="email"
                          id="typeEmailX"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div className="form-outline form-white mb-4 d-flex flex-column align-items-start">
                        <label className="form-label" for="typePasswordX">
                          <h5>Password</h5>
                        </label>
                        <input 
                        onInput={e=>userHand(e)}
                        name="password"
                          type="password"
                          id="typePasswordX"
                          className="form-control form-control-lg"
                        />
                      </div>
                      <div>
                        <button onClick={()=>SetAuth(false)}
                          className="btn btn-outline-light btn-lg px-5"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
