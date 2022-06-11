import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {todoAdded, todoEdit, todoChange} from '../components/badges'

export default function ToDoADD() {
    const [serviceState, setServiceState] = useState('')
    const [priceState, setPriceState] = useState(0)
    const dispatch = useDispatch();
    const todoEditID = useSelector((store) => store.todosStore.edit)
    const todos = useSelector((store) => store.todosStore.todos)

    useEffect(() => {
        if (todoEditID === 0) {
            return
        }
        const todo = todos.find((e) => e.id === todoEditID)
        setServiceState(todo.text)
        setPriceState(todo.price)

    }, [todoEditID])


    const onSave = (e) => {
        e.preventDefault()
        const payload = {text: serviceState, price: priceState, id: todoEditID}
        dispatch(todoEditID === 0 ? todoAdded(payload) : todoChange(payload))
        if (todoEditID !== 0) {
            dispatch(todoEdit({id: 0}))
        }
        setServiceState('')
        setPriceState(0)
    }

    const onCancel = (e) => {
        e.preventDefault()
        dispatch(todoEdit({id: 0}))
        setServiceState('')
        setPriceState(0)
    }

    return (
        <>
            <form>
                <input value={serviceState} type={'text'} name={'service_input'}
                       onChange={(e) => setServiceState(e.target.value)}/>
                <input value={priceState} type={'text'} name={'price_input'}
                       onChange={(e) => setPriceState(Number(e.target.value))}/>
                <button onClick={onSave}>Save</button>
                {todoEditID !== 0 && <button onClick={onCancel}>Cancel</button>}
            </form>
        </>
    )
}