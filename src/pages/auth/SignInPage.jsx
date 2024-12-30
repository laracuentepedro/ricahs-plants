import FormContainer from "./FormContainer";
import AuthForm from "./AuthForm";
import { Link, useLocation } from "react-router-dom";
import * as UserService from "services/user";
import { useState } from "react";

const SignInPage = () => {
  const [error, setError] = useState(null);
  const location = useLocation();
  const newAccount = location.state?.newAccount || null;
  console.log(location.state);
  return (
    <FormContainer>
      {error && <div className="text-sm text-red-600">{error}</div>}
      { newAccount && <div className="border border-green-600 rounded-lg p-4 bg-green-200 text-green-700 my-4">Account created successfully. Please sign in.</div> }

      <AuthForm
        fields={[
          {
            label: "username",
            type: "text",
          },
          {
            label: "password",
            type: "password",
          },
        ]}
        submitButtonText="sign in"
        onSubmit={async (values) => {
          const { username, password } = values;
          const response = await UserService.createSession({
            username,
            password,
          });
          if (response.status === 201) {
            setError(null);
            console.log("sign in successful");
          } else {
            const data = await response.json();
            setError(data.error);
            console.log(data.error);
          }
        }}
      />
      <Link className="text-emerald-700 text-sm underline" to="/sign-up">
        sign up
      </Link>
    </FormContainer>
  );
};

export default SignInPage;
