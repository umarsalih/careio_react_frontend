import { createSlice } from '@reduxjs/toolkit'

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    partner:{
      partnerId : 41,
      firstName : "John",
      lastName : "Smith",
      services : ["cleaning", "lawn maintenance"],
      rate : 26,
    }
  },
  reducers: {
    updatePartner(state, action) {
      state.partner = action.payload
    }
  }
})

export const { updatePartner } = bookingSlice.actions
export const bookingPartner = (state) => state.booking.partner
export const bookingMeta = (state) => state.booking

export default bookingSlice.reducer