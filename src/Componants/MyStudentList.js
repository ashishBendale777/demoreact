import React from 'react'
import { Button, Card, Col, Row, Table } from 'react-bootstrap'
import icpy from '../images/ic_py.png'
import icjava from '../images/java.png'
import icjs from '../images/js.png'
import ickt from '../images/kt.png'

const MyStudentList = () => {
    const stdList = [
        {
            stdid: 1,
            stdname: "Ashish",
            stdmarks: 75,
            stdpic: icjs
        },
        {
            stdid: 2,
            stdname: "Pawan",
            stdmarks: 72,
            stdpic: icjava
        },
        {
            stdid: 3,
            stdname: "Sam",
            stdmarks: 85,
            stdpic: ickt
        },
        {
            stdid: 4,
            stdname: "Dhiraj",
            stdmarks: 85,
            stdpic: icpy
        },
        {
            stdid: 4,
            stdname: "Dhiraj",
            stdmarks: 85,
            stdpic: icpy
        },
    ]

    return (
        <div>
            <h3>MyStudentList</h3>
            <div>
                <Table bordered size='sm'>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>MARKS</th>
                    </tr>
                    {
                        stdList.map((student) => {
                            return (
                                <tr>
                                    <td>{student.stdid}</td>
                                    <td>{student.stdname}</td>
                                    <td>{student.stdmarks}</td>
                                </tr>
                            )
                        })
                    }
                </Table>
            </div>
            <div>
                <Row>
                    {
                        stdList.map((std) => {
                            return (
                                <Col sm={12} lg={4} md={6}>
                                    <Card>
                                        <Card.Img className='crdimg' src={std.stdpic} />
                                        <Card.Header>
                                            Student
                                        </Card.Header>
                                        <Card.Body>
                                            <h4>{std.stdid}</h4>
                                            <h4>{std.stdname}</h4>
                                            <h4>{std.stdmarks}</h4>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Button>Details</Button>
                                        </Card.Footer>
                                    </Card>
                                </Col>

                            )
                        })
                    }
                </Row>

            </div>
        </div>
    )
}

export default MyStudentList