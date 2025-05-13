import React, {useContext} from 'react';
import {View, ScrollView} from 'react-native';
import {createStyles} from './styles';
import {Typography} from '../../components/Typography';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../constants/colors';
import useConfigureEmployes from './hooks';
import {InputField} from '../../components/InputField';
import {CategorySheet} from './CategorySheet';
import {Textarea} from '../../components/Textarea';
import {TypeEmployeSheet} from './TypeEmployeSheet';
import {MyAppProps} from '../App/types';
import {StackScreenProps} from '@react-navigation/stack';
import {numberWithCommas} from '../../utils/currency/currency.utils';
import {MembershipSheet} from './MembershipSheet';
import {
  ActivityIndicator,
  Button,
  Card,
  Checkbox,
  Text,
} from 'react-native-paper';
import {ThemeContext} from '../../provider/ThemeProvider';
import {SelectLocationSheet} from './SelectLocationSheet';
import {spacings} from '../../constants/spacings';

interface Props extends StackScreenProps<MyAppProps, 'ConfigureEmploye'> {}
const ConfigureEmploye = ({navigation, route}: Props) => {
  const {theme} = useContext(ThemeContext);
  const {edit, data, admin = false} = route?.params ?? {};
  const styles = createStyles(theme);
  const {
    formik,
    dataCategories,
    openBtnSheet,
    setOpenBtnSheet,
    selectCategory,
    loading,
    selectEmploye,
    dataTypeEmploye,
    loadingEmploye,
    openEmployeSheet,
    setOpenEmployeBtnSheet,
    onConfigLocation,
    membership,
    loadingMembership,
    openMembershipSheet,
    setOpenMembershipBtnSheet,
    handleOpenEmployeSheet,
    pressSelectMembership,
    openLocationSheet,
    setOpenLocationSheet,
    loadingPut,
    address,
    setAddress,
    setQuantity,
    quantity,
  } = useConfigureEmployes({
    navigation,
    edit,
    data,
    admin,
  });
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          <View style={styles.namecompany}>
            <Typography style={styles.text3} variant={{type: 'body2'}}>
              Se Requiere
            </Typography>

            <InputField
              lastField
              label={'Ingrese el puesto...'}
              value={formik.values.position}
              onChange={formik.handleChange('position')}
              isError={!!formik.errors.position}
              errorValue={formik.errors.position}
            />
          </View>
          <View style={styles.namecompany}>
            <Typography style={styles.text3} variant={{type: 'body2'}}>
              Ingresa un descripción de tu anuncio
            </Typography>
            <Textarea
              onChange={formik.handleChange('description')}
              value={formik.values.description}
              label="Descripción"
              variant="autoHeight"
              scrollEnabled={true}
              // onBlur={onBlur}
              maxLength={200}
              multiline={true}
              usedSpecialCharacters={false}
              // rightAdornment={
              //   <View style={styles.commentSectionIcon}>
              //     <PencilIcon
              //       width={24}
              //       height={24}
              //       color={colors.primaryNew.primary900}
              //     />
              //   </View>
              // }
            />
          </View>

          <View style={styles.namecompany}>
            <InputField
              lastField
              onPress={() => setOpenBtnSheet(true)}
              label={'Seleccionar categoría...'}
              value={formik.values.categorySelect}
              rightAdornment={
                <Icon
                  name="chevron-down"
                  size={20}
                  color={colors.secondary.secondary100}
                />
              }
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{width: '48%'}}>
                <InputField
                  lastField
                  onPress={() => setOpenEmployeBtnSheet(true)}
                  label={'Tipo de Empleo*'}
                  value={formik.values.typeEmploye}
                  // onChange={formik.handleChange('position')}
                  // editable={false}
                  // labelStyle={{fo: 12}}
                  rightAdornment={
                    <Icon
                      name="chevron-down"
                      size={20}
                      color={colors.secondary.secondary100}
                    />
                  }
                />
              </View>

              {formik.values.calculableAmount && (
                <View style={{width: '48%'}}>
                  <InputField
                    lastField
                    label={'Pago por mes'}
                    value={formik.values.salary}
                    onChange={formik.handleChange('salary')}
                    isError={!!formik.errors.salary}
                    errorValue={formik.errors.salary}
                    keyboardType="numeric"
                  />
                </View>
              )}
            </View>
          </View>
          <Text theme={theme} style={{marginHorizontal: spacings.s2}}>
            Cantidad que requiere
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: spacings.s2,
              marginHorizontal: spacings.s2,
              borderWidth: 1,
              borderRadius: spacings.s4,
              padding: spacings.s1,
              width: '60%',
            }}>
            <Button
              theme={theme}
              elevation={5}
              style={{
                alignSelf: 'center',
                borderRadius: 50,
              }}
              contentStyle={{
                height: 40,
                width: 60,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              labelStyle={{
                fontSize: 25,
                textAlign: 'center',
                lineHeight: 25,
              }}
              onPress={() => setQuantity(prev => Math.max(1, prev - 1))}>
              -
            </Button>

            <Text
              theme={theme}
              style={{fontWeight: 'bold'}}
              variant="titleMedium">
              {`${quantity}`}
            </Text>

            <Button
              theme={theme}
              elevation={5}
              style={{
                alignSelf: 'center',
                borderRadius: 50,
              }}
              contentStyle={{
                height: 40,
                width: 60,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              labelStyle={{
                fontSize: 25,
                textAlign: 'center',
                lineHeight: 25,
              }}
              onPress={() => setQuantity(prev => prev + 1)}>
              +
            </Button>
          </View>
          <Card style={{marginHorizontal: 16}} theme={theme} elevation={5}>
            <Card.Content style={styles.informationSlider}>
              <Button theme={theme} icon="map-marker">
                <Text
                  theme={theme}
                  style={{textDecorationLine: 'underline'}}
                  variant="titleSmall">
                  {address?.street}
                </Text>
              </Button>

              <Button
                theme={theme}
                elevation={5}
                mode="contained"
                onPress={onConfigLocation}>
                Cambiar
              </Button>
            </Card.Content>
          </Card>

          {admin && (
            <View>
              <InputField
                lastField
                label={'Ingrese  nombre de anunciante...'}
                value={formik.values.nameuserJob}
                onChange={formik.handleChange('nameuserJob')}
                isError={!!formik.errors.nameuserJob}
                errorValue={formik.errors.nameuserJob}
              />
              <InputField
                lastField
                label={'Ingrese numero de contacto...'}
                value={formik.values.phoneuserJob}
                onChange={formik.handleChange('phoneuserJob')}
                isError={!!formik.errors.phoneuserJob}
                errorValue={formik.errors.phoneuserJob}
                keyboardType="phone-pad"
              />
            </View>
          )}
          {loadingMembership ? (
            <ActivityIndicator theme={theme} animating={true} />
          ) : (
            <Card style={{margin: 16}} theme={theme} elevation={5}>
              <Card.Content style={styles.informationSlider}>
                <Checkbox theme={theme} status={'checked'} />
                <Typography bold style={styles.text3} variant={{type: 'h5'}}>
                  {/* {selectMembership?.name} */}
                  {formik.values.membership?.name}
                </Typography>
                <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                  <Text
                    theme={theme}
                    style={{fontWeight: 'bold'}}
                    variant="titleSmall">{`S/ ${numberWithCommas(
                    formik.values.membership?.price,
                  )} /`}</Text>
                  <Text
                    theme={theme}
                    style={{color: theme.colors.outline}}
                    variant="labelSmall">{` ${formik.values.membership?.duration}dias`}</Text>
                </View>

                <Button
                  theme={theme}
                  elevation={5}
                  mode="contained"
                  onPress={handleOpenEmployeSheet}>
                  Cambiar
                </Button>
              </Card.Content>
            </Card>
          )}
        </ScrollView>
      </View>

      <View style={styles.contButton}>
        <Button
          theme={theme}
          loading={loadingPut}
          mode="contained"
          disabled={!formik.isValid}
          onPress={() => formik.handleSubmit()}>
          {edit ? ' Actualizar' : 'Siguiente'}
        </Button>
      </View>
      {formik.values.membership && (
        <MembershipSheet
          isOpen={openMembershipSheet}
          setIsOpen={setOpenMembershipBtnSheet}
          membership={membership?.docs}
          handleSelectMembership={pressSelectMembership}
          loading={loadingMembership}
          selected={formik.values.membership}
          textButton="Seleccionar Plan"
        />
      )}
      {/* 
      <Modal
          animationType="slide"
          transparent={true}
          visible={active}
          onRequestClose={closeModal}>
          <MoldalPreview onPress={navigateModal} body={body} />
        </Modal> */}

      <CategorySheet
        isOpen={openBtnSheet}
        setIsOpen={setOpenBtnSheet}
        categories={dataCategories}
        handleSelectCategory={selectCategory}
        loading={loading}
        selected={formik.values.idCategory}
      />
      <SelectLocationSheet
        isOpen={openLocationSheet}
        setIsOpen={setOpenLocationSheet}
        address={address}
        setAddress={setAddress}
      />
      <TypeEmployeSheet
        isOpen={openEmployeSheet}
        setIsOpen={setOpenEmployeBtnSheet}
        employes={dataTypeEmploye}
        handleSelectEmploye={selectEmploye}
        loading={loadingEmploye}
        selected={formik.values.idEmploye}
      />
    </View>
  );
};

export default ConfigureEmploye;
