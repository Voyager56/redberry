import { useState } from "react";
import next from "../imgs/next.svg";
import "./Form.css";
import Personalinfo from "../form/Personalinfo";
import Technical from "../form/Technical";
import Covid from "../form/Covid";
import Aboutyou from "../form/Aboutyou";
import Submit from "../form/Submit";

function Form() {
  // setting the state for the form
  const [page, setPage] = useState<number>(1);
  const [userData, setUserData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    exp: [],
    covidinfo: {
      work: "",
      contracted: {
        yes: false,
        date: "",
      },
      vaccinated: {
        yes: false,
        date: "",
      },
    },
    abtuser: {
      devtalk: false,
      devtext: "",
      special: "",
    },
  });

  // used different states of errors for easier validation
  const [personalError, setPersonalError] = useState<{
    name: string;
    lastname: string;
    email: string;
    phone: string;
  }>({
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const [technicalError, setTechnicalError] = useState<{
    skills: string;
    experience: string;
  }>({
    skills: "",
    experience: "",
  });

  const [covidError, setCovidError] = useState<{
    work: string;
    condate: string;
    vaxDate: string;
  }>({
    work: "",
    condate: "",
    vaxDate: "",
  });
  const [userErrors, setUserErrors] = useState<{
    devtext: string;
    special: string;
  }>({
    devtext: "",
    special: "",
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
    } else if (userData.email.includes(".") === false) {
      error.email = "Invalid email";
    }
    if (userData.phone.length != 12) {
      error.phone = "Phone must be 9 digits";
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
      condate: "",
      vaxDate: "",
    };

    if (userData.covidinfo.work.length < 3) {
      error.work = "Please specify your work preference";
    }

    if (
      userData.covidinfo.contracted.yes === true &&
      userData.covidinfo.contracted.date.length === 0
    ) {
      error.condate = "Please specify your date of exposure";
    }

    if (
      userData.covidinfo.vaccinated.yes === true &&
      userData.covidinfo.vaccinated.date.length === 0
    ) {
      error.vaxDate = "Please specify your date of vaccination";
    }

    setCovidError(error);
    return error;
  };
  const validateUserInfo = () => {
    const error = {
      devtext: "",
      special: "",
    };

    if (userData.abtuser.devtalk === false) {
      error.devtext = "";
      error.special = "";
      setUserErrors(error);
      return error;
    }
    if (userData.abtuser.devtext.length < 3) {
      error.devtext = "Please specify your development text";
    }
    if (userData.abtuser.special.length < 3) {
      error.special = "Please specify your special skills";
    }
    setUserErrors(error);
    return error;
  };

  const handleSubmit = (e: any, index: number) => {
    e.preventDefault();

    // validating infro based on page
    if (index < page) setPage(index + 1);

    const validationFunctions = [
      validatePersonalInfo,
      validateTechnicalInfo,
      validateCovidInfo,
      validateUserInfo,
    ];
    const validationFunction = validationFunctions[page - 1];
    const error = validationFunction();

    // if there are errors, return
    if (Object.values(error).some((value) => value.length > 0)) return;

    // else we increase the page and reset errors

    setPage(index + 1);
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
      condate: "",
      vaxDate: "",
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
    <Aboutyou
      userData={userData}
      setUserData={setUserData}
      userError={userErrors}
    />,
    <Submit userData={userData} />,
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
      {page === 5 ? (
        <Submit userData={userData} setPage={setPage} />
      ) : (
        <div className='wrap'>
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
              {pages.map((pg, index) => {
                return (
                  <button
                    className='page-button'
                    style={{
                      opacity: index < page ? 1 : 0.5,
                    }}
                    onClick={(e) => {
                      handleSubmit(e, index);
                    }}></button>
                );
              })}
              <button
                className='next'
                onClick={(e) => {
                  page == 5 ? setPage(5) : handleSubmit(e, page);
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
      )}
    </div>
  );
}

export default Form;
