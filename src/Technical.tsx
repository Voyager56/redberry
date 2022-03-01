import { useState, useEffect } from "react";
import Select from "react-select";
import { motion } from "framer-motion";
import "./Technical.css";

const getSkills = async () => {
  const res = await fetch("https://bootcamp-2022.devtest.ge/api/skills");
  const data = await res.json();
  return data;
};

// Select form theme
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

// formating data for the Select dropdown
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

function Technical({ userData, setUserData, error, setError }: any) {
  // native error handling for the form(we also take error from parent element for final validation)
  const [errors, setErrors] = useState({
    skills: "",
    experience: "",
  });
  const [skills, setSkills] = useState<{ value: string; label: string }[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<{
    value: string;
    label: string;
  }>({ value: "", label: "" });
  const [experience, setExperience] = useState<string>("");
  const [skillAndExperience, setSkillAndExperience] = useState<
    { skill: string; experience: number; id: number }[]
  >([]);

  // fetchin skills from the API on the first render of the component
  useEffect(() => {
    getSkills().then((data) => {
      setSkills(formatData(data));
    });
  }, []);

  // native validation form
  const validateTechnicalInfo = () => {
    const error = {
      skills: "",
      experience: "",
    };

    if (selectedSkills.value === "") {
      error.skills = "Must select at least 1 skill";
    }
    if (experience === "") {
      error.experience = "Must select an experience level";
    } else if (!+experience) {
      error.experience = "Experience must be a number";
    }
    setErrors(error);
    return error;
  };

  const handleClick = () => {
    // checking if skill is already selected and if it is we return
    if (
      skillAndExperience.some(
        (obj: { skill: string; experience: number; id: number }) =>
          obj.skill === selectedSkills.value
      )
    )
      return;

    // calling native validation and checking if there is an error
    const errors = validateTechnicalInfo();
    if (Object.values(errors).some((error: string) => error !== "")) return;

    // if not we add the skill to the array and reset the form
    setSkillAndExperience([
      ...skillAndExperience,
      {
        skill: selectedSkills.value,
        experience: Number(experience),
        id: skillAndExperience.length + 1,
      },
    ]);

    setExperience("");

    // finally we send the data to the parent element and reset parent elements error
    setUserData({
      ...userData,
      exp: [
        ...userData.exp,
        {
          skill: selectedSkills.value,
          experience: experience,
          id: skillAndExperience.length + 1,
        },
      ],
    });
    setError({
      skills: "",
      experience: "",
    });
  };

  const handleRemove = (id: number) => {
    // removing the skill from the array
    setSkillAndExperience(
      skillAndExperience.filter((obj: { id: number }) => obj.id !== id)
    );

    // sending the data to the parent element
    setUserData({
      ...userData,
      exp: userData.exp.filter((obj: { id: number }) => obj.id !== id),
    });
  };

  return (
    <>
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
          onChange={(e) => setSelectedSkills(e)}
          className='multi-select'
          classNamePrefix='Skills'
        />

        {errors.skills.length > 0 && (
          <span className='error'>{errors.skills}</span>
        )}

        <input
          className='input-experience'
          type='text'
          placeholder='Experience Duration in Years'
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />

        {errors.experience.length > 0 && (
          <span className='error'>{errors.experience}</span>
        )}

        <button
          className='button-add'
          type='button'
          onClick={() => {
            handleClick();
          }}>
          Add Programming Language
        </button>
      </form>

      <div className='skill-container'>
        {/* conditional rendering for saved data in case of going to different page and then returning back */}
        {userData.exp.length > 0
          ? userData.exp.map(
              (
                obj: { skill: string; experience: number; id: number },
                i: number
              ) => {
                return (
                  <div key={i} className='skill-item'>
                    <div className='skill-name'>{obj.skill} </div>
                    <div className='skill-experience'>
                      Years of Experience {obj.experience}
                    </div>
                    <motion.button
                      animate={{ scale: 1.2 }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                      className='remove-skill'
                      onClick={() => handleRemove(obj.id)}>
                      Remove
                    </motion.button>
                  </div>
                );
              }
            )
          : skillAndExperience.map(
              (obj: { skill: string; experience: number; id: number }, i) => {
                return (
                  <div key={i} className='skill-item'>
                    <div className='skill-name'>{obj.skill} </div>
                    <div className='skill-experience'>
                      Years of Experience {obj.experience}
                    </div>
                    <motion.button
                      animate={{ scale: 1.2 }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                      className='remove-skill'
                      onClick={() => handleRemove(obj.id)}>
                      Remove
                    </motion.button>
                  </div>
                );
              }
            )}

        {error.skills && <span className='error'>{error.skills}</span>}
      </div>
    </>
  );
}

export default Technical;
