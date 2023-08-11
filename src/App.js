
import { Container } from 'react-bootstrap';
import './App.css';
import AddTodo from './components/AddTodo';
import DisplayTodo from './components/DisplayTodo';

function App() {
  return (
   <Container className='p-3'>
    <AddTodo/>
    <DisplayTodo/>

   </Container>
  );
}

export default App;
