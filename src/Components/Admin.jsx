import React, { useEffect, useState } from 'react'
import { Navbar, Container, Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavbarC from './NavbarC';
import action from '../Actions/action';
const Admin = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(action.fetchProduct());
  }, [dispatch]);

  let product = useSelector(data => data.product);
  // let filteredProduct = product.filter(task =>
  //   task);

  let deleteProduct = (task) => {
    if (window.confirm("Are you sure to delete this task")) {
      dispatch(action.deleteProduct(task.id));
    }
  };
  return (
    <>
      <NavbarC />
      <Container>
        <h1 className="text-success">Product Details</h1>
        {/* <p className='me-2 mb-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita dolorum consequatur ipsum alias atque. Veritatis consectetur quam, corrupti odit ipsam reprehenderit expedita, minima culpa ut ducimus ratione nihil vel numquam!</p> */}
        <Link to="/Newproduct" className="nav-link py-1 px-4 text-white rounded bg-success d-inline-block">
          CREATE NEW
        </Link>
        <Table className='my-3 text-center ' striped>
          <thead className='bg-success text-white'>
            <tr>
              <th>Sno</th>
              <th>Product</th>
              <th>Name</th>
              <th>Category</th>
              <th>price</th>
              <th>Qty</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody striped="true">
            {product.map((data, index) => {
              return (
                <tr className='text-cente fw-bold' key={index} style={{}}>
                  <td className='py-5'>{data.sno}</td>
                  <td className='py-3'><img src={data.imageUrl} alt="Image Not Found" height={100} /> </td>
                  <td className='py-5'>{data.name}</td>
                  <td className='py-5'>{data.category}</td>
                  <td className='py-5'><i className="bi bi-currency-rupee"></i>{data.price}.00</td>
                  <td className='py-5'>{data.qty}kgs</td>
                  <td className='py-5'>
                    <Link to={`/Update/${data.id}`} className="nav-link">
                      <i className="bi bi-pencil-square h3"></i>
                    </Link></td>
                  <td className='py-5'><i className="bi bi-trash3-fill h3" onClick={() => deleteProduct(data)} style={{ cursor: "pointer" }}></i></td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Container >
    </>
  )
}

export default Admin