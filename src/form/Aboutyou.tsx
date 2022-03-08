import { motion } from "framer-motion";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import Checkbox from "@material-ui/core/Checkbox";
import "./Aboutyou.css";

function Aboutyou({ userData, setUserData, userError, setError }: any) {
  return (
    <div className='container'>
      <div className='devtalk'>
        <h2>Would you attend Devtalks and maybe also organize your own?</h2>
        <div className='wrap'>
          <Checkbox
            icon={<CircleUnchecked />}
            checkedIcon={<CircleCheckedFilled />}
            checked={userData.abtuser.devtalk === "yes"}
            onChange={(e) => {
              setUserData({
                ...userData,
                abtuser: {
                  ...userData.abtuser,
                  devtalk: "yes",
                },
              });
              setError({
                ...userError,
                aboutyou: {
                  devtalk: "",
                },
              });
            }}
          />

          <label>Yes</label>
        </div>
        <div className='wrap'>
          <Checkbox
            icon={<CircleUnchecked />}
            checkedIcon={<CircleCheckedFilled />}
            name='dev'
            checked={userData.abtuser.devtalk === "no"}
            onChange={() => {
              setUserData({
                ...userData,
                abtuser: {
                  ...userData.abtuser,
                  devtalk: "no",
                },
              });
              setError({
                ...userError,
                aboutyou: {
                  devtalk: "",
                },
              });
            }}
          />
          <label>No</label>
        </div>
      </div>
      {userError.aboutyou.devtalk && (
        <p className='error'>{userError.aboutyou.devtalk}</p>
      )}
      <div className='devtalk-text'>
        <motion.div
          className='motion-wrap'
          style={{
            x: userData.abtuser.devtalk === "yes" ? 0 : -1000,
            height: userData.abtuser.devtalk === "yes" ? "auto" : "0",
            opacity: userData.abtuser.devtalk === "yes" ? 1 : 0,
          }}
          animate={{
            x: userData.abtuser.devtalk === "yes" ? 0 : -1000,
            height: userData.abtuser.devtalk === "yes" ? "auto" : "0",
            opacity: userData.abtuser.devtalk === "yes" ? 1 : 0,
            transition: {
              duration: 0.5,
              spring: {
                damping: 20,
              },
              ease: "easeInOut",
            },
          }}>
          <h2>What would you speak about at Devtalk?</h2>
          <textarea
            id='devtalk'
            style={{ resize: "none", textAlign: "left" }}
            name='devtalk'
            value={userData.abtuser.devtext}
            onChange={(e) => {
              setUserData({
                ...userData,
                abtuser: { ...userData.abtuser, devtext: e.target.value },
              });
              if (userData.abtuser.devtext.length > 3) {
                setError({
                  ...userError,
                  aboutyou: {
                    ...userError.aboutyou,
                    devtalk_topic: "",
                  },
                });
              }
            }}
            placeholder='I would...'
            rows={6}
            cols={70}></textarea>
        </motion.div>

        {userError.aboutyou.devtalk_topic && (
          <p className='error'>{userError.aboutyou.devtalk_topic}</p>
        )}
        <h2>Tell us something special</h2>
        <textarea
          id='special'
          style={{ resize: "none", textAlign: "left" }}
          name='special'
          value={userData.abtuser.special}
          onChange={(e) => {
            setUserData({
              ...userData,
              abtuser: {
                ...userData.abtuser,
                special: e.target.value,
              },
            });
            if (userData.abtuser.special.length > 3) {
              setError({
                ...userError,
                aboutyou: {
                  ...userError.aboutyou,
                  something_special: "",
                },
              });
            }
          }}
          placeholder='I...'
          rows={4}
          cols={70}></textarea>
        {userError.aboutyou.something_special && (
          <p className='error'>{userError.aboutyou.something_special}</p>
        )}
      </div>
    </div>
  );
}

export default Aboutyou;
