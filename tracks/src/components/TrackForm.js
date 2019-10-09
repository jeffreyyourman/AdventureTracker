import React, {useContext} from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import {Context as LocationContext} from '../context/LocationContext';

const TrackForm = () => {
  const {state: {name, recording, locations}, 
    stopRecording, 
    startRecording, 
    changeName} = useContext(LocationContext);
  console.log(locations.length)
  return (
    <>
      <Spacer>
        <Input value={name} onChangeText={changeName}/>
      </Spacer>
      {recording 
        ? <Button title="Stop" onPress={stopRecording}/>
        : <Button title="Start Recording" onPress={startRecording}/>
      }
    </>
  );
};

export default TrackForm;
