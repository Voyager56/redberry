import { useState } from "react";
import "./Personalinfo.css";

interface UserError {
  name: string;
  lastname: string;
  email: string;
  phone: string;
}

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

      <input
        type='text'
        placeholder='Phone'
        value={userData.phone}
        onChange={(e) => setuserData({ ...userData, phone: e.target.value })}
      />
      {error.phone.length > 0 && <span className='error'>{error.phone}</span>}
    </form>
  );
}

export default Personalinfo;
