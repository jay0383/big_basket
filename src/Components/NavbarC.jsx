import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NavbarC = () => {
    return (
        <Navbar bg='success' className='text-light'>
            <Navbar.Brand className='ms-5 text-white fs-4 fw-semibold'><i className="bi bi-cart3 me-2"></i>Big Basket</Navbar.Brand>
            <Navbar.Text >
                <Link to="/" className='text-white mx-2' style={{ textDecoration: "none" }}>Home</Link>
                <Link to="/Product" className='text-white mx-2' style={{ textDecoration: "none" }}>Product</Link>
            </Navbar.Text>
            <Navbar.Collapse className="justify-content-end me-5">
                <Navbar.Text >
                    <Link to="/Admin" className='text-white mx-2' style={{ textDecoration: "none" }}>Admin</Link>
                    <Link to="/Login" className='text-white mx-2' style={{ textDecoration: "none" }}>Login</Link>
                </Navbar.Text>
                {/* <Link to="/Detail">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvgBWbSH3w-xh3MDUV9ARmjVGaYr5SqRC6fg&usqp=CAU' className='border rounded-circle mx-2' height={"30px"} />
                </Link> */}
            </Navbar.Collapse>
        </Navbar >
    )
}

export default NavbarC
