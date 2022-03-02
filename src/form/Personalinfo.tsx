import "./Personalinfo.css";
import PhoneInput from "react-phone-input-2";

function Personalinfo({ userData, setuserData, error }: any) {
  return (
    <form className='personalinfo'>
      <input
        type='text'
        placeholder='Name'
        value={userData.name}
        onChange={(e) => setuserData({ ...userData, name: e.target.value })}
      />
      {error.name.length > 0 && <span className='error'>{error.name}</span>}
      <input
        type='text'
        placeholder='Last Name'
        value={userData.lastname}
        onChange={(e) => setuserData({ ...userData, lastname: e.target.value })}
      />
      {error.lastname.length > 0 && (
        <span className='error'>{error.lastname}</span>
      )}

      <input
        type='email'
        placeholder='Email'
        value={userData.email}
        onChange={(e) => setuserData({ ...userData, email: e.target.value })}
      />
      {error.email.length > 0 && <span className='error'>{error.email}</span>}

      <PhoneInput
        country='ge'
        specialLabel=''
        autoFormat={true}
        countryCodeEditable={false}
        value={userData.phone}
        onChange={(e) =>
          setuserData({
            ...userData,
            phone: e,
          })
        }
      />
      {error.phone.length > 0 && <span className='error'>{error.phone}</span>}
    </form>
  );
}

export default Personalinfo;
