import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Alert
} from 'react-native';

export default function App() {

  const handlePress = () => {
    console.log('Text Pressed')
  }
  return (
    <View style={styles.container}>
      <Text>Hello Boston Technology!!</Text>
      <Text numberOfLines={1}
        onPress={handlePress}
      >
        Hello React Native.A really long text.
        Now we will make it more longer. Lets see how this get displayed
      </Text>

      <Text
        onPress={() => console.log('Text Pressed from inline function')}
      >
        Welcome to App Development
      </Text>

      <Image source={require("./assets/slack.png")}></Image>
      <TouchableNativeFeedback onPress={() => console.log('Image Tapped')}>
        <Image
          source={
            {
              uri: "https://www.klikeri.hr/wp-content/uploads/avatar-1-300x300.png",
              width: 300,
              height: 300
            }
          }></Image>
      </TouchableNativeFeedback>

      {/* TouchableWithoutFeedback
        TouchableHighlight,
        TouchableNativeFeedback,
        TouchableOpacity
      */}

      <Button
        title="Click Me"
        onPress={() => {
          Alert.alert("My Title", "My Message",
            [{ text: 'Yes', onPress:()=>{console.log('Yes')}},
            { text: 'No' ,onPress:()=>{console.log('No')}}

            ])
        }}
      >
      </Button>

      <Button 
        title="Click Input Alert"
        onPress={() => {
          Alert.prompt("Select mode","0-CC,1-Cash",(text)=>{
            console.log(text)
          })
        }}
      >
      </Button>


      <StatusBar style="auto" />
    </View>
  );
}

const containerStyle={backgroundColorr:"dodgerblue"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop:Platform.OS==="android"? 50 : 0
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
