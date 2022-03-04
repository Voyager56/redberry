import { motion } from "framer-motion";
import DateFnsUtils from "@date-io/date-fns";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import Checkbox from "@material-ui/core/Checkbox";
import "./Covid.css";
import { red } from "@mui/material/colors";

const materialTheme = createTheme({
  palette: {
    primary: red,
  },
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
            <Checkbox
              icon={<CircleUnchecked />}
              checkedIcon={<CircleCheckedFilled />}
              checked={userData.covidinfo.work === "From Sairme Office"}
              className='radio'
              name='work-preferance'
              value='From Sairme Office'
              style={{ marginRight: "1rem" }}
              onChange={(e: { target: { value: any } }) =>
                setUserData({
                  ...userData,
                  covidinfo: { ...userData.covidinfo, work: e.target.value },
                })
              }
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
              onChange={(e: { target: { value: any } }) =>
                setUserData({
                  ...userData,
                  covidinfo: { ...userData.covidinfo, work: e.target.value },
                })
              }
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
              onChange={(e: { target: { value: any } }) =>
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
          <Checkbox
            icon={<CircleUnchecked />}
            checkedIcon={<CircleCheckedFilled />}
            checked={userData.covidinfo.contracted.yes === "yes"}
            className='radio'
            style={{ marginRight: "1rem" }}
            name='contracted'
            value='Yes'
            onChange={() =>
              setUserData({
                ...userData,
                covidinfo: {
                  ...userData.covidinfo,
                  contracted: {
                    ...userData.covidinfo.contracted,
                    yes: "yes",
                  },
                },
              })
            }
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
            onChange={() =>
              setUserData({
                ...userData,
                covidinfo: {
                  ...userData.covidinfo,
                  contracted: {
                    ...userData.covidinfo.contracted,
                    yes: "no",
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
            height: userData.covidinfo.contracted.yes === "yes" ? "100%" : "0",
            opacity: userData.covidinfo.contracted.yes === "yes" ? 1 : 0,
          }}
          animate={{
            height: userData.covidinfo.contracted.yes === "yes" ? "100%" : "0",
            opacity: userData.covidinfo.contracted.yes === "yes" ? 1 : 0,
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
                value={
                  userData.covidinfo.contracted.date.length > 0
                    ? new Date(userData.covidinfo.contracted.date)
                        .toISOString()
                        .split("T")[0]
                    : new Date().toISOString().split("T")[0]
                }
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
                format='dd/MM/yyyy'
              />
            </MuiPickersUtilsProvider>
          </ThemeProvider>
        </motion.div>
        {error.contracted_date && (
          <p className='error'>{error.contracted_date}</p>
        )}
      </div>
      {error.contracted && <p className='error'>{error.contracted}</p>}
      <div className='contracted'>
        <h2>Have you been vaccinated?</h2>
        <div className='contracted-item'>
          <Checkbox
            icon={<CircleUnchecked />}
            checkedIcon={<CircleCheckedFilled />}
            checked={userData.covidinfo.vaccinated.yes === "yes"}
            className='radio'
            style={{ marginRight: "1rem" }}
            name='vaccinated'
            value='Yes'
            onChange={() =>
              setUserData({
                ...userData,
                covidinfo: {
                  ...userData.covidinfo,
                  vaccinated: {
                    ...userData.covidinfo.vaccinated,
                    yes: "yes",
                  },
                },
              })
            }
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
            name='vaccinated'
            value='No'
            onChange={() =>
              setUserData({
                ...userData,
                covidinfo: {
                  ...userData.covidinfo,
                  vaccinated: {
                    ...userData.covidinfo.vaccinated,
                    yes: "no",
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
                value={
                  userData.covidinfo.vaccinated.date.length > 0
                    ? new Date(userData.covidinfo.vaccinated.date)
                        .toISOString()
                        .split("T")[0]
                    : new Date().toISOString().split("T")[0]
                }
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
                format='dd/MM/yyyy'
              />
            </MuiPickersUtilsProvider>
          </ThemeProvider>
        </motion.div>
        {error.vaccinated_date && (
          <p className='error'>{error.vaccinated_date}</p>
        )}
      </div>
      {error.vaxed && <p className='error'>{error.vaxed}</p>}
    </div>
  );
}

export default Covid;
