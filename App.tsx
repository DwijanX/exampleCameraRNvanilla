import React, {useEffect} from 'react';
import {StyleSheet, PermissionsAndroid} from 'react-native';
import {WebView} from 'react-native-webview';

export default function App() {
  const requestCameraPermission = async () => {
    try {
      if (await PermissionsAndroid.check('android.permission.CAMERA')) {
        return;
      }
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  useEffect(() => {
    requestCameraPermission();
  }, []);

  return (
    <WebView
      style={styles.container}
      source={{
        uri: 'https://capturadoc4i.azurewebsites.net/form.html',
      }}
      originWhitelist={[`*`]}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      startInLoadingState={true}
      allowFileAccess={true}
      scalesPageToFit={true}
      onNavigationStateChange={() => {}}
      mediaPlaybackRequiresUserAction={false}
      mediaCapturePermissionGrantType="grantIfSameHostElsePrompt"
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#fff`,
    alignItems: `center`,
    justifyContent: `center`,
    paddingTop: 50,
  },
});
