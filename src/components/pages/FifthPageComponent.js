import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const FifthPageComponent = () => {
    const navigate = useNavigate();
    const handlePageChange = () => {
        navigate('/')
    }
  return (
    <div className='d-flex align-items-center flex-column'>
        <h1>Fifth and last 5 pakges</h1>
        <Button variant="info" onClick={handlePageChange}>go home now and rest</Button>{' '}
      
    </div>
  )
}

export default FifthPageComponent
