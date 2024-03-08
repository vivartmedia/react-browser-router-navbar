import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const ThirdPageComponent = () => {
    const navigate = useNavigate();
    const handlePageChange = () => {
        navigate('/FourthPageComponent')
    }

  return (
    <div className='d-flex align-items-end flex-column'>
        <h1>Third one again and again third</h1>
        <Button variant="success" onClick={handlePageChange}>but lets go to FOURTH Page</Button>{' '}
      
    </div>
  )
}

export default ThirdPageComponent
