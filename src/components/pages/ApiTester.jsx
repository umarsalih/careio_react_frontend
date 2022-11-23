import React from 'react'
import {sendRequest} from './../../api'

export default function ApiTester() {
  sendRequest()
  sendRequest({
    url: '/mock-data/1 - partners_all.json',
    method: 'GET'
  })
  return (
    <div>ApiTester</div>

  )
}
