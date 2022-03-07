import { useState, useEffect } from "react";
import { MenuItem, FormControl, Select } from "@mui/material";
import { motion } from "framer-motion";
import remove from "../imgs/remove.svg";
import "./Technical.css";

const getSkills = async () => {
  const res = await fetch("https://bootcamp-2022.devtest.ge/api/skills");
  const data = await res.json();
  return data;
};

// Select form theme

function Technical({ userData, setUserData, error, setError }: any) {
  // native error handling for the form(we also take error from parent element for final validation)
  const [localErrors, setLocalErrors] = useState({
    skills: "",
    experience: "",
  });
  const [skills, setSkills] = useState<{ id: number; title: string }[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<{
    title: string;
  }>({ title: "" });
  const [experience, setExperience] = useState<string>("");

  // fetchin skills from the API on the first render of the component
  useEffect(() => {
    getSkills().then((data) => {
      setSkills(data);
    });
  }, []);

  // native validation form
  const validateTechnicalInfo = () => {
    const err = {
      skills: "",
      experience: "",
    };

    if (selectedSkill.title === "") {
      err.skills = "Must select at least 1 skill";
    }
    if (experience === "") {
      err.experience = "Must select an experience level";
    } else if (!+experience) {
      err.experience = "Experience must be a number";
    }
    setLocalErrors(err);
    return err;
  };

  const handleClick = () => {
    // checking if skill is already selected and if it is we return
    const errors = validateTechnicalInfo();

    if (
      userData.exp.some(
        (obj: { skill: string; experience: number; id: number }) =>
          obj.skill === selectedSkill.title
      )
    ) {
      errors.skills = "Skill already selected";
      setLocalErrors(errors);
      return;
    }

    // calling native validation and checking if there is an error
    if (Object.values(errors).some((err: string) => err !== "")) return;

    // if not we add the skill to the array and reset the form

    // searching for id of the selected skill
    const id = skills.filter(
      (obj: { id: number; title: string }) => obj.title === selectedSkill.title
    )[0].id;

    setExperience("");

    // finally we send the data to the parent element and reset parent elements error
    setUserData({
      ...userData,
      exp: [
        ...userData.exp,
        {
          id: id,
          experience: Number(experience),
        },
      ],
    });
    setLocalErrors({
      skills: "",
      experience: "",
    });
    setError({
      ...error,
      technical: {
        skills: "",
        experience: "",
      },
    });
  };

  const handleRemove = (id: number) => {
    // remove the skill from the parent element
    setUserData({
      ...userData,
      exp: userData.exp.filter(
        (obj: { skill: string; experience: number; id: number }) =>
          obj.id !== id
      ),
    });
  };

  const handleChande = (e: React.ChangeEvent<{ value: string }>) => {
    setSelectedSkill({
      title: e.target.value,
    });
  };

  return (
    <>
      <form className='technical'>
        <FormControl sx={{ m: 1, width: "31em" }}>
          <Select
            label='Skill'
            onChange={(e) => handleChande(e as any)}
            value={selectedSkill.title}
            renderValue={(value) => `${value}`}>
            {skills.map((skill: { id: number; title: string }) => (
              <MenuItem key={skill.id} value={skill.title}>
                {skill.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {localErrors.skills.length > 0 && (
          <span className='error'>{localErrors.skills}</span>
        )}

        <input
          className='input-experience'
          type='text'
          placeholder='Experience Duration in Years'
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />

        {localErrors.experience.length > 0 && (
          <span className='error'>{localErrors.experience}</span>
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
        {userData.exp.map(
          (
            obj: { skill: string; experience: number; id: number },
            i: number
          ) => {
            return (
              <div key={i} className='skill-item'>
                <div className='skill-name'>{obj.skill} </div>
                <div className='skill-experience'>
                  Years of Experience: {obj.experience} years
                </div>
                <motion.button
                  animate={{ scale: 1.2 }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className='remove-skill'
                  onClick={() => handleRemove(obj.id)}>
                  <img src={remove} alt='removebutton' />
                </motion.button>
              </div>
            );
          }
        )}
        {error.technical.skills && (
          <span className='error'>{error.technical.skills}</span>
        )}
      </div>
    </>
  );
}

export default Technical;
