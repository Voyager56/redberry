import { motion } from "framer-motion";
import DateFnsUtils from "@date-io/date-fns";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import "./Covid.css";

const materialTheme = createTheme({
  overrides: {
    MuiIconButton: {
      root: {
        color: "#fe3b1f",
      },
    },
    MuiOutlinedInput: {
      root: {
        color: "#fe3b1f",
      },
    },
    MuiInputLabel: {
      root: {
        color: "#fe3b1f",
      },
    },
  },
});

function Covid({ userData, setUserData, error }: any) {
  return (
    <div className='Covid'>
      <div className='work'>
        <h2> how would you prefer to work?</h2>
        <div className='work-preferance'>
          <div className='work-preferance-item'>
            <input
              checked={userData.covidinfo.work === "From Sairme Office"}
              className='radio'
              type='radio'
              name='work-preferance'
              value='From Sairme Office'
              onChange={(e) =>
                setUserData({
                  ...userData,
                  covidinfo: { ...userData.covidinfo, work: e.target.value },
                })
              }
            />
            <label>From Sairme Office</label>
          </div>
          <div className='work-preferance-item'>
            <input
              checked={userData.covidinfo.work === "From Home"}
              className='radio'
              type='radio'
              name='work-preferance'
              value='From Home'
              onChange={(e) =>
                setUserData({
                  ...userData,
                  covidinfo: { ...userData.covidinfo, work: e.target.value },
                })
              }
            />
            <label>From Home</label>
          </div>
          <div className='work-preferance-item'>
            <input
              checked={userData.covidinfo.work === "Hybrid"}
              className='radio'
              type='radio'
              name='work-preferance'
              value='Hybrid'
              onChange={(e) =>
                setUserData({
                  ...userData,
                  covidinfo: { ...userData.covidinfo, work: e.target.value },
                })
              }
            />
            <label>Hybrid</label>
          </div>
        </div>
        {error.work && <p className='error'>{error.work}</p>}
      </div>
      <div className='contracted'>
        <h2>Did you contact covid 19? :(</h2>
        <div className='contracted-item'>
          <input
            checked={userData.covidinfo.contracted.yes}
            className='radio'
            type='radio'
            name='contracted'
            value='Yes'
            onChange={() =>
              setUserData({
                ...userData,
                covidinfo: {
                  ...userData.covidinfo,
                  contracted: {
                    ...userData.covidinfo.contracted,
                    yes: true,
                  },
                },
              })
            }
          />
          <label>Yes</label>
        </div>
        <div className='contracted-item'>
          <input
            checked={!userData.covidinfo.contracted.yes}
            className='radio'
            type='radio'
            name='contracted'
            value='No'
            onChange={() =>
              setUserData({
                ...userData,
                covidinfo: {
                  ...userData.covidinfo,
                  contracted: {
                    ...userData.covidinfo.contracted,
                    yes: false,
                  },
                },
              })
            }
          />

          <label>No</label>
        </div>
        <motion.div
          className='contracted'
          style={{
            height: userData.covidinfo.contracted.yes ? "100%" : "0",
            opacity: userData.covidinfo.contracted.yes ? 1 : 0,
          }}
          animate={{
            height: userData.covidinfo.contracted.yes ? "100%" : "0",
            opacity: userData.covidinfo.contracted.yes ? 1 : 0,
            transition: { duration: 0.5 },
          }}>
          <h2>When?</h2>
          <ThemeProvider theme={materialTheme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                inputProps={{
                  disabledUnderline: true,
                }}
                style={{
                  border: "2px solid var(--redberry-red)",
                  borderRadius: "5px",
                  padding: "10px",
                  width: "17em",
                }}
                value={new Date(userData.covidinfo.contracted.date)}
                placeholder='Date'
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    covidinfo: {
                      ...userData.covidinfo,
                      contracted: {
                        ...userData.covidinfo.contracted,
                        date: e!.toISOString().split("T")[0],
                      },
                    },
                  })
                }
                format='MM/dd/yyyy'
              />
            </MuiPickersUtilsProvider>
          </ThemeProvider>
        </motion.div>
      </div>
      <div className='contracted'>
        <h2>Have you been vaccinated?</h2>
        <div className='contracted-item'>
          <input
            checked={userData.covidinfo.vaccinated.yes}
            className='radio'
            type='radio'
            name='vaccinated'
            value='Yes'
            onChange={() =>
              setUserData({
                ...userData,
                covidinfo: {
                  ...userData.covidinfo,
                  vaccinated: {
                    ...userData.covidinfo.vaccinated,
                    yes: true,
                  },
                },
              })
            }
          />

          <label>Yes</label>
        </div>
        <div className='contracted-item'>
          <input
            checked={!userData.covidinfo.vaccinated.yes}
            className='radio'
            type='radio'
            name='vaccinated'
            value='No'
            onChange={() =>
              setUserData({
                ...userData,
                covidinfo: {
                  ...userData.covidinfo,
                  vaccinated: {
                    ...userData.covidinfo.vaccinated,
                    yes: false,
                  },
                },
              })
            }
          />
          <label>No</label>
        </div>
        <motion.div
          className='vaccinated'
          style={{
            height: userData.covidinfo.vaccinated.yes ? "100%" : "0",
            opacity: userData.covidinfo.vaccinated.yes ? 1 : 0,
            display: userData.covidinfo.vaccinated.yes ? "block" : "none",
          }}
          animate={{
            height: userData.covidinfo.vaccinated.yes ? "100%" : "0",
            opacity: userData.covidinfo.vaccinated.yes ? 1 : 0,
            display: userData.covidinfo.vaccinated.yes ? "block" : "none",
            transition: { duration: 0.5 },
          }}>
          <h2>When did you get your last covid vaccine?</h2>
          <ThemeProvider theme={materialTheme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                inputProps={{
                  disabledUnderline: true,
                }}
                style={{
                  border: "2px solid var(--redberry-red)",
                  borderRadius: "5px",
                  padding: "10px",
                }}
                value={new Date(userData.covidinfo.vaccinated.date)}
                placeholder='Date'
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    covidinfo: {
                      ...userData.covidinfo,
                      vaccinated: {
                        ...userData.covidinfo.vaccinated,
                        date: e!.toISOString().split("T")[0],
                      },
                    },
                  })
                }
                format='MM/dd/yyyy'
              />
            </MuiPickersUtilsProvider>
          </ThemeProvider>
        </motion.div>
      </div>
    </div>
  );
}

export default Covid;
