import { createStore } from 'redux'
import reducerTodo from "../features/Reducers";

export const store=createStore(reducerTodo);
export type RootState = ReturnType<typeof store.getState>;
export default store