import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import {useCameraPermission} from 'react-native-vision-camera';

export default function App() {
  const {hasPermission, requestPermission} = useCameraPermission();

  useEffect(() => {
    const getPermission = async () => {
      if (!hasPermission) {
        await requestPermission();
      }
    };
    getPermission();
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
