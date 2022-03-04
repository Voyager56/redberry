import { motion } from "framer-motion";
import { createTheme } from "@material-ui/core/styles";

import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import Checkbox from "@material-ui/core/Checkbox";
import "./Aboutyou.css";

function Aboutyou({ userData, setUserData, userError }: any) {
  return (
    <div className='container'>
      <div className='devtalk'>
        <h2>Would you attend Devtalks and maybe also organize your own?</h2>
        <div className='wrap'>
          <Checkbox
            icon={<CircleUnchecked />}
            checkedIcon={<CircleCheckedFilled />}
            checked={userData.abtuser.devtalk === "yes"}
            onChange={(e) =>
              setUserData({
                ...userData,
                abtuser: {
                  ...userData.abtuser,
                  devtalk: "yes",
                },
              })
            }
          />

          <label>Yes</label>
        </div>
        <div className='wrap'>
          <Checkbox
            icon={<CircleUnchecked />}
            checkedIcon={<CircleCheckedFilled />}
            name='dev'
            checked={userData.abtuser.devtalk === "no"}
            onChange={(e) =>
              setUserData({
                ...userData,
                abtuser: {
                  ...userData.abtuser,
                  devtalk: "no",
                },
              })
            }
          />
          <label>No</label>
        </div>
      </div>
      {userError.devtalk && <p className='error'>{userError.devtalk}</p>}
      <motion.div
        style={{
          height: userData.abtuser.devtalk === "yes" ? "100%" : "0",
          opacity: userData.abtuser.devtalk === "yes" ? 1 : 0,
        }}
        animate={{
          height: userData.abtuser.devtalk === "yes" ? "100%" : "0",
          opacity: userData.abtuser.devtalk === "yes" ? 1 : 0,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
        className='devtalk-text'>
        <h2>What would you speak about at Devtalk?</h2>
        <textarea
          id='devtalk'
          style={{ resize: "none", textAlign: "left" }}
          name='devtalk'
          value={userData.abtuser.devtext}
          onChange={(e) =>
            setUserData({
              ...userData,
              abtuser: { ...userData.abtuser, devtext: e.target.value },
            })
          }
          placeholder='I would...'
          rows={6}
          cols={70}></textarea>

        {userError.devtalk_topic && (
          <p className='error'>{userError.devtalk_topic}</p>
        )}
        <h2>Tell us something special</h2>
        <textarea
          id='special'
          style={{ resize: "none", textAlign: "left" }}
          name='special'
          value={userData.abtuser.special}
          onChange={(e) =>
            setUserData({
              ...userData,
              abtuser: {
                ...userData.abtuser,
                special: e.target.value,
              },
            })
          }
          placeholder='I...'
          rows={4}
          cols={70}></textarea>
        {userError.something_special && (
          <p className='error'>{userError.something_special}</p>
        )}
      </motion.div>
    </div>
  );
}

export default Aboutyou;
