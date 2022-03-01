import "./Covid.css";

function Covid({ userData, setUserData, error }: any) {
  return (
    <div className='Covid'>
      <div className='work'>
        <h2> how would you prefer to work?</h2>
        <div className='work-preferance'>
          <div className='work-preferance-item'>
            <input
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
            className='radio'
            type='radio'
            name='contracted'
            value='Yes'
            onChange={() =>
              setUserData({
                ...userData,
                covidinfo: { ...userData.covidinfo, contracted: true },
              })
            }
          />

          <label>Yes</label>
        </div>
        <div className='contracted-item'>
          <input
            className='radio'
            type='radio'
            name='contracted'
            value='No'
            onChange={() =>
              setUserData({
                ...userData,
                covidinfo: { ...userData.covidinfo, contracted: false },
              })
            }
          />

          <label>No</label>
        </div>
        <div
          className='contracted'
          style={{
            display: userData.covidinfo.contracted ? "block" : "none",
            transition: "all 0.5s ease-in-out",
          }}>
          <h2>When?</h2>
          <input type='date' />
        </div>
      </div>
      <div className='contracted'>
        <h2>Have you been vaccinated?</h2>
        <div className='contracted-item'>
          <input
            className='radio'
            type='radio'
            name='vaccinated'
            value='Yes'
            onChange={() =>
              setUserData({
                ...userData,
                covidinfo: { ...userData.covidinfo, vaccinated: true },
              })
            }
          />

          <label>Yes</label>
        </div>
        <div className='contracted-item'>
          <input
            className='radio'
            type='radio'
            name='vaccinated'
            value='No'
            onChange={() =>
              setUserData({
                ...userData,
                covidinfo: { ...userData.covidinfo, vaccinated: false },
              })
            }
          />
          <label>No</label>
        </div>
        <div
          className='vaccinated'
          style={{ display: userData.covidinfo.vaccinated ? "block" : "none" }}>
          <h2>When did you get your last covid vaccine?</h2>
          <input type='date' />
        </div>
      </div>
    </div>
  );
}

export default Covid;
