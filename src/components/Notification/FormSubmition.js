import React from 'react';




function FormSubmition() {
  return (
    <div id='formsubmited' className='my-5 formsubmited container text-center'>
      <i className="fa-regular fa-circle-check"></i>
      <h1>धन्यवाद</h1>
      <button onClick={()=>{
             document.getElementById('formsubmited').style.display='none'
      }}>close</button>
    </div>
  );
}

export default FormSubmition;
