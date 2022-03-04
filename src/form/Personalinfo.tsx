import "./Personalinfo.css";

function Personalinfo({ userData, setuserData, errors, setError }: any) {
  // validating the form when user types
  const validatePersonalInfo = (key: string) => {
    const err = {
      name: "",
      lastname: "",
      email: "",
      phone: "",
    };

    if (userData.name.length < 3) {
      err.name = "Name must be at least 3 characters";
    }
    if (userData.lastname.length < 3) {
      err.lastname = "Last name must be at least 3 characters";
    }
    if (userData.email.length < 3) {
      err.email = "Email must be at least 3 characters";
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)) {
      err.email = "Not valid email";
    }
    if (userData.phone.length > 0) {
      if (!userData.phone.startsWith("+995")) {
        err.phone = "Phone number must start with +995";
      } else if (userData.phone.length != 12) {
        err.phone = "Phone must be 12 digits";
      } else if (userData.phone[3] != "5")
        err.phone = "Georgian phone number only";
    }
    return err[key as keyof typeof err];
  };
  const handleChange = (e: any) => {
    // handling validation depending on the input field
    setuserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    const localErrors = validatePersonalInfo(e.target.name);
    setError({
      ...errors,
      personal: {
        ...errors.personal,
        [e.target.name]: localErrors,
      },
    });
  };
  return (
    <form className='personalinfo'>
      <input
        className='personal-input'
        type='text'
        name='name'
        placeholder='First Name'
        value={userData.name}
        onChange={handleChange}
      />
      {errors.personal.name.length > 0 && (
        <span className='error'>{errors.personal.name}</span>
      )}
      <input
        className='personal-input'
        type='text'
        name='lastname'
        placeholder='Last Name'
        value={userData.lastname}
        onChange={handleChange}
      />
      {errors.personal.lastname.length > 0 && (
        <span className='error'>{errors.personal.lastname}</span>
      )}

      <input
        className='personal-input'
        type='email'
        name='email'
        placeholder='Email'
        value={userData.email}
        onChange={handleChange}
      />
      {errors.personal.email.length > 0 && (
        <span className='error'>{errors.personal.email}</span>
      )}

      {/*  write phone input
       */}
      <input
        className='personal-input'
        type='text'
        name='phone'
        placeholder='Phone'
        value={userData.phone.length > 0 ? userData.phone : "+"}
        pattern='/^-?\d+\.?\d*$/'
        onChange={(e) => {
          if (/[+][^-0-9\/]+/.test(e.target.value)) return;
          setuserData({
            ...userData,
            [e.target.name]: userData.phone.includes("+")
              ? e.target.value
              : `+${e.target.value}`,
          });
          const localErrors = validatePersonalInfo(e.target.name);
          setError({
            ...errors,
            personal: {
              ...errors.personal,
              [e.target.name]: localErrors,
            },
          });
        }}
      />

      {errors.personal.phone.length > 0 && (
        <span className='error'>{errors.personal.phone}</span>
      )}
    </form>
  );
}

export default Personalinfo;
