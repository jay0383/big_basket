import React, { useEffect, useState } from 'react'
import { Navbar, Container, Card, Row, Col } from 'react-bootstrap';
import NavbarC from './NavbarC';
import action from '../Actions/action'
import { useDispatch, useSelector } from 'react-redux';

const Product = () => {
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(action.fetchProduct());
    }, [dispatch]);

    let product = useSelector(data => data.product);

    return (
        <>
            <NavbarC />
            <Container>
                <h1 className="text-success">Product Page</h1>
                <p className='me-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita dolorum consequatur ipsum alias atque. Veritatis consectetur quam, corrupti odit ipsam reprehenderit expedita, minima culpa ut ducimus ratione nihil vel numquam!</p>
                <Row className='mt-4'>
                    {product.map((data, index) => {
                        return (
                            <Col sm={6} lg={3} key={index} className='my-2' >
                                <Card className='shadow-lg' style={{ width: '17rem' }}>
                                    <Card.Img variant="top" src={data.imageUrl} height={200} className="border-bottom border-2" />
                                    <Card.Body>
                                        <Card.Text className="border border-1 border-dark py-2 px-3 m-0">Name : {data.name}</Card.Text>
                                        <Card.Text className="border border-1 border-dark py-2 px-3 m-0">Category : {data.category}</Card.Text>
                                        <Card.Text className="border border-1 border-dark py-2 px-3 m-0">Price : <i className="bi bi-currency-rupee"></i>{data.price}.00</Card.Text>
                                        <Card.Text className="border border-1 border-dark py-2 px-3 m-0">Qty : {data.qty}Kgs</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}

export default Product