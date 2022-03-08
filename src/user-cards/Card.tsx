import { useState } from "react";
import { motion } from "framer-motion";
import "./Card.css";

function Card(props: { user: any; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const { user, index } = props;
  const skillHashmap = {
    1: "HTML",
    2: "CSS",
    3: "PHP",
    4: "Laravel",
    5: "React.JS",
    6: "Vue.JS",
    7: "Svelte",
    8: "Angular",
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      className='card'
      animate={{
        marginTop: isOpen ? "3em" : "initial",
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      }}>
      <div className='card-header' onClick={handleClick}>
        {`${index + 1}`}
        <p
          style={{
            fontSize: "1.5em",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s",
          }}>
          ^
        </p>
      </div>
      <motion.div
        className='card-body'
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
          display: isOpen ? "grid" : "none",
          transition: { duration: 0.5 },
        }}>
        <div className='personal-info'>
          <h2>Personal Information</h2>
          <div className='personal-body'>
            <h4>First Name:</h4>
            <p>{user.first_name}</p>
          </div>
          <div className='personal-body'>
            <h4>Last Name:</h4>
            <p>{user.last_name}</p>
          </div>
          <div className='personal-body'>
            <h4>Email:</h4>
            <p>{user.email}</p>
          </div>
          <div className='personal-body'>
            <h4>Phone:</h4>
            <p>{user.phone}</p>
          </div>
        </div>
        <div className='skills'>
          <h2>Skillset:</h2>
          {user.skills.map((skill: any) => (
            <div key={skill.id} className='skill'>
              <p className='skill-display'>
                {skillHashmap[skill.id as keyof typeof skillHashmap]}
              </p>
              <p>Years of Experience: {skill.experience}</p>
            </div>
          ))}
        </div>
        <div className='covid-situation'>
          <h2>Covid-19 Situation:</h2>
          <h3>how would you prefer to work?</h3>
          <div className='uneditable-work'>
            <div className='work-radio'>
              <input
                style={{ marginRight: "2em" }}
                checked={user.work_preference === "from_ofice"}
                type='radio'
                value='work'
                onClick={() => {
                  return false;
                }}
              />
              <label>From Sairme Office</label>
            </div>
            <div className='work-radio'>
              <input
                checked={user.work_preference === "from_home"}
                style={{ marginRight: "2em" }}
                type='radio'
                value='work'
                onClick={() => {
                  return false;
                }}
              />
              <label>From Home</label>
            </div>
            <div className='work-radio'>
              <input
                checked={user.work_preference === "hybrid"}
                style={{ marginRight: "2em" }}
                type='radio'
                value='work'
                onClick={() => {
                  return false;
                }}
              />
              <label>Hybrid</label>
            </div>
          </div>
          <h3>Did you have covid 19?</h3>
          <div className='covid-radio'>
            <input
              checked={user.had_covid}
              style={{ marginRight: "2em" }}
              type='radio'
              value='covid'
            />
            <label>Yes</label>
          </div>
          <div className='covid-radio'>
            <input
              checked={!user.had_covid}
              style={{ marginRight: "2em" }}
              type='radio'
              value='covid'
            />
            <label>No</label>
          </div>
          <h3>When did you have covid 19?</h3>
          <input
            //   readOnly={true}
            // disabled={true}
            className='date-input'
            type='date'
            pattern='Date'
            value={user.had_covid_at}
          />
          <h3>Have you been vaccinated?</h3>
          <div className='covid-radio'>
            <input
              checked={user.vaccinated}
              style={{ marginRight: "2em" }}
              type='radio'
              value='vaccinated'
            />
            <label>Yes</label>
          </div>
          <div className='covid-radio'>
            <input
              checked={!user.vaccinated}
              style={{ marginRight: "2em" }}
              type='radio'
              value='vaccinated'
            />
            <label>No</label>
          </div>
          <h3>When did you have covid 19?</h3>
          <input
            //   readOnly={true}
            className='date-input'
            type='date'
            pattern='Date'
            value={user.vaccinated_at}
          />
        </div>
        <div className='insights'>
          <h2>Insights:</h2>
          <h3>Would you attend Devtalks and maybe also organize your own?</h3>
          <div className='devtalk-radio'>
            <input
              checked={user.will_organize_devtalk}
              style={{ marginRight: "2em" }}
              type='radio'
              value='organize'
            />
            <label>Yes</label>
          </div>
          <div className='devtalk-radio'>
            <input
              checked={!user.will_organize_devtalk}
              style={{ marginRight: "2em" }}
              type='radio'
              value='organize'
            />
            <label>No</label>
          </div>
          <h3>What would you speak about at Devtalk?</h3>
          <textarea
            style={{ resize: "none" }}
            value={user.devtalk_topic}
            readOnly
            cols={70}
            rows={10}
          />
          <h3>Tell us somthing special</h3>
          <textarea
            value={user.something_special}
            style={{ resize: "none" }}
            readOnly
            cols={70}
            rows={10}
          />
        </div>
      </motion.div>
      {/* )} */}
    </motion.div>
  );
}

export default Card;
