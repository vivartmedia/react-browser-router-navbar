import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const HomePageComponent = () => {
    const navigate = useNavigate();
    const handlePageChange = () => {
        navigate('/SecondPageComponent')
    }
  return (
    
    <div className='d-flex align-items-center flex-column'>
      <h1>Home sweet home</h1>
      <Button variant="secondary" onClick={handlePageChange}>Second one there</Button>{' '}
    </div>
  )
}

export default HomePageComponent
