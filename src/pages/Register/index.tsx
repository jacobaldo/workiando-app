import React, {useContext, useRef} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {styles} from './styles';
import {InputField} from '../../components/InputField';
import {Button} from '../../components/Button';
import useLogin from './hooks';
import {useUser} from '../../provider/AuthProvider';
import {RegisterProps} from './types';
import CountryPicker from 'react-native-country-picker-modal';
import Gradient from '../../components/LinearGradient';
import {ThemeContext} from '../../provider/ThemeProvider';

const Register = ({navigation}: RegisterProps) => {
  const {theme} = useContext(ThemeContext);
  const nameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passworConfirmRef = useRef();
  const {login} = useUser();

  const {loading, formik, handleCountryChange, countryCode} = useLogin({
    navigation,
    login,
  });

  return (
    <Gradient>
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollView}>
            <View style={styles.containerImputFiel}>
              <InputField
                lastField
                currentRef={nameRef}
                label={'Nombres'}
                value={formik.values.name}
                onChange={formik.handleChange('name')}
                isError={!!formik.errors.name}
                errorValue={formik.errors.name}
              />
            </View>
            <View style={styles.containerImputFiel}>
              <InputField
                lastField
                currentRef={lastNameRef}
                label={'Apellidos'}
                value={formik.values.lastName}
                onChange={formik.handleChange('lastName')}
                isError={!!formik.errors.lastName}
                errorValue={'Ingresa tu apellido'}
              />
            </View>

            <View style={styles.containerImputFiel}>
              <InputField
                lastField
                currentRef={lastNameRef}
                label={'Numero de contacto'}
                value={formik.values.number}
                onChange={formik.handleChange('number')}
                isError={!!formik.errors.number}
                errorValue={'Ingresa tu apellido'}
                leftAdornment={
                  <CountryPicker
                    countryCode={countryCode}
                    withFilter
                    withFlag
                    withCallingCodeButton
                    withAlphaFilter
                    withCallingCode
                    onSelect={handleCountryChange}
                    theme={{
                      backgroundColor: theme.backgroundColor,
                      filterPlaceholderTextColor: theme.textColor,
                      onBackgroundTextColor: theme.textColor,
                    }}
                  />
                }
              />
            </View>

            <View style={styles.containerImputFiel}>
              <InputField
                lastField
                currentRef={emailRef}
                label={'Correo'}
                value={formik.values.email}
                onChange={formik.handleChange('email')}
                isError={!!formik.errors.email}
                errorValue={formik.errors.email}
                keyboardType="email-address"
              />
            </View>
            <View style={styles.containerImputFiel}>
              <InputField
                lastField
                currentRef={passwordRef}
                label={'Contraseña'}
                value={formik.values.password}
                onChange={formik.handleChange('password')}
                isError={!!formik.errors.password}
                errorValue={'Ingresa contraseña'}
                isPassword
              />
            </View>
            <View style={styles.containerImputFiel}>
              <InputField
                lastField
                currentRef={passworConfirmRef}
                label={'Confirmar Contraseña'}
                value={formik.values.confirmPassword}
                onChange={formik.handleChange('confirmPassword')}
                isError={!!formik.errors.confirmPassword}
                errorValue={formik.errors.confirmPassword}
                isPassword
              />
            </View>
          </ScrollView>
        </View>
        <View style={styles.registerContent}>
          <Button
            type="primary"
            btnText="Crear cuenta nueva"
            onPress={formik.handleSubmit}
            disabled={!formik.isValid || loading}
            loading={loading}
          />
        </View>
      </SafeAreaView>
    </Gradient>
  );
};

export default Register;
