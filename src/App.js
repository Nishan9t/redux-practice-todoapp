
import { Container } from 'react-bootstrap';
import './App.css';
import AddTodo from './components/AddTodo';
import DisplayTodo from './components/DisplayTodo';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
       <Container className='p-3'>
        <AddTodo/>
        <DisplayTodo/>

      </Container>
    </Provider>
  
  );
}

export default App;
