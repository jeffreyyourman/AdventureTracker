import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, Input } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {

  const {state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign up for tracker</Text>
      </Spacer>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        label="Email"
        onChangeText={newEmail => setEmail(newEmail)} // OR CAN DO onChangeText={setEmail}
        value={email}
      />
      <Spacer />
      <Input
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        label="Password"
        onChangeText={newPassword => setPassword(newPassword)}
        value={password}
      />
      {state.errorMessage ? <Text style={styles.errorMessageStyle}>{state.errorMessage}</Text> : null}
      <Spacer>
        <Button title="Sign up" onPress={()=>signup({email,password})} />
      </Spacer>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: null
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200
  },
  errorMessageStyle: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15
  }
});

export default SignupScreen;
