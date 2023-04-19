import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import NavbarC from "./NavbarC";

const Detail = () => {
    return (
        <>
            <NavbarC />
            <Container>
                <h1 className="text-success mt-2 mb-3">User Details</h1>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvgBWbSH3w-xh3MDUV9ARmjVGaYr5SqRC6fg&usqp=CAU" />
                    <Card.Body>
                        <Form.Group >
                            <Form.Control type='text' placeholder='First Name' className='border-dark my-2' style={{ width: "190px" }} required></Form.Control>
                        </Form.Group>
                        <Form.Group >
                            <Form.Control type='Email' placeholder='Email' className='border-dark my-2' style={{ width: "190px" }} required></Form.Control>
                        </Form.Group>
                        <Form.Group >
                            <Form.Control type='password' placeholder='First Name' className='border-dark my-2' style={{ width: "190px" }} required></Form.Control>
                        </Form.Group>
                        <Button variant="success">Edit</Button>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};
export default Detail;