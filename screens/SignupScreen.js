import { useState } from 'react';
import { createUser } from '../util/auth';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from  '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating]=useState(false);
  
  async function signupHandler({email, password}){
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
    } catch (error) {
      Alert.alert('Authentication failed', 'Could not create user and please try again later.');
    }
    setIsAuthenticating(false);
  }

  if(isAuthenticating){
    return <LoadingOverlay message="Creating User...." />;
  }

  return <AuthContent onAuthenticate={signupHandler}/>;
}

export default SignupScreen;
