import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: true,
    user: {
      username: 'username',
      userId: 1,
      firstName: "Bob",
      lastName: "Doe",
      address: "Burnaby",
      phone: "+1 234 567 8900",
      email: "bob@mail.com"
    }
  },
  reducers: {
    toggleLogin(state){
        state.isLoggedIn = !state.isLoggedIn
    },
    setLogin(state, action){
      state.isLoggedIn = action.payload
    },
  }
})
export const isLoggedIn = (state) => state.login.isLoggedIn
export const currentUser = (state) => state.login.user
export const { toggleLogin, setLogin } = loginSlice.actions
export default loginSlice.reducer