/* eslint-disable react/prop-types */
import Field from "./Field";
import { useState } from "react";

const AuthForm = (props) => {
  const { fields, submitButtonText, onSubmit } = props;
  const [values, setValues] = useState(() => {
    const initialState = {};
    fields.forEach((field) => {
      initialState[field.label] = "";
    });
    return initialState;
  });
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setIsLoading(true);
          await onSubmit(values);
          setIsLoading(false);
        }}
        className="m-4 p-8 border border-slate-200 bg-white rounded-lg flex flex-col justify-center w-full max-w-80"
      >
        {fields.map((field) => (
          <Field
            value={values[field.label]}
            key={field.label}
            field={field}
            onChange={(e) => {
              setValues({ ...values, [field.label]: e.target.value });
            }}
          />
        ))}
        <button className="relative mt-4 bg-emerald-700 text-white py-2 rounded-lg font-lato flex items-center justify-center">
          {submitButtonText}
          {isLoading && <i className="absolute right-4 fa-solid fa-circle-notch animate-spin text-lg text-white"></i>}
        </button>
      </form>
    </>
  );
};

export default AuthForm;
