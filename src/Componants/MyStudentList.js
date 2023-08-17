import React from 'react'
import { Button, Card, Col, Row, Table } from 'react-bootstrap'


const MyStudentList = () => {
    const stdList = [
        {
            stdid: 1,
            stdname: "Ashish",
            stdmarks: 75
        },
        {
            stdid: 2,
            stdname: "Pawan",
            stdmarks: 72
        },
        {
            stdid: 3,
            stdname: "Sam",
            stdmarks: 85
        },
        {
            stdid: 4,
            stdname: "Dhiraj",
            stdmarks: 85
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
                                <Col>
                                    <Card>
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