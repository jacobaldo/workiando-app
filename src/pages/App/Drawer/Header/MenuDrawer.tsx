import * as React from 'react';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Typography} from '../../../../components/Typography';

const MenuDrawer = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.publicPress}
      onPress={() => navigation.navigate('ConfigureEmploye')}>
      <Typography style={styles.textStyle} bold variant={{type: 'caption'}}>
        PUBLICARsss
      </Typography>
    </TouchableOpacity>
    // <Menu
    //   visible={visible}
    //   onDismiss={closeMenu}
    //   anchor={
    //     <IconButton
    //       icon="dots-vertical"
    //       iconColor={colors.white}
    //       size={20}
    //       onPress={openMenu}
    //     />
    //   }>
    //   <Menu.Item
    //     onPress={closeMenu}
    //     title="Publicar Trabajo"
    //     leadingIcon="label"
    //   />
    //   <Menu.Item onPress={closeMenu} title="Item 2" leadingIcon="label" />
    //   <Divider />
    //   <Menu.Item onPress={closeMenu} title="Item 3" leadingIcon="label" />
    // </Menu>
  );
};

export default MenuDrawer;
