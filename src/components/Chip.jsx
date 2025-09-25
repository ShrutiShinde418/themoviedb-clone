import { useState } from "react";

const Chip = ({ title }) => {
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
        id="chip"
        className="hidden w-0 h-0 peer"
        data-name={`${title}`}
        onChange={(e) => {
          setIsChecked(e.target.checked);
        }}
      />
      <label
        htmlFor="chip"
        className={`border border-black px-3 py-1 text-sm rounded-3xl hover:bg-blue hover:border-blue hover:text-white ${classes}`}
      >
        {title}
      </label>
    </>
  );
};

export default Chip;
