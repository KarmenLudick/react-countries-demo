// Checkbox component UI come here and define event property
import React from "react";

const Checkbox = ({ onChange, value, defaultChecked }) => {
  return (
    <div className="flex justify-center w-1/2 sm:col-span-2">
      <div>       
        <input type="checkbox"  
          id="country_check"
          value={value}
          onChange={onChange}     
          defaultChecked={defaultChecked}
        />
      </div>
    </div>
  );
};

export default Checkbox;
