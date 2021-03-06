import React from 'react'
import { View, Text, Image } from 'react-native'
import { RNCamera} from 'react-native-camera'

const IconWithText = (props) => {
  return (
    <View style={{ alignItems: 'center'}}>
      <View style={{ width: 60, height: 60, backgroundColor: '#61a756', borderRadius: 30 }} />
      <Text style={{ maxWidth: 70, textAlign: 'center', marginTop: 10 }}>{ props.title }</Text>
    </View>
  )
}

const IconAction = () => {
  return (
    <View style={{ width: 35, height: 35, backgroundColor: 'white', borderRadius: 18, elevation: 5 }} />
  )
}

const ScanQRCode = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.auto}
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
            onBarCodeRead={( barcode ) => {
              console.log(barcode)
            }}
          />
      </View>

      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>
        <IconAction />
        <View style={{ flexDirection: 'row', width: 80, justifyContent: 'space-between' }}>
          <IconAction />
          <IconAction />
        </View>
      </View>
      <View style={{ height: 200, backgroundColor: 'white', paddingHorizontal: 16 }}>
        <View style={{ alignItems: 'center', marginTop: 8, marginBottom: 16 }}>
          <View style={{ width: 40, height: 3, backgroundColor: '#e0e0e0', marginBottom: 3}} />
          <View style={{ width: 40, height: 3, backgroundColor: '#e0e0e0', marginBottom: 3}} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black'}}>More Options</Text>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#61a756'}}>SHORTCUT</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 16 }}>
          <View style={{ flexDirection: 'row'}}>
            <IconWithText title="Phone Number" />
            <IconWithText title="GoPay code" />
          </View>
          <View style={{ width: 1, height: 50, backgroundColor: 'grey', marginHorizontal: 16}} />
          <View style={{ flex: 1 }}>
            <Text>Your recent GoPay receivers will show here. No admin fees!</Text>
          </View>
        </View>
      </View>

    </View>
  )
}

export default ScanQRCode
