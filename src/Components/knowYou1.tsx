import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../rootStackParamList';
type knowYou1ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'KnowYou4'>;

interface knowYou1Props {
  navigation: knowYou1ScreenNavigationProp;
}


const KnowYou1 = ({navigation}: knowYou1Props) => {
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
    console.log('Form submitted!');
  };

  return (
  <View style={{flex: 1, padding: 15, alignItems: 'center', justifyContent: 'center'}}>
    <View style={{ flex: 1, padding: 20, borderWidth: 0.2, borderColor: '#ccf', justifyContent: 'center', alignItems: 'center' }}>
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
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', paddingBottom: 17.5, gap: 15 }}>
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
              onPress={() => handleNumberButtonClick(1)}
            >
              <Text style={{ color: '#00e' }}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                width: 45,
                height: 45,
                padding: 12.5,
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: '#ccc'
              }}
              onPress={() => handleNumberButtonClick(2)}
            >
              <Text style={{ color: '#abf' }}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                width: 45,
                height: 45,
                padding: 12.5,
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: '#ccc'
              }}
              onPress={() => handleNumberButtonClick(3)}
            >
              <Text style={{ color: '#abf' }}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                width: 45,
                height: 45,
                padding: 12.5,
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: '#ccc'
              }}
              onPress={() => handleNumberButtonClick(4)}
            >
              <Text style={{ color: '#abf' }}>4</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>
          <View style={{ flexDirection: 'column', gap: 15, paddingBottom: 21}}>
            <TouchableOpacity
              style={{
                backgroundColor: isMarketerChecked ? '#fff' : '#fff',
                padding: 10,
                borderRadius: 5,
                width: 245,
                borderWidth: 2,
                borderColor: isMarketerChecked ? 'blue' : '#ccc'
              }}
              onPress={handleMarketerCheck}
            >
              <Text style={{ color: isMarketerChecked ? '#000' : '#ccc', fontWeight: isMarketerChecked ? '600' : 'normal' }}>Marketer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: isClientChecked ? '#fff' : '#fff',
                padding: 10,
                borderRadius: 5,
                width: 245,
                borderWidth: 2,
                borderColor: isClientChecked ? 'blue' : '#ccc'
              }}
              onPress={handleClientCheck}
            >
              <Text style={{ color: isClientChecked ? '#000' : '#ccc' , fontWeight: isClientChecked ? '600' : 'normal'}}>Client</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{ backgroundColor: '#44f', padding: 10, alignItems: 'center', borderRadius: 5, width: 245 }}
            onPress={() => navigation.navigate('knowYou2')}
          >
            <Text style={{ color: 'white', fontSize: 12.5 }}>Next</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  </View>
  );
};

export default KnowYou1;
