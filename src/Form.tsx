import { useState } from "react";
import { motion } from "framer-motion";
import next from "./imgs/next.svg";
import "./Form.css";
import Personalinfo from "./Personalinfo";
import Technical from "./Technical";
import Covid from "./Covid";

function Form() {
  // setting the state for the form
  const [page, setPage] = useState(1);
  const [userData, setUserData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    exp: [],
    covidinfo: {
      work: "",
      contracted: false,
      vaccinated: false,
    },
  });

  // used different states of errors for easier validation
  const [personalError, setPersonalError] = useState<any>({
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const [technicalError, setTechnicalError] = useState<any>({
    skills: "",
    experience: "",
  });

  const [covidError, setCovidError] = useState<any>({
    work: "",
  });

  const validatePersonalInfo = () => {
    const error = {
      name: "",
      lastname: "",
      email: "",
      phone: "",
    };

    if (userData.name.length < 3) {
      error.name = "Name must be at least 3 characters";
    }
    if (userData.lastname.length < 3) {
      error.lastname = "Last name must be at least 3 characters";
    }
    if (userData.email.length < 3) {
      error.email = "Email must be at least 3 characters";
    }
    if (userData.email.includes("@") === false) {
      error.email = "Invalid email";
    }
    if (userData.phone.length < 3) {
      error.phone = "Phone must be at least 3 characters";
    }
    setPersonalError(error);
    return error;
  };

  const validateTechnicalInfo = () => {
    const error = {
      skills: "",
      experience: "",
    };

    if (userData.exp.length === 0) {
      error.skills = "Must select at least 1 skill";
    }
    setTechnicalError(error);
    return error;
  };

  const validateCovidInfo = () => {
    const error = {
      work: "",
    };

    if (userData.covidinfo.work.length < 3) {
      error.work = "Please specify your work preference";
    }

    setCovidError(error);
    return error;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // validating infro based on page
    const validationFunctions = [
      validatePersonalInfo,
      validateTechnicalInfo,
      validateCovidInfo,
    ];
    const validationFunction = validationFunctions[page - 1];
    const error = validationFunction();

    // if there are errors, return
    if (Object.values(error).some((value) => value.length > 0)) return;

    // else we increase the page and reset errors

    setPage(page + 1);
    setPersonalError({
      name: "",
      lastname: "",
      email: "",
      phone: "",
    });
    setTechnicalError({
      skills: "",
      experience: "",
    });
    setCovidError({
      work: "",
    });
  };

  // pages array for easier rendering
  const pages = [
    <Personalinfo
      userData={userData}
      setuserData={setUserData}
      error={personalError}
    />,
    <Technical
      userData={userData}
      setUserData={setUserData}
      setError={setTechnicalError}
      error={technicalError}
    />,
    <Covid userData={userData} setUserData={setUserData} error={covidError} />,
  ];

  // boilerplate text for the form
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

  const formInfoText = [
    "You watch “What? Where? When?” Yeah. Our founders used to play it. That’s where they got a question about a famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. And at that moment, a name for a yet to be born company was inspired - Redberry 😇",
    "As we said, Redberry has been on the field for quite some time now, and we have touched and embraced a variety of programming languages, technologies, philosophies, and frameworks. We are battle-tested in PHP Laravel Stack with Vue.js, refined in React, and allies with Serverside technologies like Docker and Kubernetes, and now we have set foot in the web3 industry.   ",
    "As this infamous pandemic took over the world, we adjusted our working practices so that our employees can be as safe and comfortable as possible. We have a hybrid work environment, so you can either work from home or visit our lovely office on Sairme Street. If it was up to us, we would love you to see us in the office because we think face-to-face communications > Zoom meetings. Both on the fun and productivity scales. ",
    "We were soo much fun before the pandemic started! Parties almost every weekend and lavish employee birthday celebrations! Unfortunately, covid ruined that fun like it did almost everything else in the world. But we try our best to zhuzh it up a bit. For example, we host biweekly Devtalks where our senior and lead developers talk about topics they are passionate about. Previous topics have included Web3, NFT, Laravel 9, Kubernetes, etc. We hold these talks in the office but you can join our Zoom broadcast as well. Feel free to join either as an attendee or a speaker!",
  ];

  return (
    <div className='form'>
      <div className='formbody'>
        <h1 className='form-message'>{formMessages[page - 1]}</h1>
        {pages[page - 1]}
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
            onClick={(e) => {
              page === 4 ? setPage(4) : handleSubmit(e);
              console.log(userData);
            }}>
            <img src={next} alt='next' />
          </button>
        </div>
      </div>
      <div className='forminfo'>
        <h1 className='forminfomessage'>{formInfo[page - 1]}</h1>
        <p className='forminfotext'>{formInfoText[page - 1]}</p>
      </div>
    </div>
  );
}

export default Form;
