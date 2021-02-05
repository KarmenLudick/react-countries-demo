// Button component UI come here and define event property
import React from "react";

const Button = ({ onClick, value }) => {
  return (
    <div className="flex justify-center w-1/2 sm:col-span-2">
      <div>       
        <input type="button"  
          id="view_select"
          value={value}
          onClick={onClick}         
        />
      </div>
    </div>
  );
};

export default Button;
