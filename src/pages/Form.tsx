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
        yes: "",
        date: "",
      },
      vaccinated: {
        yes: "",
        date: "",
      },
    },
    abtuser: {
      devtalk: "",
      devtext: "",
      special: "",
    },
  });

  const [stateErrors, setStateErrors] = useState({
    personal: {
      name: "",
      lastname: "",
      email: "",
      phone: "",
    },
    technical: {
      skills: "",
      experience: "",
    },
    covid: {
      work: "",
      vaxed: "",
      contracted: "",
      contracted_date: "",
      vaccinated_date: "",
    },
    aboutyou: {
      devtalk: "",
      devtalk_topic: "",
      something_special: "",
    },
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
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)) {
      error.email = "Not valid email";
    }
    if (userData.phone.length > 0) {
      if (!userData.phone.startsWith("+995")) {
        error.phone = "Phone number must start with +995";
      } else if (userData.phone.length != 13) {
        error.phone = "Phone must be 12 digits";
      } else if (userData.phone[3] != "5")
        error.phone = "Georgian phone number only";
    }
    setStateErrors({
      ...stateErrors,
      personal: error,
    });
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

    setStateErrors({
      ...stateErrors,
      technical: error,
    });
    return error;
  };

  const validateCovidInfo = () => {
    const error = {
      work: "",
      vaxed: "",
      contracted: "",
      contracted_date: "",
      vaccinated_date: "",
    };

    if (userData.covidinfo.work.length < 3) {
      error.work = "Please specify your work preference";
    }

    if (
      userData.covidinfo.contracted.yes === "yes" &&
      userData.covidinfo.contracted.date.length === 0
    ) {
      error.contracted_date = "Please specify your date of exposure";
    }

    if (
      userData.covidinfo.vaccinated.yes === "yes" &&
      userData.covidinfo.vaccinated.date.length === 0
    ) {
      error.vaccinated_date = "Please specify your date of vaccination";
    }
    if (
      userData.covidinfo.vaccinated.yes === "yes" &&
      new Date() < new Date(userData.covidinfo.vaccinated.date)
    ) {
      error.vaccinated_date = "Date of vaccination cannot be in the future";
    }
    if (
      userData.covidinfo.contracted.yes === "yes" &&
      new Date() < new Date(userData.covidinfo.contracted.date)
    ) {
      error.contracted_date = "Date of exposure cannot be in the future";
    }
    if (userData.covidinfo.contracted.yes.length === 0) {
      error.contracted = "Please specify if you have contracted Covid-19";
    }
    if (userData.covidinfo.vaccinated.yes.length === 0) {
      error.vaxed = "Please specify if you have been vaccinated";
    }

    setStateErrors({
      ...stateErrors,
      covid: error,
    });
    return error;
  };

  const validateUserInfo = () => {
    const error = {
      devtalk: "",
      devtalk_topic: "",
      something_special: "",
    };

    if (userData.abtuser.devtalk === "") {
      error.devtalk = "Please tell us if you'll organize devtalk";
    }
    if (userData.abtuser.special.length < 3) {
      error.something_special = "Please specify your special skills";
    }
    if (userData.abtuser.devtalk === "yes") {
      if (userData.abtuser.devtext.length < 3) {
        error.devtalk_topic = "Please specify your devtalk subject";
      }
    }

    setStateErrors({
      ...stateErrors,
      aboutyou: {
        ...stateErrors.aboutyou,
        ...error,
      },
    });
    return error;
  };

  const validateForm = () => {
    // validating infro based on page
    const validationFunctions = [
      validatePersonalInfo,
      validateTechnicalInfo,
      validateCovidInfo,
      validateUserInfo,
    ];
    const validationFunction = validationFunctions[page - 1];
    return validationFunction();
  };

  const handleSubmit = (e: any, index: number) => {
    e.preventDefault();

    // if there are errors, return
    const errors = validateForm();
    if (Object.values(errors).some((error) => error.length > 0)) return;

    // else we increase the page and reset errors

    setStateErrors({
      personal: {
        name: "",
        lastname: "",
        email: "",
        phone: "",
      },
      technical: {
        skills: "",
        experience: "",
      },
      covid: {
        work: "",
        vaxed: "",
        contracted: "",
        contracted_date: "",
        vaccinated_date: "",
      },
      aboutyou: {
        devtalk: "",
        devtalk_topic: "",
        something_special: "",
      },
    });

    if (index + 1 <= page) return;
    setPage(page + 1);
  };

  // pages array for easier rendering
  const pages = [
    <Personalinfo
      userData={userData}
      setuserData={setUserData}
      setError={setStateErrors}
      errors={stateErrors}
    />,
    <Technical
      userData={userData}
      setUserData={setUserData}
      setError={setStateErrors}
      error={stateErrors}
    />,
    <Covid
      userData={userData}
      setUserData={setUserData}
      error={stateErrors}
      setError={setStateErrors}
    />,
    <Aboutyou
      userData={userData}
      setUserData={setUserData}
      setError={setStateErrors}
      userError={stateErrors}
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
        <div className='form-wrap'>
          <div className='bodywrap'>
            <div className='formbody'>
              <h1 className='form-message'>{formMessages[page - 1]}</h1>
              {pages[page - 1]}
            </div>
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
