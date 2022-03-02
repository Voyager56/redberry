import { motion } from "framer-motion";
import "./Aboutyou.css";

function Aboutyou({ userData, setUserData, userError }: any) {
  return (
    <div className='container'>
      <div className='devtalk'>
        <h2>Would you attend Devtalks and maybe also organize your own?</h2>
        <div className='wrap'>
          <input
            name='dev'
            className='radio'
            type='radio'
            checked={userData.abtuser.devtalk}
            onChange={(e) =>
              setUserData({
                ...userData,
                abtuser: {
                  ...userData.abtuser,
                  devtalk: true,
                },
              })
            }
          />

          <label>Yes</label>
        </div>
        <div className='wrap'>
          <input
            name='dev'
            className='radio'
            type='radio'
            checked={!userData.abtuser.devtalk}
            onChange={(e) =>
              setUserData({
                ...userData,
                abtuser: {
                  ...userData.abtuser,
                  devtalk: false,
                },
              })
            }
          />
          <label>No</label>
        </div>
      </div>
      <motion.div
        style={{
          opacity: userData.abtuser.devtalk ? "1" : "0",
        }}
        animate={{
          x: userData.abtuser.devtalk ? 0 : -100,
          opacity: userData.abtuser.devtalk ? 1 : 0,
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

        {userError.devtext && <p className='error'>{userError.devtext}</p>}
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
        {userError.special && <p className='error'>{userError.special}</p>}
      </motion.div>
    </div>
  );
}

export default Aboutyou;
