import React from "react";

const Button = ({styLes}) =>(
  <div>
    <button type='button' className={`py-4 px-6 bg-blue-gradient
     font-poppins font-medium text-[18px] text-primary outline-none
      ${styLes} rounded-[10px]`}>
    Get Started
    </button>
  </div>
)

export default Button;