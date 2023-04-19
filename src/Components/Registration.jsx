import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavbarC from './NavbarC';
import action from '../Actions/action';
import { useDispatch } from 'react-redux';

const Registration = () => {

  let [rname, setRname] = useState("");
  let [rlname, setRlname] = useState("");
  let [email,setEmail]=useState("");
  let [pass,setPass]=useState("");
  let [image,setImage]=useState("");

  let dispatch = useDispatch();

  let concat = rname.concat(' ',rlname)

  const addUser = () => {
    if (rname === "" || rlname === "" || email === "" || pass === "" || image === "") {
      console.log("Please Enter All The data");
    }
    else {
      console.log(concat);
      dispatch(action.createUser({
        name: concat,
        email:email,
        password: pass,
        Image: image,
      }))
      setRname("");
      setRlname("");
      setEmail("");
      setPass("");
      setImage("");
    }
  }

  return (
    <>
      <NavbarC />
      <Container>
        <div className="d-flex justify-content-center align-items-center my-2" style={{ height: "90vh" }}>
          <Form className='bg-light rounded p-4 shadow-lg border border-dark' style={{ width: "450px" }}>
            <div className="text-bg-success rounded-3">
              <h1 className='text-center mb-4 p-2'>Registration</h1>
            </div>
            <div className="d-flex justify-content-between">
              <Form.Group >
                <Form.Control type='text' placeholder='First Name' value={rname} onChange={(e) => setRname(e.target.value)} className='border-dark' style={{ width: "190px" }} required></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control type='text' placeholder='Last Name'  value={rlname} onChange={(e) => setRlname(e.target.value)} className='border-dark' style={{ width: "190px" }} required></Form.Control>
              </Form.Group>
            </div>
            <Form.Group className="my-3">
              <Form.Control type='Email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='border-dark' required></Form.Control>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Control type='password' placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)} className='border-dark' required></Form.Control>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Control type='text' placeholder='Image URL' value={image} onChange={(e) => setImage(e.target.value)} className='border-dark' required></Form.Control>
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="success" className='fw-bold my-3 rounded py-1 px-5' onClick={() => addUser()}>Registration</Button>
            </div>
            {/* <h6 className='text-center'><u className='h6'>OR</u></h6>
                        <div className="social-icon d-flex justify-content-evenly h3">
                            <div className="facebook"><a href="https://www.facebook.com/login/"
                                style={{ textDecoration: "none" }}> <i className="bi bi-facebook"></i></a></div>
                            <div className="twitter"><a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" style={{ textDecoration: "none" }}> <i className="bi bi-twitter"></i></a></div>
                            <div className="google"><a href="https://accounts.google.com/v3/signin/identifier?dsh=S738910966%3A1675503982764690&authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F&ec=GAlAwAE&hl=en_GB&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession"
                                style={{ textDecoration: "none" }}><i className="bi bi-google"></i></a></div>
                        </div> */}
            <Link to="/Login" className="nav-link text-center text-success">
              <u className='fw-semibold' style={{ textDecoration: "none" }}>Already have an account?</u>
            </Link>
          </Form>
        </div>
      </Container>
    </>
  )
}

export default Registration