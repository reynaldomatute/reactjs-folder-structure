import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Services/Reducers/counterReducerWithoutAction'
import CounterWithAction from '../Services/Reducers/CounterReducer'

export default configureStore({
  reducer: {
    counter: counterReducer,
    counterwithaction: CounterWithAction
  },
})