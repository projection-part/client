import './App.css';
import TodoForm from './components/TodoForm';
import Header from './components/Header';
import Todos from './components/Todos';


function App() {
  return (
    <div className='main'>
     <Header />
     <TodoForm />
     <Todos />
    </div>
  );
}

export default App;
