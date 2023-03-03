import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import AuthContent from '../components/Auth/AuthContent';
import { AuthContext } from '../store/auth-context';


function WelcomeScreen() {
  const [fetchMessage, setFetchMessage] = useState('');
  const authCtx=useContext(AuthContext);
  const TOKEN = authCtx.token;
  useEffect(()=>{
    const MESSAGE_URL='https://dummyproject-607fd-default-rtdb.asia-southeast1.firebasedatabase.app/message.json?auth='
    axios.get(MESSAGE_URL+TOKEN).then((res)=>setFetchMessage(res.data));
  },[TOKEN]);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
