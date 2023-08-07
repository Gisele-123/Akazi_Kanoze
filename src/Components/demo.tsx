import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../rootStackParamList';
type demoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'KnowYou4'>;

interface demoProps {
  navigation: demoScreenNavigationProp;
}

const Demo = ({navigation}:demoProps) => {
  return (
    <View style={{ flex: 1, padding: 15, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ borderWidth: 0.2, borderColor: "#ccf", padding: 21 }}>
        <View style={{ gap: 12.5 }}>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Request Demo</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 18, fontWeight: '600', color: '#ccc' }}>Start your 7 days free trial now!</Text>
          </View>
          <View>
            <View>
              <View style={{ alignItems: "center" }}>
                <View style={{flexDirection: 'row', gap: 13.5}}>
                <TextInput
                  style={{ width: 165, borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, fontSize: 11.5, fontWeight: 'normal', color: "#168" }}
                  placeholder="First name"
                />
                <TextInput
                  style={{ width: 165, borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, fontSize: 11.5, fontWeight: 'normal', color: "#168" }}
                  placeholder="Last name"
                />
                </View>
              </View>
              <View style={{ alignItems: "center" }}>
                <TextInput style={{ width: 345, borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, fontSize: 11.5, fontWeight: 'normal', color: "#168" }}
                  placeholder="Company name" />
              </View>
              <View style={{ alignItems: "center" }}>
                <TextInput style={{ width: 345, borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, fontSize: 11.5, fontWeight: 'normal', color: "#168" }}
                  placeholder="Email"
                  keyboardType="email-address" />
              </View>
              <View style={{ alignItems: "center" }}>
                <TextInput
                  style={{ width: 345, borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, fontSize: 11.5, fontWeight: 'normal', color: "#168" }}
                  placeholder="Phone Number"
                />
              </View>
              <View style={{flexDirection: 'row', paddingTop: 12.5}}>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingBottom: 12.5 }}>
                <TouchableOpacity
                  style={{ backgroundColor: '#fff', padding: 10, alignItems: 'center', borderRadius: 5, width: 140, justifyContent: 'center', borderColor:'#44f', borderWidth: 1 }}
                  onPress={() => navigation.goBack()}
                >
                  <Text style={{ color: '#44f', fontSize: 12.5 }}>Cancel</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingBottom: 12.5 }}>
                <TouchableOpacity
                  style={{ backgroundColor: '#44f', padding: 10, alignItems: 'center', borderRadius: 5, width: 140, justifyContent: 'center', borderColor:'#44f', borderWidth: 1 }}
                  onPress={() => navigation.navigate('register')}
                >
                  <Text style={{ color: 'white', fontSize: 12.5 }}>Submit</Text>
                </TouchableOpacity>
              </View>
              </View>
              <View style={{ width: 325, flex: 1, flexDirection: 'row', gap: 6, alignItems: 'center', justifyContent: 'center', paddingLeft: 17.5 }}>
                {/* icon */}
                <Text style={{ color: '#117', fontSize: 10 }}>
                  By continuing, you Agree to <Text style={{ fontWeight: 'bold' }}>Term Of Use</Text> and confirm
                  that you have read <Text style={{ fontWeight: 'bold' }}>Privacy Policy</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Demo;
