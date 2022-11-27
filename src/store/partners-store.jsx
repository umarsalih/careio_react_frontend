import { createSlice } from '@reduxjs/toolkit'

const partnersSlice = createSlice({
  name: 'partners',
  initialState: {
    partners: [

    ]
  },
  reducers: {
    setAllPartners(state, action){
      state.partners = action.payload
    },
  }
})
export const allPartners = (state) => state.partners
export const { setAllPartners } = partnersSlice.actions
export default partnersSlice.reducer