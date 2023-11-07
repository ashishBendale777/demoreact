import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navi = useNavigate()

    return (
        <div>
            <Container>
                <Form>
                    <Row>
                        <Col>
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type='text' placeholder="Enter User Name" />
                        </Col>
                        <Col>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder="Enter Password" />
                        </Col>
                    </Row>
                    <Button onClick={() => {
                        navi('/app')
                    }}>Login</Button>
                </Form>
            </Container>
        </div>
    )
}

export default Login