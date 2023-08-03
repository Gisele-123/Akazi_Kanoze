import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const Register = () => {
  return (
    <View style={{ flex: 1, padding: 15, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ borderWidth: 0.2, borderColor: "#ccf", padding: 21 }}>
        <View style={{ gap: 12.5 }}>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Akazi Kanoze</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'rgb(44, 44, 44)' }}>Create New Account</Text>
          </View>
          <View>
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingBottom: 25 }}>
              <Text style={{ fontSize: 12, fontWeight: 'normal', color: '#117' }}>Help us know you better from information you</Text>
              <Text style={{ fontSize: 12, fontWeight: 'normal', color: '#117' }}>provide to have access to Akazi Kanoze</Text>
            </View>

            <View>
              <View style={{ alignItems: "center" }}>
                <TextInput
                  style={{ width: 345, borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, fontSize: 11.5, fontWeight: 'normal', color: "#168" }}
                  placeholder="Username"
                />
              </View>
              <View style={{ alignItems: "center" }}>
                <TextInput style={{ width: 345, borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, fontSize: 11.5, fontWeight: 'normal', color: "#168" }}
                  placeholder="Email"
                  keyboardType="email-address" />
              </View>
              <View style={{ alignItems: "center" }}>
                <TextInput
                  style={{ width: 345, borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, fontSize: 11.5, fontWeight: 'normal', color: "#168" }}
                  placeholder="Password"
                  secureTextEntry
                />
              </View>
              <View style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingBottom: 4 }}>
                <Text style={{ fontSize: 9.5, fontWeight: 'normal', color: '#117' }}>Password must be at least 8 characters, a combination of letters and characters</Text>
                <View style={{ flex: 1, flexDirection: 'row', gap: 6, alignItems: 'center' }}>
                  &nbsp;
                  <View style={{ width: 70, height: 4, backgroundColor: 'rgb(215, 215, 215)', borderRadius: 5 }} />&nbsp;
                  <View style={{ width: 70, height: 4, backgroundColor: 'rgb(215, 215, 215)', borderRadius: 5 }} />&nbsp;
                  <View style={{ width: 70, height: 4, backgroundColor: 'rgb(215, 215, 215)', borderRadius: 5 }} />&nbsp;
                  <View style={{ width: 70, height: 4, backgroundColor: 'rgb(215, 215, 215)', borderRadius: 5 }} />
                </View>
              </View>
              <View style={{ alignItems: "center" }}>
                <TextInput
                  style={{ width: 345, borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, fontSize: 11.5, fontWeight: 'normal', color: "#168" }}
                  placeholder="Confirm password"
                />
              </View>
              <View style={{ width: 325, flex: 1, flexDirection: 'row', gap: 6, alignItems: 'center', padding: 17.5 }}>
                {/* icon */}
                <Text style={{ color: '#117', fontSize: 11 }}>
                  By continuing, you Agree to <Text style={{ fontWeight: 'bold' }}>Term Of Use</Text> and confirm
                  that you have read <Text style={{ fontWeight: 'bold' }}>Privacy Policy</Text>
                </Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingBottom: 12.5 }}>
                <TouchableOpacity
                  style={{ backgroundColor: '#44f', padding: 10, alignItems: 'center', borderRadius: 5, width: 140, justifyContent: 'center' }}
                >
                  <Text style={{ color: 'white', fontSize: 12.5 }}>Submit</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: '#117', fontSize: 13 }}>Already have an account?<Text>
                  <Text style={{ color: 'blue', fontSize: 13 }}>Login</Text>
                </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Register;
