import React from 'react'
import './SendFormStatus.css'
function SendFormStatus({status}) {
  return (
    <p className='status-message'>{status}</p>
  )
}

export default SendFormStatus