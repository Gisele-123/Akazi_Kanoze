import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Button, TextInput, Alert } from 'react-native';

const App = () => {
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [isMarketerChecked, setIsMarketerChecked] = useState(false);
  const [isClientChecked, setIsClientChecked] = useState(false);

  const handleNumberButtonClick = (number: React.SetStateAction<number>) => {
    setSelectedNumber(number);
  };

  const handleMarketerCheck = () => {
    setIsMarketerChecked(!isMarketerChecked);
  };

  const handleClientCheck = () => {
    setIsClientChecked(!isClientChecked);
  };

  const handleSubmit = () => {
    Alert.alert(
      'Form submitted!',
      'Your form has been successfully submitted.',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    );
    console.log('Form submitted!');
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingBottom: 15}}>
          <Text style={{ fontSize: 25, fontWeight: 'bold'}}>Akazi Kanoze</Text>
        </View>
      <View style={{gap:17.5}}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <Text  style={{ fontSize: 18, fontWeight: 'bold', color: 'rgb(44, 44, 44)'}}>Tell us more about you</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Which title most defines your day-to-day role</Text>
        </View>
        <View style={{ alignItems:'center', justifyContent:'center'}}>
        <View style={{ flexDirection: 'row', paddingBottom: 17.5, gap: 15, alignItems:'center', justifyContent:'center' }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#44f',
                width: 45,
                height: 45,
                padding: 12.5,
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: '#44f'
              }}
              onPress={() => handleNumberButtonClick(1)}
            >
              <Text style={{ color: '#fff' }}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#44f',
                width: 45,
                height: 45,
                padding: 12.5,
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: '#44e'
              }}
              onPress={() => handleNumberButtonClick(2)}
            >
              <Text style={{ color: '#fff' }}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#44f',
                width: 45,
                height: 45,
                padding: 12.5,
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: '#44e'
              }}
              onPress={() => handleNumberButtonClick(3)}
            >
              <Text style={{ color: '#fff' }}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#ddf',
                width: 45,
                height: 45,
                padding: 12.5,
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: '#00e'
              }}
              onPress={() => handleNumberButtonClick(4)}
            >
              <Text style={{ color: '#00e' }}>4</Text>
            </TouchableOpacity>
          </View>
        <View style={{gap: 15}}>
          <View style={{ gap: 15, alignItems: 'center', justifyContent:'center'}}>
            <View>
            <Text style={{ fontSize: 15, fontWeight: '545' }}>Upload Image</Text>
              <Text>Max.size of 2Mb</Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: 'gray',
                padding: 10,
                alignItems: 'center',
                borderRadius: 5,
                width: 125,
              }}
            >
              <Text style={{color:'white'}}>Upload</Text>
            </TouchableOpacity>
          </View>

          <View style={{ gap: 15, alignItems: 'center', justifyContent:'center', paddingBottom: 17.5}}>
          <Text style={{ fontSize: 15, fontWeight: '500' }}>Upload Background</Text>
            <TouchableOpacity
              style={{
                backgroundColor: 'gray',
                padding: 10,
                alignItems: 'center',
                borderRadius: 5,
                width: 125
              }}
            >
              <Text style={{color:'white'}}>Upload</Text>
            </TouchableOpacity>
          </View>
          </View>
          <View style={{gap: 15}}>
          <View>
          <View style={{ alignItems: "center" }}>
                <TextInput
                  style={{ width: 245, borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, fontSize: 11.5, fontWeight: 'normal', color: "#168" }}
                  placeholder="Username"
                />
              </View>
              <View style={{ alignItems: "center" }}>
                <TextInput style={{ width: 245, borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, fontSize: 11.5, fontWeight: 'normal', color: "#168" }}
                  placeholder="Email"
                  keyboardType="email-address" />
              </View>
          </View>

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingBottom: 12.5 }}>
                <TouchableOpacity
                  style={{ backgroundColor: '#44f', padding: 10, alignItems: 'center', borderRadius: 5, width: 140, justifyContent: 'center', 
                }}
                onPress={()=>{
                  Alert.alert("Congs on Joining Akazi Kanoze", "Post your potential work and connect with people who need your services.",[
                      {text:'Yes'},
                      {text:'No'},
                  ])
              }}
                >
                  <Text 
                    style={{ color: 'white', fontSize: 12.5 }}
                  >Next</Text>
                </TouchableOpacity>
          </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default App;