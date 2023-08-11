import React, { useState } from 'react'
import {Container,Row,Col,Card,ListGroup} from 'react-bootstrap'
import DisplayCount from './DisplayCount'

const DisplayTodo = () => {

    const [todos,setTodos]=useState([
        {
        title:'first title',
        description:"first desc"
         },
        {
        title:'second title',
        description:"second desc"
         },
        {
        title:'third title',
        description:"third desc"
         }
        ])
  return (
    <Container>
        <Row>
            <Col>
                <Card className='mt-3 shadow-sm'>
                    <Card.Body>
                        <h3> all todos are here</h3>

                        <DisplayCount/>
                        {
                            todos.map((todo,index)=>(

                                <ListGroup.Item key={index}>
                                <h4>{todo.title}</h4>
                                <p>{todo.description}</p>
                                </ListGroup.Item>
                            )

                            )
                        }
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default DisplayTodo