import React, {useEffect} from 'react';
import {StyleSheet, Platform} from 'react-native';
import {WebView} from 'react-native-webview';
import {request, PERMISSIONS} from 'react-native-permissions';

export default function App() {
  const requestPermission = () => {
    let permissionType = null;
    if (Platform.OS === 'ios') {
      permissionType = PERMISSIONS.IOS.CAMERA;
    } else if (Platform.OS === 'android') {
      permissionType = PERMISSIONS.ANDROID.CAMERA;
    }

    if (permissionType) {
      request(permissionType).then(result => {
        console.log(result);
      });
    }
  };

  useEffect(() => {
    requestPermission();
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
