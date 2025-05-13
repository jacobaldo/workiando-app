import React, {useContext} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {styles} from './styles';
import {StackScreenProps} from '@react-navigation/stack';
import {useAcceptedWorks} from './hooks';
import {MyAppProps} from '../../../types';
import {ThemeContext} from '../../../../../provider/ThemeProvider';
import {
  ActivityIndicator,
  Avatar,
  Button,
  Card,
  Chip,
  Dialog,
  Portal,
  Searchbar,
  Text,
} from 'react-native-paper';
import {borderRadius, spacings} from '../../../../../constants/spacings';
import {dateFormatConcatMid} from '../../../../../utils/formatDate.util';
import {numberWithCommas} from '../../../../../utils/currency/currency.utils';
import Feather from 'react-native-vector-icons/Feather';
import {MembershipSheet} from '../../../../ConfigureEmploye/MembershipSheet';
interface Props extends StackScreenProps<MyAppProps, 'AdminUserAndWorks'> {}
const AdminUserAndWorks = ({navigation, route}: Props) => {
  const {type} = route.params;
  const {theme} = useContext(ThemeContext);
  const {
    listAdmin,
    selectItem,
    setSelectItem,
    query,
    onSearch,
    listData,
    onPressAcept,
    visibleDialog,
    setVisibleDialog,
    showDialog,
    showDialogMembership,
    onPressAceptMembership,
    loading,
    dataSubs,
    visibleDialogM,
    setVisibleDialogM,
    handleEditEmploye,
    openMembershipSheet,
    setOpenMembershipBtnSheet,
    membership,
    loadingMembership,
    pressSelectMembership,
    selectMembership,
    handleOpenEmployeSheet,
  } = useAcceptedWorks({
    navigation,
    type,
  });

  return (
    <SafeAreaView
      style={{...styles.container, backgroundColor: theme.backgroundColor}}>
      <View style={styles.body}>
        <Searchbar
          theme={theme}
          style={styles.search}
          placeholder="Buscar usuario.."
          onChangeText={onSearch}
          value={query}
        />
        <View style={styles.headerSelect}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {listAdmin &&
              listAdmin.map((item, index) => (
                <Button
                  key={index}
                  theme={theme}
                  icon={props => (
                    <Feather name={item.icon} size={16} color={props.color} />
                  )}
                  // icon={() => item?.icon}

                  mode={selectItem === index ? 'contained' : 'contained-tonal'}
                  style={styles.options}
                  labelStyle={styles.text}
                  onPress={() => setSelectItem(index)}>
                  {item.name}
                </Button>
              ))}
          </ScrollView>
        </View>

        {type === 'user' && (
          <ScrollView
            // refreshControl={
            //   <RefreshControl
            //     refreshing={loadingSubs}
            //     onRefresh={() => refreshSubs()}
            //   />
            // }
            style={styles.listUser}
            showsVerticalScrollIndicator={false}>
            {dataSubs?.docs.map((item, index) => (
              <Card
                key={index}
                theme={theme}
                style={styles.cardList}
                elevation={5}>
                <Card.Title
                  theme={theme}
                  title={`${item?.userData?.name} ${item?.userData?.lastname}`}
                  titleStyle={{
                    color: theme.colors.onBackground,
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}
                  subtitleStyle={{
                    color: theme.colors.onBackground,
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}
                  subtitle={`# ${item.userData?.number}`}
                  left={() => (
                    <Avatar.Image
                      size={40}
                      source={{uri: 'https://picsum.photos/700'}}
                    />
                  )}
                />
                <Card.Content>
                  <Chip
                    theme={theme}
                    style={{marginVertical: 8, borderRadius: borderRadius.r4}}
                    mode="outlined"
                    icon="barcode-scan"
                    onPress={() => console.log('Pressed')}>
                    {`Codigo: ${item.paymentCode}`}
                  </Chip>
                  {item.status === 'active' && (
                    <Chip
                      mode="outlined"
                      style={{marginVertical: 8, borderRadius: borderRadius.r4}}
                      icon="clipboard-text-clock"
                      onPress={() => console.log('Pressed')}>
                      {`Vence el: ${dateFormatConcatMid(
                        item.date.endDate.toString(),
                      )}`}
                    </Chip>
                  )}
                  {item.status === 'Requested' && (
                    <View style={{flexDirection: 'row', gap: spacings.s1}}>
                      <Chip
                        style={{borderRadius: borderRadius.r4}}
                        icon="wallet-membership"
                        onPress={() => console.log('Pressed')}>
                        {item.planDetails.name}
                      </Chip>
                      <Chip
                        style={{borderRadius: borderRadius.r4}}
                        icon="currency-usd"
                        onPress={() => console.log('Pressed')}>
                        S/ {item.planDetails.price}
                      </Chip>
                      <Chip
                        style={{borderRadius: borderRadius.r4}}
                        icon="clock"
                        onPress={() => console.log('Pressed')}>
                        {item.planDetails.duration} dias
                      </Chip>
                    </View>
                  )}
                </Card.Content>
                {item.status === 'Requested' && (
                  <Card.Actions style={{marginTop: spacings.s1}}>
                    {/* <Button>Editar</Button> */}
                    <Button>Negar</Button>
                    <Button
                      theme={theme}
                      onPress={() => showDialogMembership(item)}>
                      Aceptar
                    </Button>
                  </Card.Actions>
                )}
              </Card>
            ))}
          </ScrollView>
        )}

        {type === 'work' && (
          <ScrollView
            style={styles.listUser}
            showsVerticalScrollIndicator={false}>
            {loading ? (
              <ActivityIndicator />
            ) : (
              listData?.docs.map((item, index) => (
                <Card
                  elevation={5}
                  key={index}
                  theme={theme}
                  style={styles.cardList}>
                  <Card.Title
                    theme={theme}
                    title={item?.title}
                    subtitle={`${item?.admin?.name} ${item.admin?.lastname}`}
                    titleStyle={{
                      color: theme.colors.onBackground,
                      fontWeight: 'bold',
                      fontSize: 16,
                    }}
                    subtitleStyle={{color: theme.colors.onBackground}}
                    // eslint-disable-next-line react/no-unstable-nested-components
                    left={() => (
                      <Avatar.Image
                        theme={theme}
                        size={40}
                        source={{
                          uri: item.admin?.photo ?? 'https://picsum.photos/700',
                        }}
                      />
                    )}
                  />
                  <Card.Content style={{paddingVertical: 8}}>
                    <Text
                      theme={theme}
                      numberOfLines={1}
                      style={{paddingVertical: 8}}>
                      {item.description}
                    </Text>
                    <Chip
                      theme={theme}
                      mode="flat"
                      icon="map-marker"
                      style={{marginBottom: 8}}
                      onPress={() => console.log('Pressed')}>
                      {item?.location?.address}
                    </Chip>
                    <Chip
                      theme={theme}
                      mode="flat"
                      icon="calendar-clock-outline"
                      style={{marginBottom: 8}}
                      onPress={() => console.log('Pressed')}>
                      {`${dateFormatConcatMid(
                        item.date.dateCreated,
                      )} - ${dateFormatConcatMid(item.date.dateExpired)}`}
                    </Chip>
                    <View style={{flexDirection: 'row'}}>
                      <Chip
                        theme={theme}
                        style={{marginEnd: spacings.s1}}
                        icon="wallet-membership"
                        onPress={() => console.log('Pressed')}>
                        {item?.idMembership?.name}
                      </Chip>
                      <Chip
                        theme={theme}
                        icon="currency-usd"
                        onPress={() => console.log('Pressed')}>
                        {numberWithCommas(item?.idMembership?.price)}
                      </Chip>
                    </View>
                  </Card.Content>
                  {item.status === 'created' && (
                    <Card.Actions>
                      <Button
                        theme={theme}
                        onPress={() => handleEditEmploye(item)}>
                        Editar
                      </Button>
                      <Button theme={theme}>Negar</Button>
                      <Button theme={theme} onPress={() => showDialog(item)}>
                        Aceptar
                      </Button>
                    </Card.Actions>
                  )}
                  {item.status === 'expired' && (
                    <Card.Actions>
                      <Button
                        theme={theme}
                        onPress={() => handleOpenEmployeSheet(item)}>
                        Renovar
                      </Button>
                    </Card.Actions>
                  )}
                </Card>
              ))
            )}
          </ScrollView>
        )}
      </View>
      <Portal>
        <Dialog
          theme={theme}
          visible={visibleDialog}
          onDismiss={() => setVisibleDialog(false)}>
          <Dialog.Title theme={theme}>Aceptar Anuncio</Dialog.Title>
          <Dialog.Content>
            <Text theme={theme}>
              ¿Estás seguro de que deseas aceptar este anuncio?
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button theme={theme} onPress={() => setVisibleDialog(false)}>
              Rechazar
            </Button>
            <Button theme={theme} onPress={onPressAcept}>
              Aceptar
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <Portal>
        <Dialog
          visible={visibleDialogM}
          theme={theme}
          onDismiss={() => setVisibleDialogM(false)}>
          <Dialog.Title theme={theme}>Aceptar Anuncio</Dialog.Title>
          <Dialog.Content>
            <Text theme={theme}>
              ¿Estás seguro de que deseas aceptar la solictud de la membresia,
              recuerda revisar los pagos antes de aceptar?
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button theme={theme} onPress={() => setVisibleDialogM(false)}>
              Rechazar
            </Button>
            <Button theme={theme} onPress={onPressAceptMembership}>
              Aceptar
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      {selectMembership && (
        <MembershipSheet
          isOpen={openMembershipSheet}
          setIsOpen={setOpenMembershipBtnSheet}
          membership={membership?.docs}
          handleSelectMembership={pressSelectMembership}
          loading={loadingMembership}
          selected={selectMembership}
          textButton="Actualizar"
        />
      )}
    </SafeAreaView>
  );
};

export default AdminUserAndWorks;
