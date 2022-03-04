import { motion } from "framer-motion";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import Checkbox from "@material-ui/core/Checkbox";
import "./Covid.css";

function Covid({ userData, setUserData, error, setError }: any) {
  const handleChande = (e: any) => {
    setUserData({
      ...userData,
      covidinfo: { ...userData.covidinfo, work: e.target.value },
    });

    // changing error when user checks  the checkbox
    setError({
      ...error,
      covid: {
        ...error.covid,
        work: "",
      },
    });
  };
  return (
    <div className='Covid'>
      <div className='work'>
        <h2> how would you prefer to work?</h2>
        <div className='work-preferance'>
          <div className='work-preferance-item'>
            <Checkbox
              icon={<CircleUnchecked />}
              checkedIcon={<CircleCheckedFilled />}
              checked={userData.covidinfo.work === "From Sairme Office"}
              className='radio'
              name='work-preferance'
              value='From Sairme Office'
              style={{ marginRight: "1rem" }}
              onChange={handleChande}
            />
            <label>From Sairme Office</label>
          </div>
          <div className='work-preferance-item'>
            <Checkbox
              icon={<CircleUnchecked />}
              checkedIcon={<CircleCheckedFilled />}
              checked={userData.covidinfo.work === "From Home"}
              className='radio'
              name='work-preferance'
              value='From Home'
              style={{ marginRight: "1rem" }}
              onChange={handleChande}
            />
            <label>From Home</label>
          </div>
          <div className='work-preferance-item'>
            <Checkbox
              icon={<CircleUnchecked />}
              checkedIcon={<CircleCheckedFilled />}
              checked={userData.covidinfo.work === "Hybrid"}
              className='radio'
              name='work-preferance'
              value='Hybrid'
              style={{ marginRight: "1rem" }}
              onChange={handleChande}
            />
            <label>Hybrid</label>
          </div>
        </div>
        {error.covid.work && <p className='error'>{error.covid.work}</p>}
      </div>
      <div className='contracted'>
        <h2>Did you contact covid 19? :(</h2>
        <div className='contracted-item'>
          <Checkbox
            icon={<CircleUnchecked />}
            checkedIcon={<CircleCheckedFilled />}
            checked={userData.covidinfo.contracted.yes === "yes"}
            className='radio'
            style={{ marginRight: "1rem" }}
            name='contracted'
            value='Yes'
            onChange={(e) => {
              setUserData({
                ...userData,
                covidinfo: {
                  ...userData.covidinfo,
                  contracted: {
                    ...userData.covidinfo.contracted,
                    yes: "yes",
                  },
                },
              });
              setError({
                ...error,
                covid: {
                  ...error.covid,
                  [e.target.name]: "",
                },
              });
            }}
          />
          <label>Yes</label>
        </div>
        <div className='contracted-item'>
          <Checkbox
            icon={<CircleUnchecked />}
            checkedIcon={<CircleCheckedFilled />}
            checked={userData.covidinfo.contracted.yes === "no"}
            className='radio'
            style={{ marginRight: "1rem" }}
            name='contracted'
            value='No'
            onChange={(e) => {
              setUserData({
                ...userData,
                covidinfo: {
                  ...userData.covidinfo,
                  contracted: {
                    ...userData.covidinfo.contracted,
                    yes: "no",
                  },
                },
              });
              setError({
                ...error,
                covid: {
                  ...error.covid,
                  [e.target.name]: "",
                },
              });
            }}
          />

          <label>No</label>
        </div>
        <motion.div
          className='contracted'
          style={{
            height: userData.covidinfo.contracted.yes === "yes" ? "100%" : "0",
            opacity: userData.covidinfo.contracted.yes === "yes" ? 1 : 0,
          }}
          animate={{
            height: userData.covidinfo.contracted.yes === "yes" ? "100%" : "0",
            opacity: userData.covidinfo.contracted.yes === "yes" ? 1 : 0,
            transition: { duration: 0.5 },
          }}>
          <h2>When?</h2>
          <input
            // style={{
            //   border: "2px solid var(--redberry-red)",
            //   borderRadius: "5px",
            //   padding: "10px",
            //   width: "17em",
            // }}
            type='date'
            pattern='Date'
            value={
              userData.covidinfo.contracted.date.length > 0
                ? new Date(userData.covidinfo.contracted.date)
                    .toISOString()
                    .split("T")[0]
                : ""
            }
            onChange={(e) => {
              setUserData({
                ...userData,
                covidinfo: {
                  ...userData.covidinfo,
                  contracted: {
                    ...userData.covidinfo.contracted,
                    date: e.target.value,
                  },
                },
              });
              setError({
                ...error,
                covid: {
                  ...error.covid,
                  contracted_date: "",
                },
              });
            }}
          />
        </motion.div>
        {error.covid.contracted_date && (
          <p className='error'>{error.covid.contracted_date}</p>
        )}
      </div>
      {error.covid.contracted && (
        <p className='error'>{error.covid.contracted}</p>
      )}
      <div className='contracted'>
        <h2>Have you been vaccinated?</h2>
        <div className='contracted-item'>
          <Checkbox
            icon={<CircleUnchecked />}
            checkedIcon={<CircleCheckedFilled />}
            checked={userData.covidinfo.vaccinated.yes === "yes"}
            className='radio'
            style={{ marginRight: "1rem" }}
            name='vaxed'
            value='Yes'
            onChange={(e) => {
              setUserData({
                ...userData,
                covidinfo: {
                  ...userData.covidinfo,
                  vaccinated: {
                    ...userData.covidinfo.vaccinated,
                    yes: "yes",
                  },
                },
              });
              setError({
                ...error,
                covid: {
                  ...error.covid,
                  [e.target.name]: "",
                },
              });
            }}
          />

          <label>Yes</label>
        </div>
        <div className='contracted-item'>
          <Checkbox
            icon={<CircleUnchecked />}
            checkedIcon={<CircleCheckedFilled />}
            checked={userData.covidinfo.vaccinated.yes === "no"}
            className='radio'
            style={{ marginRight: "1rem" }}
            name='vaxed'
            value='No'
            onChange={(e) => {
              setUserData({
                ...userData,
                covidinfo: {
                  ...userData.covidinfo,
                  vaccinated: {
                    ...userData.covidinfo.vaccinated,
                    yes: "no",
                  },
                },
              });
              setError({
                ...error,
                covid: {
                  ...error.covid,
                  [e.target.name]: "",
                },
              });
            }}
          />
          <label>No</label>
        </div>
        <motion.div
          className='vaccinated'
          style={{
            height: userData.covidinfo.vaccinated.yes === "yes" ? "100%" : "0",
            opacity: userData.covidinfo.vaccinated.yes === "yes" ? 1 : 0,
            display:
              userData.covidinfo.vaccinated.yes === "yes" ? "block" : "none",
          }}
          animate={{
            height: userData.covidinfo.vaccinated.yes === "yes" ? "100%" : "0",
            opacity: userData.covidinfo.vaccinated.yes === "yes" ? 1 : 0,
            display:
              userData.covidinfo.vaccinated.yes === "yes" ? "block" : "none",
            transition: { duration: 0.5 },
          }}>
          <h2>When did you get your last covid vaccine?</h2>
          <input
            type='date'
            value={
              userData.covidinfo.vaccinated.date.length > 0
                ? new Date(userData.covidinfo.vaccinated.date)
                    .toISOString()
                    .split("T")[0]
                : ""
            }
            placeholder='Date'
            onChange={(e) => {
              setUserData({
                ...userData,
                covidinfo: {
                  ...userData.covidinfo,
                  vaccinated: {
                    ...userData.covidinfo.vaccinated,
                    date: e.target.value,
                  },
                },
              });
              setError({
                ...error,
                covid: {
                  ...error.covid,
                  vaccinated_date: "",
                },
              });
            }}
          />
        </motion.div>
        {error.covid.vaccinated_date && (
          <p className='error'>{error.covid.vaccinated_date}</p>
        )}
      </div>
      {error.covid.vaxed && <p className='error'>{error.covid.vaxed}</p>}
    </div>
  );
}

export default Covid;
