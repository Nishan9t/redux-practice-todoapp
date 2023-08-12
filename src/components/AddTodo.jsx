
import React, { useState } from 'react';
import {Container,Row,Col,Card,Form,Button} from 'react-bootstrap'
import DisplayCount from './DisplayCount';
import {addTodo} from '../redux/actions/todo'
import { connect } from 'react-redux';

const AddTodo = ({addTodo}) => {


    //binding
    const [todo,setTodo]=useState({
        title:'',
        description:""
    })

    const handleSubmit=(e)=>{
        e.preventDefault()
        //add todo in store
        addTodo(todo)
        console.log(todo);

        //after adding
        setTodo({
            title:"",
            description:""
        })
        
    }


  return (
        <Container>
            <Row>
                <Col md={12}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h3>Add Todo here!!</h3>

                            {/* to show todos count */}
                            <DisplayCount/>

                            {/* form */}
                            <Form onSubmit={handleSubmit}>
                                 {/* title */}
                                <Form.Group>
                                    <Form.Label>Todo Title</Form.Label>
                                    <Form.Control
                                     type="text" 
                                     placeholder="Enter here"
                                        value={todo.title}
                                    onChange={event=>setTodo({...todo,title:event.target.value})}>
                                     </Form.Control>
                                </Form.Group>

                                  {/* description */}
                                  <Form.Group className='mt-3'>
                                    <Form.Label>Todo Description</Form.Label>
                                    <Form.Control as={'textarea'} 
                                    type="text" 
                                    placeholder="Enter here"
                                    value={todo.description}
                                    onChange={event=>setTodo({...todo,description:event.target.value})}>
                                    </Form.Control>
                                </Form.Group>

                                <Container className='text-center mt-3'>
                                    <Button type='submit' variant='primary'>Add Todo</Button>
                                </Container>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
  )
}

//before exporting we have to map the addTodo in our prop to reducer funtion
const mapStateToProps=(state)=>({})

const mapDispatchToProps=(dispatch)=>({
    //addTodo(todo) is action in actions of redux
    addTodo:(todo)=>(dispatch(addTodo(todo)))
})

//connecting react with redux
export default connect(mapStateToProps,mapDispatchToProps)(AddTodo)