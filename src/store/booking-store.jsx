import { createSlice } from '@reduxjs/toolkit'

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    partner:{
      partnerId : 41,
      firstName : "John",
      lastName : "Smith",
      services : ["cleaning", "lawn maintenance", "aged care"],
      rate : 26,
    },
    bookingMeta:{
      userId: 1,
      partnerId: 2,
      date: "10-11-2022",
      timeStart: "07:00",
      timeEnd: "09:00",
      selectedServices: ["cleaning"],
      totalPrice: 25,
      isFinished: null,
      bookingKey: null,
    }
  },
  reducers: {
    updatePartner(state, action) {
      state.partner = action.payload
    },
    updateBookingMeta(state, action) {
      state.bookingMeta = action.payload
    }
  }
})

export const { updatePartner, updateBookingMeta } = bookingSlice.actions
export const bookingPartner = (state) => state.booking.partner
export const bookingMeta = (state) => state.booking

export default bookingSlice.reducer