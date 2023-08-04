import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button, Image } from 'react-native';

const KnowYou2 = ({navigation}) => {
  const [selectedNumber, setSelectedNumber] = useState(2);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isFreshChecked, setIsFreshChecked] = useState(false);
  const [isOneChecked, setIsOneChecked] = useState(false);
  const [is2To4Checked, setIs2To4Checked] = useState(false);
  const [isMore4Checked, setIsMore4Checked] = useState(false);

  const handleNumberButtonClick = (number: React.SetStateAction<number>) => {
    setSelectedNumber(number);
  };

  const handleFreshCheck = () => {
    setIsFreshChecked(!isFreshChecked);
  };

  const handleOneCheck = () => {
    setIsOneChecked(!isOneChecked);
  };

  const handle2To4Check = () => {
    setIs2To4Checked(!is2To4Checked);
  };

  const handleMore4Check = () => {
    setIsMore4Checked(!isMore4Checked);
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
              onPress={() => handleNumberButtonClick(2)}
            >
              <Text style={{ color: '#00e' }}>2</Text>
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
          <View style={{flex: 1, gap: 20}}>
          <View style={{flex: 1, gap: 12}}>
          <TouchableOpacity
              style={{
                backgroundColor: isFreshChecked ? '#fff' : '#fff',
                padding: 10,
                borderRadius: 5,
                width: 245,
                borderWidth: 2,
                borderColor: isFreshChecked ? 'blue' : '#ccc'
              }}
              onPress={handleFreshCheck}
            >
              <Text style={{ color: isFreshChecked ? '#000' : '#ccc', fontWeight: isFreshChecked ? '600' : 'normal' }}>Fresh Graduate</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: isOneChecked ? '#fff' : '#fff',
                padding: 10,
                borderRadius: 5,
                width: 245,
                borderWidth: 2,
                borderColor: isOneChecked ? 'blue' : '#ccc'
              }}
              onPress={handleOneCheck}
            >
              <Text style={{ color: isOneChecked ? '#000' : '#ccc', fontWeight: isOneChecked ? '600' : 'normal'}}>Work experience less than 1year</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: is2To4Checked ? '#fff' : '#fff',
                padding: 10,
                borderRadius: 5,
                width: 245,
                borderWidth: 2,
                borderColor: is2To4Checked ? 'blue' : '#ccc'
              }}
              onPress={handle2To4Check}
            >
              <Text style={{ color: is2To4Checked ? '#000' : '#ccc', fontWeight: is2To4Checked ? '600' : 'normal' }}>Work experience in 2-4 years</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: isMore4Checked ? '#fff' : '#fff',
                padding: 10,
                borderRadius: 5,
                width: 245,
                borderWidth: 2,
                borderColor: isMore4Checked ? 'blue' : '#ccc'
              }}
              onPress={handleMore4Check}
            >
              <Text style={{ color: isMore4Checked ? '#000' : '#ccc', fontWeight: isMore4Checked ? '600' : 'normal'}}>Work experience more than 4 years</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{ backgroundColor: '#44f', padding: 10, alignItems: 'center', borderRadius: 5, width: 245 }}
            onPress={() => navigation.navigate('knowYou3')}
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

export default KnowYou2;
