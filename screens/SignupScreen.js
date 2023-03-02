import { useState } from 'react';
import { createUser } from '../util/auth';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from  '../components/ui/LoadingOverlay';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating]=useState(false);
  
  async function signupHandler({email, password}){
    setIsAuthenticating(true);
    await createUser(email, password);
    setIsAuthenticating(false);
  }

  if(isAuthenticating){
    return <LoadingOverlay message="Creating User...." />;
  }

  return <AuthContent onAuthenticate={signupHandler}/>;
}

export default SignupScreen;
