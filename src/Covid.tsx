import React from "react";
import "./Covid.css";

function Covid() {
  const workPreferance = [
    `how would you prefer to work?`,
    ["From Sairme Office", "From Home", "Hybrid"],
  ];
  const contracted = ["Did you contact covid 19? :(", ["Yes", "No"]];

  return (
    <div className='Covid'>
      <div className='work'>
        <h2> how would you prefer to work?</h2>
        <div className='work-preferance'>
          <div className='work-preferance-item'>
            <input
              className='radio'
              type='radio'
              name='work-preferance'
              value='From Sairme Office'
            />
            <label>From Sairme Office</label>
          </div>
          <div className='work-preferance-item'>
            <input
              className='radio'
              type='radio'
              name='work-preferance'
              value='From Home'
            />
            <label>From Home</label>
          </div>
          <div className='work-preferance-item'>
            <input
              className='radio'
              type='radio'
              name='work-preferance'
              value='Hybrid'
            />
            <label>Hybrid</label>
          </div>
        </div>
      </div>
      <div className='contracted'>
        <h2>Did you contact covid 19? :(</h2>
        <div className='contracted-item'>
          <input className='radio' type='radio' name='contracted' value='Yes' />
          <label>Yes</label>
        </div>
        <div className='contracted-item'>
          <input className='radio' type='radio' name='contracted' value='No' />
          <label>No</label>
        </div>
      </div>
    </div>
  );
}

export default Covid;
