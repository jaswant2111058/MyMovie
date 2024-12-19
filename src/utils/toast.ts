import Toast from 'react-native-simple-toast';
export const showToast = (message:unknown) => {
  const formattedMessage = typeof message === 'string' ? message : JSON.stringify(message);
  Toast.show(formattedMessage, Toast.SHORT);
};
