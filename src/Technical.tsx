import { useState, useEffect } from "react";
import Select from "react-select";
import "./Technical.css";

const getSkills = async () => {
  const res = await fetch("https://bootcamp-2022.devtest.ge/api/skills");
  const data = await res.json();
  return data;
};

const styles = (theme: any) => {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary: "var(--redberry-red)",
      primary25: "var(--redberry-red)",
    },
  };
};

const formatData = (data: any) => {
  const formated: { value: any; label: any }[] = [];
  data.forEach((obj: { title: any }) => {
    formated.push({
      value: obj.title,
      label: obj.title,
    });
  });
  return formated;
};

function Technical({ userData, setuserData, error }: any) {
  const [skills, setSkills] = useState<{ value: any; label: any }[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<
    { value: any; label: any }[]
  >([]);

  useEffect(() => {
    getSkills().then((data) => {
      setSkills(formatData(data));
    });
  }, []);

  return (
    <form className='technical'>
      <Select
        options={skills}
        theme={styles}
        styles={{
          container: (base) => ({
            ...base,
            width: "35em",
          }),
        }}
        isMulti
        onChange={(e) => setSelectedSkills(e)}
        className='multi-select'
        classNamePrefix='Skills'
      />
      {error.skills.length > 0 && <span className='error'>{error.skills}</span>}
    </form>
  );
}

export default Technical;
