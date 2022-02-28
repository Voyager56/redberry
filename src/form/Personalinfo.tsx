import React from "react";
import "./Personalinfo.css";
import { useState } from "react";

interface User {
  name: string;
  lastname: string;
  email: string;
  phone: string;
}

function Personalinfo() {
  const [user, setUser] = useState<User>({
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });

  return <div className='personalinfo'>p</div>;
}

export default Personalinfo;
