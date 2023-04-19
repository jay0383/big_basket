import React, { useEffect, useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useHistory, useNavigate } from 'react-router-dom';
import action from '../Actions/action';
import NavbarC from './NavbarC';

const Update = () => {
  let [psno, setPsno] = useState("");
  let [pname, setPname] = useState("");
  let [pcategory, setpcategory] = useState("");
  let [pimg, setPimg] = useState("");
  let [pprice, setPprice] = useState("");
  let [pqty, setPqty] = useState("");

  let { id } = useParams();
  // console.log(id);
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let product = useSelector(data => data.product);
  // useEffect(() => {
  //   setPsno(product.sno);
  //   setPname(product.name);
  //   setpcategory(product.category);
  //   setPimg(product.imageUrl);
  //   setPprice(product.price);
  //   setPqty(product.qty);
  // })
  // console.log(psno, pname, pcategory, pimg, pprice, pqty);

  useEffect(() => {
    dispatch(action.singleProduct(id));
  }, []);
  const updateProduct = () => {
    if (psno === "" || pname === "" || pcategory === "" || pimg === "" || pprice === "" || pqty === "") {
      console.log("Please Enter All The data");
    }
    else {
      dispatch(action.updateProduct({
        sno: Number(psno),
        name: pname,
        category: pcategory,
        imageUrl: pimg,
        price: pprice,
        qty: pqty
      }, id))
      navigate('/Product');
    }
  };
  return (
    <>
      <NavbarC />
      <Container>
        <h1 className="text-success">Update Product</h1>
        {/* <p className='me-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita dolorum consequatur ipsum alias atque. Veritatis consectetur quam, corrupti odit ipsam reprehenderit expedita, minima culpa ut ducimus ratione nihil vel numquam!</p> */}
        <Form className='border border-dark shadow-lg rounded mb-3' style={{ width: "450px" }}>
          <div className="heading px-3 pt-3 pb-2 text-white rounded-top bg-success">
            <h3>Selected Product</h3>
          </div>
          <div className="inputs m-3">
            <Form.Group className="my-3" >
              <Form.Control type="text"
                placeholder="Product Serial Number"
                value={psno || ""}
                onChange={(e) => setPsno(e.target.value)}
                className='px-2 py-1'
                style={{ border: "2px solid gray" }} required />
            </Form.Group>
            <Form.Group className="my-3" >
              <Form.Control type="text"
                placeholder="Product Name"
                value={pname || ""}
                onChange={(e) => setPname(e.target.value)}
                className='px-2 py-1'
                style={{ border: "2px solid gray" }} required />
            </Form.Group>
            <Form.Group className="my-3" >
              <Form.Control
                type="text"
                placeholder="Product Category"
                value={pcategory || ""}
                onChange={(e) => setpcategory(e.target.value)}
                className='px-2 py-1' style={{ border: "2px solid gray" }} required />
            </Form.Group>
            <Form.Group className="my-3" >
              <Form.Control
                type="text"
                placeholder="Product Image"
                value={pimg || ""}
                onChange={(e) => setPimg(e.target.value)}
                className='px-2 py-1' style={{ border: "2px solid gray" }} required />
            </Form.Group>
            <Form.Group className="my-3" >
              <Form.Control
                type="text"
                placeholder="Product Price"
                value={pprice || ""}
                onChange={(e) => setPprice(e.target.value)}
                className='px-2 py-1' style={{ border: "2px solid gray" }} required />
            </Form.Group>
            <Form.Group className="my-3" >
              <Form.Control
                type="text"
                placeholder="Product Qty"
                value={pqty || ""}
                onChange={(e) => setPqty(e.target.value)} className='px-2 py-1' style={{ border: "2px solid gray" }} required />
            </Form.Group>
            <Button
              onClick={() => updateProduct()}> Update
            </Button>
            {/* <Link to="/Product" className='bg-success fw-bold text-white px-4 py-2 rounded' onClick={() => updateProduct()} style={{ textDecoration: "none" }}>UPDATE</Link>; */}
          </div>
        </Form>
      </Container>
    </>
  )
}

export default Update