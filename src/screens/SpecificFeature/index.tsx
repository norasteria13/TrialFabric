import React from 'react';
import {Text, ScrollView as RNScrollView, View} from 'react-native';
import Animated from 'react-native-reanimated';

const {ScrollView} = Animated;

const MainPage: React.FC = () => {
  return (
    <ScrollView style={{paddingTop: 100}}>
      <Text accessibilityLabel="text-1" testID="text-1">
        THIS IS SPECIFIC FEATURE PAGE 100
      </Text>
      <View>
        <View>
          <View>
            <Text accessibilityLabel="text-1" testID="text-1">
              THIS IS SPECIFIC FEATURE PAGE
            </Text>
            <Text accessibilityLabel="text-2" testID="text-2">
              THIS IS SPECIFIC FEATURE PAGE
            </Text>
            <Text accessibilityLabel="text-3" testID="text-3">
              THIS IS SPECIFIC FEATURE PAGE
            </Text>
            <Text accessibilityLabel="text-4" testID="text-4">
              THIS IS SPECIFIC FEATURE PAGE
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MainPage;
