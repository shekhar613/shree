import React from 'react';

function FlotingBtn() {
  return (
    <button className='floting_upBtn' onClick={
        ()=>{
            window.scrollTo(1000,0);
       
          }
    }>
      <i className="fa-solid fa-circle-chevron-up"></i>
    </button>
  );
}

export default FlotingBtn;
