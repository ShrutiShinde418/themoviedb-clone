import { useState } from "react";

const Chip = ({ title, id, checkboxChangeHandler }) => {
  const [isChecked, setIsChecked] = useState(false);
  let classes;

  if (isChecked) {
    classes =
      "peer-checked:bg-blue peer-checked:text-white peer-checked:border-blue";
  }

  return (
    <>
      <input
        type="checkbox"
        name="chip"
        id={`chip-${id}`}
        className="hidden w-0 h-0 peer"
        onChange={(e) => {
          checkboxChangeHandler(id, e.target.checked);
          setIsChecked(e.target.checked);
        }}
      />
      <label
        htmlFor={`chip-${id}`}
        className={`border border-black px-3 py-1 text-sm rounded-3xl hover:bg-blue hover:border-blue hover:text-white ${classes}`}
      >
        {title}
      </label>
    </>
  );
};

export default Chip;
