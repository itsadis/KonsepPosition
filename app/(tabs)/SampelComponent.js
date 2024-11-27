import React, { Component } from 'react';
import { Text, View, Image, TextInput } from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{ width: 2000, height: 80, backgroundColor: '#0abde3' }}></View>
      <Text>Adisty Nurharumandari</Text>
      <Asal />
      <Text>Sekolah Tinggi Teknik Pati</Text>
      <Text>Semester 5</Text>
      <Photo />
      <TextInput style={{ borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Asal = () => {
    return <Text>Pati, Jawa Tengah </Text>;
};

const Photo = () => {
  return (
    <Image 
      source={{ uri: 'https://mitrapost.com/wp-content/uploads/2023/08/kota-pati.jpg' }}
      style={{ width: 600, height: 200, marginTop: 10 }} 
    /> 
  );
};

class BoxGreen extends Component {
    render () {
        return <Text>Ini component dari class</Text>;
    }
}

class Profile extends Component {
    render() {
        return (
            <View>
                <Image
                 source={{uri: 'https://placeimg.com/100/100/animals'}}
                 style={{width: 100, height: 100, borderRadius: 50}}
                />
                <Text style={{color: 'blue', fontSize: 24}}>Ini Hewan</Text>
            </View>
        );
    }
}

export default SampleComponent;
