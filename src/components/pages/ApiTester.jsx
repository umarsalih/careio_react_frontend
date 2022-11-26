// import React from 'react'
import {sendRequest, createBooking, getBookings} from '../../api'

import React, { useRef, useState, useEffect, Fragment} from 'react';

export default function asyncApiTester() {

  const getData = async () => {
    const res = await sendRequest({
      url: '/mock-data/1 - partners_all.json',
      method: 'GET'
    })
    console.log({res})
  }

  getBookings()
  createBooking()

  getData()

  return (
    <div>ApiTester</div>

  )
}
