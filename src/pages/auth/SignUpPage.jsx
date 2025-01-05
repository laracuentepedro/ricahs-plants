import FormContainer from "./FormContainer";
import AuthForm from "./AuthForm";
import { Link, useNavigate } from "react-router-dom";
import * as UserService from "services/user";
import { useState } from "react";
import RedirectToPlantsIfSignedIn from "shared-components/RedirectToPlantsIfSignedIn";

const SignUpPage = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  return (
    <RedirectToPlantsIfSignedIn>
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
            {
              label: "confirm password",
              type: "password",
            },
          ]}
          submitButtonText="create an account"
          onSubmit={async (values) => {
            const { username, password } = values;
            if (username.length <= 3) {
              setError("Username must be longer than 3 characters");
              return;
            } else if (password !== values["confirm password"]) {
              setError("Passwords don't match, please confirm");
              return;
            } else if (password.length < 4) {
              setError("Password must be at least 4 characters");
              return;
            }
            const response = await UserService.createUser({
              username,
              password,
            });
            if (response.status === 201) {
              setError(null);
              navigate("/", {
                state: {
                  newAccount: true,
                },
              });
            } else {
              const data = await response.json();
              setError(data.error);
            }
          }}
        />
        <Link className="text-emerald-700 text-sm underline" to="/">
          sign in
        </Link>
      </FormContainer>
    </RedirectToPlantsIfSignedIn>
  );
};

export default SignUpPage;
