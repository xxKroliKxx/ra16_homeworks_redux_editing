import {useSelector} from "react-redux";
import TodoListItem from "./TodoListItem";


export default function TodoList() {
    const todos = useSelector((store) => store.todosStore.todos)
    const renderedListItems = todos.map((todo) => {
        return <TodoListItem key={todo.id} todo={todo}/>
    })

    return (renderedListItems)
}