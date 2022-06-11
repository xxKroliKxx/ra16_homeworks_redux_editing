import './App.css';
import {Provider} from 'react-redux'
import ToDoADD from "./features/TodoADD";
import {store} from './components/store'
import TodoList from "./features/TodoList";

function App() {
    return (
        <Provider store={store}>
            <ToDoADD/>
            <TodoList/>
        </Provider>
    );
}

export default App;
