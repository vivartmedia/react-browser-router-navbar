import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const SecondPageComponent = () => {
    const navigate = useNavigate();
    const handlePageChange = () => {
        navigate('/ThirdPageComponent')
    }

  return (
    <div className='d-flex align-items-start flex-column'>
        <h1>Second one here</h1>
        <Button variant="danger" onClick={handlePageChange}>go Third</Button>{' '}
      
    </div>
  )
}

export default SecondPageComponent
