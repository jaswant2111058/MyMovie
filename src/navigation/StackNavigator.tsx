import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from '../screen';
import {RootStackParamList} from '../types/navigation.ts';
import {COLORS} from "../utils/colors"
import CustomLayout from '../components/CustomLayout.tsx';
import Header from '../components/Header.tsx';

export const routeWithOutHeader = ["Welcome", "GenreSelection"];

const Stack = createNativeStackNavigator<RootStackParamList>();
const StackNavigator: React.FC = () => {



  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={({route, navigation}) => ({
        header: () => {
          if (!routeWithOutHeader.includes(route.name)) {
            return (
                <Header title = {route.name} />
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
          <CustomLayout routeName={screen.name} >
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
