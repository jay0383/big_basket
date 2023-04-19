import React from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavbarC from './NavbarC';
const Login = () => {
    return (
        <>
            <NavbarC />
            <Container>
                <div className="d-flex justify-content-center align-items-center my-2" style={{ height: "90vh" }}>
                    <Form className='bg-light rounded p-4 shadow-lg border border-dark' style={{ width: "300px" }}>
                        <div className="text-bg-success rounded-3">
                            <h1 className='text-center mb-4 p-2'>Login</h1>
                        </div>
                        <Form.Group className="my-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='Email' placeholder='Email' className='border-dark' required></Form.Control>
                        </Form.Group>
                        <Form.Group className="mt-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Password' className='border-dark' required></Form.Control>
                        </Form.Group>
                        <Form.Text className='d-flex justify-content-end'>Forgot Password?</Form.Text>
                        <Button variant="success" className='fw-bold my-3 rounded-pill py-1' style={{ width: "100%" }}>Login</Button>
                        <h6 className='text-center'><u className='h6'>OR</u></h6>
                        <div className="social-icon d-flex justify-content-evenly h3">
                            <div className="facebook"><a href="https://www.facebook.com/login/"
                                style={{ textDecoration: "none", color:"#198754"}}> <i className="bi bi-facebook"></i></a></div>
                            <div className="twitter"><a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" style={{ textDecoration: "none", color:"#198754" }}> <i className="bi bi-twitter"></i></a></div>
                            <div className="google"><a href="https://accounts.google.com/v3/signin/identifier?dsh=S738910966%3A1675503982764690&authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F&ec=GAlAwAE&hl=en_GB&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession"
                                style={{ textDecoration: "none", color:"#198754" }}><i className="bi bi-google"></i></a></div>
                        </div>
                        <Link to="/Registration" className="nav-link text-center text-success reg mt-3">
                            <u className='fw-semibold' style={{ textDecoration: "none"}}>Registration</u>
                        </Link>
                    </Form>
                </div>
            </Container>
        </>
    )
}

export default Login