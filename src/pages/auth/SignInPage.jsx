import FormContainer from "./FormContainer";
import AuthForm from "./AuthForm";
import { Link } from "react-router-dom";
import * as UserService from 'services/user';
const SignInPage = () => {
  return (
    <FormContainer>
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
          onSubmit={(values)=>UserService.createUser(values)}
        />
        <Link 
        className="text-emerald-700 text-sm underline"
        
        to='/sign-up'>sign up</Link>
    </FormContainer>
  );
};

export default SignInPage;
