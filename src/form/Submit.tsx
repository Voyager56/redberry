import "./Submit.css";
import { useState } from "react";
import { motion } from "framer-motion";

function Submit({ userData, setPage }: any) {
  const [submited, setSubmited] = useState(false);
  const token = "409e877a-2a8c-45c3-848b-aae4b389365c";
  const data = {
    token: token,
    first_name: userData.name,
    last_name: userData.lastname,
    email: userData.email,
    phone: "+" + userData.phone,
    skills: userData.exp,
    work_preference: {
      work: userData.covidinfo.work,
    },
    had_covid: userData.covidinfo.contracted.yes,
    had_covid_at: userData.covidinfo.contracted.date,
    vaccinated: userData.covidinfo.vaccinated.yes,
    vaccinated_at: userData.covidinfo.vaccinated.date,
    will_organize_devtalk: userData.abtuser.devtalk,
    devtalk_topic: userData.abtuser.devtext,
    something_special: userData.abtuser.special,
  };

  const handleSubmit = async () => {
    const res = await fetch(
      "https://bootcamp-2022.devtest.ge/api/application",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const status = res.status;
    console.log(status);
  };

  return (
    <div className='submition'>
      {submited ? (
        <div className='submit-container'>
          <h1 className='submited'>Thanks for Joining 😊</h1>
        </div>
      ) : (
        <div className='submit-container'>
          <motion.button
            className='submit'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              handleSubmit();
              setSubmited(true);
            }}>
            Submit
          </motion.button>
          <button className='back' onClick={() => setPage(4)}>
            go back
          </button>
        </div>
      )}
    </div>
  );
}

export default Submit;
