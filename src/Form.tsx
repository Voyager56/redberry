import { useState } from "react";
import { motion } from "framer-motion";
import next from "./imgs/next.svg";
import "./Form.css";

function Form() {
  const [page, setPage] = useState(1);

  const formMessages = [
    "Hey, Rocketeer, what are your coordinates?",
    "Tell us about your skills",
    "Covid Stuff",
    "What about you?",
  ];

  const formInfo = [
    "Redberry Origins",
    "A bit about our battles",
    "Redberry Covid Policies",
    "Redberrian Insights",
  ];

  return (
    <div className='form'>
      <div className='formbody'>
        <h1 className='form-message'>{formMessages[page - 1]}</h1>

        <div className='buttons'>
          <button
            className='prev'
            onClick={() => {
              page === 1 ? setPage(1) : setPage(page - 1);
            }}>
            <img src={next} alt='prev' />
          </button>
          <button
            className='next'
            onClick={() => {
              page === 4 ? setPage(4) : setPage(page + 1);
            }}>
            <img src={next} alt='next' />
          </button>
        </div>
      </div>

      <div className='forminfo'>
        <h1 className='forminfomsg'>{formInfo[page - 1]}</h1>
      </div>
    </div>
  );
}

export default Form;
