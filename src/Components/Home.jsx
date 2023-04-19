import React from 'react'
import NavbarC from './NavbarC';
import './Home.css';

const Home = () => {
    return (
        <>
            <NavbarC />
            <div className="bg-image"></div>

            <div className="container">
                <div className="homePage position-absolute top-50 start-50 translate-middle text-center text-white">
                    <div className="font-text d-flex justify-content-center">
                    <i className="bi bi-cart3 me-2 fs-2"></i>
                        <h1 className="">Big Basket</h1>
                    </div>
                    <div className="d-text mt-3">
                        <p className="fw-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eos odit dolor laboriosam, aut aliquid sed eaque nam culpa reprehenderit architecto assumenda vero sint amet quam accusamus laborum. Necessitatibus, deleniti!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home