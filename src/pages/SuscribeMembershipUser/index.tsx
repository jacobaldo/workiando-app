import React from 'react';
import {useTheme} from '../../provider/ThemeProvider';
import {MyAppProps} from '../App/types';
import {StackScreenProps} from '@react-navigation/stack';

import Gradient from '../../components/LinearGradient';
import useSuscribeMembership from './hooks';
import {ActivityIndicator, Text} from 'react-native-paper';
import {useUser} from '../../provider/AuthProvider';
import {RefreshControl, ScrollView, View} from 'react-native';

import {styles} from './styles';
import PlanCard from '../../components/2.Molecules/PlanCard';
import {Membership} from '../ConfigureEmploye/MembershipSheet/types';
import {spacings} from '../../constants/spacings';
import {ConfirmMembershipSheet} from './ConfirmMembershipSheet';

interface Props
  extends StackScreenProps<MyAppProps, 'SuscribeMembershipUser'> {}
const SuscribeMembershipUser = ({navigation}: Props) => {
  //   const {data} = route.params;
  const {theme} = useTheme();
  const {
    authState: {user},
  } = useUser();
  const {
    onPressMembership,
    dataMembership,
    loadingMembership,
    refreshMembership,
    openConfirmm,
    setOpenConfirm,
    membership,
  } = useSuscribeMembership({
    navigation,
  });
  return (
    <Gradient>
      <ScrollView
        style={styles.body}
        refreshControl={
          <RefreshControl
            refreshing={loadingMembership}
            onRefresh={() => refreshMembership()}
          />
        }>
        <Text
          variant="titleMedium"
          style={{paddingVertical: spacings.s2}}
          theme={
            theme
          }>{`Hola, ${user?.name} ¿Cual de nuestros planes deseas?`}</Text>

        {loadingMembership ? (
          <ActivityIndicator theme={theme} size={30} />
        ) : (
          <View style={styles.scroll}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              {dataMembership?.docs &&
                dataMembership.docs.map((item: Membership, index: number) => {
                  return (
                    <PlanCard
                      key={index}
                      data={{
                        ...item,
                      }}
                      onPress={onPressMembership}
                    />
                  );
                })}
            </ScrollView>
          </View>
        )}
        {membership && (
          <ConfirmMembershipSheet
            isOpenFilter={openConfirmm}
            setIsOpenFilter={setOpenConfirm}
            navigation={navigation}
            membership={membership}
          />
        )}
      </ScrollView>
    </Gradient>
  );
};

export default SuscribeMembershipUser;
