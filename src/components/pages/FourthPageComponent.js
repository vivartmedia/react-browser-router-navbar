import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const FourthPageComponent = () => {
    const navigate = useNavigate();
    const handlePageChange = () => {
        navigate('/FifthPageComponent')
    }

  return (
    <div className='d-flex align-items-center flex-column'>
        <h1>hey the is page Four 444</h1>
        <Button variant="warning" onClick={handlePageChange}>go 555</Button>{' '}
      
    </div>
  )
}

export default FourthPageComponent
