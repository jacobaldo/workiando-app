import React, {useContext} from 'react';
import {Props} from './type';
import {ThemeContext} from '../../../provider/ThemeProvider';
import {Avatar, Card} from 'react-native-paper';
import {styles} from './style';

const UserProposals = ({onPress, item}: Props) => {
  const {theme} = useContext(ThemeContext);
  const {user} = item;
  return (
    <Card style={styles.cardStyle} theme={theme} onPress={() => onPress(item)}>
      <Card.Title
        theme={theme}
        title={`${user?.name} ${user?.lastname}`}
        subtitle={user?.email}
        titleStyle={{color: theme.colors.onBackground}}
        subtitleStyle={{color: theme.colors.onBackground}}
        left={(props: any) => (
          <Avatar.Image
            {...props}
            size={40}
            source={{uri: 'https://i.pravatar.cc/300'}}
          />
        )}
        // right={props => (
        //   <IconButton {...props} icon="bookmark" onPress={() => {}} />
        // )}
      />
    </Card>
  );
};
export default UserProposals;
