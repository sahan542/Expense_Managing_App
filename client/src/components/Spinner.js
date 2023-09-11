import React from 'react';


const Spinner = () => {
  return (
    <>
      <div classname="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span> 
        </div>
      </div>

    </>
  )
}

export default Spinner;