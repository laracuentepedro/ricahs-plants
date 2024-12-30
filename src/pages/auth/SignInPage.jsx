import FormContainer from "./FormContainer";
import AuthForm from "./AuthForm";
import { Link } from "react-router-dom";
import * as UserService from "services/user";
import { useState } from "react";

const SignInPage = () => {
  const [error, setError] = useState(null);
  return (
    <FormContainer>
      {error && <div className="text-sm text-red-600">{error}</div>}

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
