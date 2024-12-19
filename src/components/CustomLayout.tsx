import React, { ReactNode } from 'react';
import { View } from 'react-native';
import Footer from './Footer';

interface CustomLayoutProps {
  children: ReactNode;
  routeName: string;
}

import { routeWithOutHeader } from '../navigation/StackNavigator';

const CustomLayout: React.FC<CustomLayoutProps> = ({ children, routeName }) => {

  return (
    <>
      <View>{children}</View>
      {!routeWithOutHeader.includes(routeName) && (
        <Footer activeTab={routeName} />
      )}
    </>
  );
};

export default CustomLayout;