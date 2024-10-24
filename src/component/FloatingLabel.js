// components/DynamicForm.js
import React from "react";

const DynamicForm = ({ label, type }) => {
  return (
    <form className="w-full mt-2">
      <div className="relative">
        <input
          type={type}
          id="floating_outlined"
          className="block px-4 pb-2.5 pt-4 w-full text-sm text-[#101828] bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          for="floating_outlined"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 left-3 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
         {label}
        </label>
      </div>
    </form>
  );
};

export default DynamicForm;
