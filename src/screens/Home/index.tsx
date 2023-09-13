import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, ScrollView, Button} from 'react-native';

const HomePage: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{paddingTop: 100}}>
      <Text> THIS IS HOME PAGE</Text>

      <Button
        title="Navigate To Specific Feature Page"
        onPress={() => {
          navigation.navigate('SpecificFeature', {
            screen: 'SpecificFetureMain',
          });
        }}
      />
    </ScrollView>
  );
};

export default HomePage;
