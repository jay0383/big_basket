import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import NavbarC from './NavbarC';
import action from '../Actions/action';
import { Link } from 'react-router-dom';

const Newproduct = () => {
  let [psno, setPsno] = useState("");
  let [pname, setPname] = useState("");
  let [pcategory, setpcategory] = useState("");
  let [pimg, setPimg] = useState("");
  let [pprice, setPprice] = useState("");
  let [pqty, setPqty] = useState("");

  let dispatch = useDispatch();

  const addProduct = () => {
    if (psno === "" || pname === "" || pcategory === "" || pimg === "" || pprice === "" || pqty === "") {
      console.log("Please Enter All The data");
    }
    else {
      dispatch(action.createProduct({
        sno: Number(psno),
        name: pname,
        category: pcategory,
        imageUrl: pimg,
        price: pprice,
        qty: pqty
      }))
      setPsno("");
      setPname("");
      setpcategory("");
      setPimg("");
      setPprice("");
      setPqty("");
    }
  }
  return (
    <>
      <NavbarC />
      <Container>
        <h1 className="text-success">Create New Product</h1>
        {/* <p className='me-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita dolorum consequatur ipsum alias atque. Veritatis consectetur quam, corrupti odit ipsam reprehenderit expedita, minima culpa ut ducimus ratione nihil vel numquam!</p> */}
        <Form className='border border-dark shadow-lg rounded mb-3' style={{ width: "450px" }}>
          <div className="heading px-3 pt-3 pb-2 text-white rounded-top bg-success">
            <h3>New Product</h3>
          </div>
          <div className="inputs m-3">
            <Form.Group className="my-3" >
              <Form.Control type="text" placeholder="Product Serial Number" value={psno} onChange={(e) => setPsno(e.target.value)} className='px-2 py-1' style={{ border: "2px solid gray" }} required />
            </Form.Group>
            <Form.Group className="my-3" >
              <Form.Control type="text" placeholder="Product Name" value={pname} onChange={(e) => setPname(e.target.value)} className='px-2 py-1' style={{ border: "2px solid gray" }} />
            </Form.Group>
            <Form.Group className="my-3" >
              <Form.Control type="text" placeholder="Product Category" value={pcategory} onChange={(e) => setpcategory(e.target.value)} className='px-2 py-1' style={{ border: "2px solid gray" }} />
            </Form.Group>
            <Form.Group className="my-3" >
              <Form.Control type="text" placeholder="Product Image" value={pimg} onChange={(e) => setPimg(e.target.value)} className='px-2 py-1' style={{ border: "2px solid gray" }} />
            </Form.Group>
            <Form.Group className="my-3" >
              <Form.Control type="text" placeholder="Product Price" value={pprice} onChange={(e) => setPprice(e.target.value)} className='px-2 py-1' style={{ border: "2px solid gray" }} />
            </Form.Group>
            <Form.Group className="my-3" >
              <Form.Control type="text" placeholder="Product Qty" value={pqty} onChange={(e) => setPqty(e.target.value)} className='px-2 py-1' style={{ border: "2px solid gray" }} />
            </Form.Group>
            <Link to="/Product" className='bg-success fw-bold text-white px-4 py-2 rounded' onClick={() => addProduct()} style={{ textDecoration: "none" }}>CREATE</Link>
          </div>
        </Form>
      </Container>
    </>
  )
}

export default Newproduct