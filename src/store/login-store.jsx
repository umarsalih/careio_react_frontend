import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: true
  },
  reducers: {
    toggleLogin(state){
        state.isLoggedIn = !state.isLoggedIn
    },

    todoAdded(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    },
    todoToggled(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      todo.completed = !todo.completed
    }
  }
})
export const isLoggedIn = (state) => state.login.isLoggedIn
export const { toggleLogin, todoAdded, todoToggled } = loginSlice.actions
export default loginSlice.reducer