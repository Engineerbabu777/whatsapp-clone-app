



import React from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';
import { Colors } from '../theme/Colors';
import WhatsappLogo from '../assets/whatsapp-logo.png';
import VectorIcon from '../utils/VectorIcons';

export default function Header() {
  return (
    <View style={styles.container}>
        <Image source={WhatsappLogo} style={styles.logoStyle} />
        <View style={styles.headerIcons}>
        <VectorIcon
          type="Feather"
          name="camera"
          color={Colors.secondaryColor}
          size={22}
        />
        <VectorIcon
          type="Ionicons"
          name="search"
          color={Colors.secondaryColor}
          size={20}
          style={styles.iconStyle}
        />
        <VectorIcon
          type="Entypo"
          name="dots-three-vertical"
          color={Colors.secondaryColor}
          size={18}
        />
      </View>
       
     </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.primaryColor,
      padding: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop:30,
    },
    logoStyle: {
      height: 25,
      width: 110,
    },
    headerIcons: {
      flexDirection: 'row',
    },
    iconStyle: {
      marginHorizontal: 25,
    },
  });
  