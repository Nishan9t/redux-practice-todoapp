import React, { useState } from 'react'
import {Container,Row,Col,Card,ListGroup, Button} from 'react-bootstrap'
import DisplayCount from './DisplayCount'
import { connect } from 'react-redux'
import { deleteTodo } from '../redux/actions/todo'


//todos is todo inside state
const DisplayTodo = ({todos,deleteTodo}) => {


   
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
                                <Button onClick={event=>deleteTodo(todo.id)} variant='danger' size="small">Delete</Button>
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


const mapStateToProps=(state)=>{
    //todoReducer is send by the store 
    // console.log(state.todoReducer)
    return {todos:state.todoReducer}
}

//to call reducer function
const mapDispatchToProps=(dispatch)=>({
    deleteTodo:(id)=>(dispatch(deleteTodo(id)))
})

export default connect(mapStateToProps,mapDispatchToProps)(DisplayTodo)