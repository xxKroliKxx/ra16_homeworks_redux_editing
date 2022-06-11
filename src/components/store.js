import {configureStore} from '@reduxjs/toolkit'
import todosReducer from './badges'

export const store = configureStore({
    reducer: {
        todosStore: todosReducer,
    }
})