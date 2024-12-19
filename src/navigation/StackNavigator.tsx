import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from '../screen';
import {RootStackParamList} from '../types/navigation.ts';
import {COLORS} from "../utils/colors"
import CustomLayout from '../components/CustomLayout.js';

const Stack = createNativeStackNavigator<RootStackParamList>();
const StackNavigator: React.FC = () => {


  return (
    <Stack.Navigator
      initialRouteName="Homepage"
      screenOptions={({route, navigation}) => ({
        header: () => {
          if (route.name !== 'Login' && route.name !== 'SetPassword') {
            return (
              <>
                <Header />
              </>
            );
          }
          return null;
        },
        contentStyle: {
          flex: 1,
          backgroundColor: COLORS.background,
          paddingHorizontal: 0,
        },
      })}>
      {screens.map(screen => {
        const ScreenComponent = (props: any) => (
          <CustomLayout routeName={screen.name} navigation={props.navigation}>
            <screen.component {...props} />
          </CustomLayout>
        );
        return (
          <Stack.Screen
            key={screen.name}
            name={screen.name as keyof RootStackParamList}
            component={ScreenComponent}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default StackNavigator;
