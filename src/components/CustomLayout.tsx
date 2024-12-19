import React from 'react';
import { View} from 'react-native';
import Footer from './Footer.tsx';
const CustomLayout = ({ children, routeName, navigation }) => {
  let screensWithFooter = ['Login'];


  return (
    <>
      <View>{children}</View>
      {screensWithFooter.includes(routeName) && (
        <Footer navigation={navigation} routeName={routeName} />
      )}
    </>
  );
};


export default CustomLayout;
