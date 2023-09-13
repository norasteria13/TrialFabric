import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {Button, Text, View} from 'react-native';

const RootPage: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={{paddingTop: 100}}>
      <Text>THIS IS ROOT PAGE</Text>
      <Text>THIS IS ROOT PAGE</Text>
      <Text>THIS IS ROOT PAGE</Text>
      <Text>THIS IS ROOT PAGE</Text>

      <Button
        title="NAVIGATE TO MAIN APP"
        onPress={() => {
          navigation.navigate('Main');
        }}
      />
    </View>
  );
};

export default RootPage;
