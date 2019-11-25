'use strict';
import React, { PureComponent, useState } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import Photo from './Photo';
import ImagePicker from 'react-native-image-picker';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
);

const Camera = () => {
  const [photo, setPhoto] = useState(null);
  return (
    <View style={styles.container}>
      {photo === null ? (
        <>
          <RNCamera
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            captureAudio={false}
          >
            {({ camera, status, recordAudioPermissionStatus }) => {
              if (status !== 'READY') return <PendingView />;
              return (
                <View
                  style={{
                    flex: 0,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}
                >
                  <TouchableOpacity
                    onPress={() => takePicture(camera)}
                    style={styles.capture}
                  >
                    <Text style={{ fontSize: 14 }}> SNAP </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          </RNCamera>
          <TouchableOpacity
            onPress={() =>
              ImagePicker.launchImageLibrary(
                { tintColor: '#fff' },
                response => {
                  console.log('Response = ', response);

                  if (response.didCancel) {
                    console.log('User cancelled image picker');
                  } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                  } else if (response.customButton) {
                    console.log(
                      'User tapped custom button: ',
                      response.customButton,
                    );
                  } else {
                    setPhoto(response.uri);
                  }
                },
              )
            }
            style={styles.imagePicker}
          >
            <Text>Pick Image</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Photo clear={() => setPhoto(null)} path={photo} />
      )}
    </View>
  );

  async function takePicture(camera) {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      console.log(data.uri);
      setPhoto(data.uri);
    }
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  imagePicker: {
    backgroundColor: '#fff',
    position: 'absolute',
    left: 25,
    bottom: 25,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  test: { color: '#fff' },
});

export default Camera;
