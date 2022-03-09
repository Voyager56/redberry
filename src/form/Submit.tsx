import "./Submit.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Submit({ userData, setPage }: any) {
  const [submited, setSubmited] = useState(false);
  let navigate = useNavigate();
  const data = {
    token: "32401a85-2695-4abe-88e6-3607e5677ea4",
    first_name: userData.name,
    last_name: userData.lastname,
    email: userData.email,
    phone: userData.phone ? userData.phone : "+00000000000",
    skills: userData.exp,
    work_preference: userData.covidinfo.work,
    had_covid: userData.covidinfo.contracted.yes === "yes" ? true : false,
    had_covid_at:
      // if no covid we set the date to 1970, this will bypass validation but show as empty date when fetched from api
      userData.covidinfo.contracted.date.length > 0
        ? userData.covidinfo.contracted.date
        : "1970/01/01",
    vaccinated: userData.covidinfo.vaccinated.yes === "yes" ? true : false,
    vaccinated_at:
      userData.covidinfo.vaccinated.date.length > 0
        ? userData.covidinfo.vaccinated.date
        : "1970/01/01",
    will_organize_devtalk: userData.abtuser.devtalk === "yes" ? true : false,
    devtalk_topic: userData.abtuser.devtext,
    something_special: userData.abtuser.special,
  };

  if (submited) {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }

  const handleSubmit = async () => {
    try {
      const res = await fetch(
        "https://bootcamp-2022.devtest.ge/api/application",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      ).then((res) => console.log(res.json()));
    } catch (err) {
      console.log(err);
    }
    console.log(data);
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
            whileTap={{
              rotate: [0, 360],
              scale: 0.9,
              transition: {
                duration: 0.1,
                ease: "easeInOut",
              },
            }}
            onClick={() => {
              setTimeout(() => {
                handleSubmit();
                setSubmited(true);
              }, 0.5);
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
